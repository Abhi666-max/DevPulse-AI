"use server";

import { generateObject } from "ai";
import { google } from "@ai-sdk/google";
import { z } from "zod";
import { AggregatedGitHubData } from "./github";

export interface RecruiterReport {
  score: number;
  roast: string;
  boast: string;
  whatRecruitersNoticeFirst: string[];
  actionableRoadmap: string[];
}

const ReportSchema = z.object({
  score: z.number().min(0).max(100),
  roast: z.string(),
  boast: z.string(),
  whatRecruitersNoticeFirst: z.array(z.string()),
  actionableRoadmap: z.array(z.string()),
});

function generateFallbackReport(data: AggregatedGitHubData): RecruiterReport {
  // Manual heuristics for score
  let score = 30; // base score
  if (data.user.public_repos > 10) score += 10;
  if (data.user.public_repos > 30) score += 10;
  if (data.totalStars > 10) score += 10;
  if (data.totalStars > 50) score += 15;
  if (data.totalForks > 5) score += 10;
  if (data.topLanguages.length >= 3) score += 15;
  score = Math.min(score, 98); // Nobody is perfect in fallback

  const roast = data.user.public_repos < 5 
    ? "Your GitHub looks like a ghost town—where is the code?" 
    : data.totalStars === 0 
    ? "Lots of repos, zero stars. Are you building these just for yourself?"
    : "You have code, but your lack of varied languages makes your profile look like a one-trick pony.";

  const boast = data.totalStars > 10 
    ? `Impressive! Getting ${data.totalStars} stars shows the community actually values your work.`
    : data.topLanguages.length > 3
    ? `You dabble in ${data.topLanguages.map(l => l.language).join(", ")}, which shows great adaptability.`
    : `You've got ${data.user.public_repos} repos, showing a solid commitment to building.`;

  return {
    score,
    roast,
    boast,
    whatRecruitersNoticeFirst: [
      `Account age: Created in ${new Date(data.user.created_at).getFullYear()}`,
      `Total repositories: ${data.user.public_repos}`,
      `Primary tech stack: ${data.topLanguages.slice(0, 2).map(l => l.language).join(", ") || "Unknown"}`
    ],
    actionableRoadmap: [
      "Add comprehensive README.md files to your top 3 repositories.",
      "Contribute to open-source projects to increase your global stars.",
      "Pin your best repositories to your profile to control the narrative."
    ]
  };
}

export async function generateRecruiterReport(data: AggregatedGitHubData): Promise<RecruiterReport> {
  // CRITICAL FAIL-SAFE: If no API key is present, use fallback heuristics
  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY && !process.env.OPENAI_API_KEY) {
    console.warn("No AI API key found. Using fallback heuristics.");
    return generateFallbackReport(data);
  }

  try {
    const { object } = await generateObject({
      model: google("gemini-1.5-flash"),
      schema: ReportSchema,
      system: `You are a highly experienced, straight-talking Staff Engineer at a FAANG company reviewing a candidate's GitHub profile. 
      Analyze the provided GitHub data and return a strict JSON response.
      The 'score' must be an integer between 0 and 100 evaluating their overall impact, commit consistency, stars, and language diversity.
      The 'roast' should be exactly 1 brutal, witty sentence on what's missing or bad. DO NOT use emojis or generic AI speak.
      The 'boast' should be exactly 1 sentence praising their absolute best trait like a human peer would. DO NOT use emojis.
      'whatRecruitersNoticeFirst' must be exactly 3 sharp bullet points, maximum 10 words each.
      'actionableRoadmap' must be exactly 3 highly specific next steps to level up their code. No generic fluff like "keep coding".`,
      prompt: JSON.stringify(data, null, 2),
    });

    return object;
  } catch (error) {
    // Use console.log to prevent Next.js from throwing a red overlay in Dev mode
    console.log("AI Generation failed. Falling back to heuristics.", error);
    return generateFallbackReport(data);
  }
}
