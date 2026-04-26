"use server";

export interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string | null;
  company: string | null;
  blog: string;
  location: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface GitHubRepo {
  name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

export interface AggregatedGitHubData {
  user: GitHubUser;
  totalStars: number;
  totalForks: number;
  topLanguages: { language: string; count: number }[];
  error?: string;
}

export async function fetchGitHubData(username: string): Promise<AggregatedGitHubData> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };

  // Allow using GITHUB_TOKEN if available in env to increase rate limits
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers, next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`, { headers, next: { revalidate: 3600 } }),
    ]);

    if (userRes.status === 404) {
      return { error: "User not found" } as unknown as AggregatedGitHubData;
    }

    if (userRes.status === 403 || reposRes.status === 403) {
      return { error: "GitHub API rate limit exceeded" } as unknown as AggregatedGitHubData;
    }

    if (!userRes.ok || !reposRes.ok) {
      return { error: "Failed to fetch GitHub data" } as unknown as AggregatedGitHubData;
    }

    const user: GitHubUser = await userRes.json();
    const repos: GitHubRepo[] = await reposRes.json();

    let totalStars = 0;
    let totalForks = 0;
    const languageCounts: Record<string, number> = {};

    repos.forEach((repo) => {
      // Don't count stars/forks from forked repos to be fair in the score
      if (!repo.fork) {
        totalStars += repo.stargazers_count;
        totalForks += repo.forks_count;
      }

      if (repo.language) {
        languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
      }
    });

    const topLanguages = Object.entries(languageCounts)
      .map(([language, count]) => ({ language, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5); // top 5 languages

    return {
      user,
      totalStars,
      totalForks,
      topLanguages,
    };
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return { error: "An unexpected error occurred" } as unknown as AggregatedGitHubData;
  }
}
