"use client";

import { motion } from "framer-motion";
import { AggregatedGitHubData } from "@/actions/github";
import { RecruiterReport } from "@/actions/ai";
import { Star, GitFork, Flame, Skull, Target, ArrowRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardProps {
  data: AggregatedGitHubData;
  report: RecruiterReport;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function DashboardClient({ data, report }: DashboardProps) {
  if (data.error) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <h2 className="text-3xl font-bold text-red-500 mb-4">Analysis Failed</h2>
        <p className="text-gray-400">{data.error}</p>
      </div>
    );
  }

  const { user } = data;
  
  // Score color logic
  const scoreColor = report.score >= 80 ? "#00F0FF" : report.score >= 50 ? "#EAB308" : "#EF4444";

  return (
    <div className="flex-1 w-full max-w-6xl mx-auto px-4 py-12 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-hero-glow rounded-full blur-[120px] -z-10 pointer-events-none opacity-40" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-50" />
          
          <div className="relative">
            <img src={user.avatar_url} alt={user.login} className="w-32 h-32 rounded-full border-4 border-white/10" />
            <div className="absolute -bottom-2 -right-2 bg-black/80 px-3 py-1 rounded-full border border-white/10 text-xs font-bold text-primary flex items-center gap-1">
              <Github className="w-3 h-3" /> @{user.login}
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{user.name || user.login}</h1>
            <p className="text-gray-400 max-w-xl">{user.bio || "No bio available. (Recruiters hate this)"}</p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-6">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="font-medium text-white">{data.totalStars} Stars</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                <GitFork className="w-4 h-4 text-primary" />
                <span className="font-medium text-white">{data.totalForks} Forks</span>
              </div>
              {data.topLanguages.slice(0, 2).map((lang, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  <span className="font-medium text-gray-300">{lang.language}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Glowing Circular Score */}
          <div className="flex flex-col items-center justify-center relative w-40 h-40">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
              <motion.circle 
                cx="50" cy="50" r="40" 
                stroke={scoreColor} 
                strokeWidth="8" fill="none" 
                strokeDasharray="251.2"
                initial={{ strokeDashoffset: 251.2 }}
                animate={{ strokeDashoffset: 251.2 - (251.2 * report.score) / 100 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                className="drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-black" style={{ color: scoreColor }}>{report.score}</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Score</span>
            </div>
          </div>
        </motion.div>

        {/* Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="glass-panel p-6 rounded-2xl relative">
              <div className="flex items-center gap-3 mb-6">
                <Flame className="w-6 h-6 text-orange-500" />
                <h2 className="text-2xl font-bold">The Verdict</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-[#000000] border border-red-500/20 p-5 rounded-lg shadow-[inset_0_0_20px_rgba(239,68,68,0.02)]">
                  <div className="flex items-center gap-2 text-red-500 font-bold mb-3 text-xs tracking-[0.2em] uppercase">
                    <Skull className="w-4 h-4" /> System Critique
                  </div>
                  <p className="text-gray-300 leading-relaxed font-light">"{report.roast}"</p>
                </div>
                <div className="bg-[#000000] border border-primary/20 p-5 rounded-lg shadow-[inset_0_0_20px_rgba(0,229,255,0.02)]">
                  <div className="flex items-center gap-2 text-primary font-bold mb-3 text-xs tracking-[0.2em] uppercase">
                    <Star className="w-4 h-4" /> Core Strength
                  </div>
                  <p className="text-gray-300 leading-relaxed font-light">"{report.boast}"</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-panel p-6 rounded-2xl">
              <h2 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                What Recruiters Notice First
              </h2>
              <ul className="space-y-4">
                {report.whatRecruitersNoticeFirst.map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="mt-1 min-w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-gray-400">
                      {idx + 1}
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="glass-panel p-6 rounded-2xl border-accent/20 shadow-[0_0_20px_rgba(138,43,226,0.1)]">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold">Actionable Roadmap</h2>
              </div>
              <ul className="space-y-4">
                {report.actionableRoadmap.map((item, idx) => (
                  <li key={idx} className="flex gap-4 group items-start">
                    <div className="mt-1">
                      <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-200 transition-colors font-light text-sm md:text-base leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-panel p-6 rounded-2xl">
              <h2 className="text-xl font-bold mb-6 text-white">Top Languages</h2>
              <div className="space-y-4">
                {data.topLanguages.map((lang, idx) => {
                  const maxCount = Math.max(...data.topLanguages.map(l => l.count));
                  const percentage = (lang.count / maxCount) * 100;
                  return (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300 font-medium">{lang.language}</span>
                        <span className="text-gray-500">{lang.count} repos</span>
                      </div>
                      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ duration: 1, delay: 0.5 + (idx * 0.1) }}
                          className="h-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
