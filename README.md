<div align="center">
  <h1>🚀 DevPulse AI</h1>
  <p><strong>GenAI-Powered GitHub Profile Analyzer for the Modern Developer</strong></p>

  <p>
    <img src="https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 15">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/Vercel_AI_SDK-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel AI SDK">
    <img src="https://img.shields.io/badge/Deployed_on_Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
  </p>
</div>

---

## 🔗 Live Links

* 🔴 **Live Demo:** [https://dev-pulse-ai-orcin.vercel.app/](https://dev-pulse-ai-orcin.vercel.app/)
* 📺 **Video Walkthrough:** [Watch on Loom](https://www.loom.com/share/c0e59b53b2904b4b8a7af82025842777)

---

## ⚡ Project Overview

**DevPulse AI** is a state-of-the-art, AI-powered GitHub Profile Analyzer designed to give developers immediate, brutal, and actionable feedback on how their open-source presence looks to top-tier technical recruiters. By integrating the cutting-edge **Vercel AI SDK** with the **Google Gemini API**, DevPulse AI deep-dives into your repositories, language diversity, commit consistency, and community impact (stars & forks) to generate a customized evaluation. Whether you need a reality check or a massive ego boost, DevPulse AI provides it in seconds.

---

## 🌟 Core Features

* ⏱️ **< 2 Minute GitHub Assessment:** Simply enter a GitHub username and receive a complete analytical breakdown of the developer's open-source footprint almost instantly.
* 💯 **AI-driven Recruiter Readiness Score (0-100):** A comprehensive score calculated by evaluating repository count, total stars, forks, and language diversity using Google's Gemini-1.5-flash model.
* 🔥 **Brutal Roast & Constructive Boast:** Get exactly one witty, brutal sentence on what's lacking in your profile, paired with a peer-like compliment praising your absolute best trait.
* 🕵️ **The Secret Founder Matrix (Admin Dashboard):** An exclusive administrative view (`/admin-matrix`) for platform owners to visualize overarching analytics, user trends, and advanced metrics.
* 🎯 **Actionable Roadmap:** Receive exactly three highly specific, actionable next steps to level up your code and profile—no generic fluff allowed.

---

## 🧱 Tech Stack & Architecture

* **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
* **AI Integration:** [Vercel AI SDK](https://sdk.vercel.ai/docs) (`ai` & `@ai-sdk/google`)
* **LLM Provider:** [Google Gemini API](https://ai.google.dev/) (`gemini-1.5-flash`) for structured, strict JSON response generation.
* **Styling & UI:** [Tailwind CSS](https://tailwindcss.com/) with `clsx` and `tailwind-merge` for dynamic utility class management.
* **Animations:** [Framer Motion](https://www.framer.com/motion/) for premium, fluid interactions.
* **Schema Validation:** [Zod](https://zod.dev/) for strict type-safe AI response parsing.

---

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/devpulse-ai.git
   cd devpulse-ai
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env.local` file in the root directory and add your required keys.

   > [!CAUTION]
   > **🛡️ Security Note:** 
   > Always create a local `.env.local` file for your secrets. **NEVER** commit your `GOOGLE_GENERATIVE_AI_API_KEY` or `GITHUB_TOKEN` to version control. Doing so will expose your private API limits and compromise your accounts.

   ```env
   # .env.local
   GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key_here
   GITHUB_TOKEN=your_github_personal_access_token_here # Optional: Prevents GitHub API rate limiting
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the app:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---
### 👨💻 Developed By
**Abhijeet Kangane (@Abhi666-max)**
* 💼 [LinkedIn](https://www.linkedin.com/in/abhijeet-kangane-0578b2395/)
* 🐙 [GitHub](https://github.com/abhi666-max)
* 🐦 [X (Twitter)](https://x.com/abhijeet_037)
* 📸 [Instagram](https://www.instagram.com/abhijeet.037/)
---
