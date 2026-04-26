<div align="center">
  
# 🚀 DevPulse AI
**Bridging the gap between Developers and Recruiters with GenAI Intelligence.**

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

</div>

---

## 🎥 Live Demo
🌐 **Live Link:** [Insert Vercel URL Here]

## 📽️ Video Walkthrough
📺 **Watch the Demo:** [Insert Video Link Here]

---

## ❓ Why DevPulse AI?
The modern technical hiring landscape is broken. Recruiters spend an average of 6 seconds scanning a resume and rarely have the technical bandwidth to deeply audit a developer's GitHub profile. Developers, on the other hand, build incredible side projects that get lost in the noise of fragmented commit histories and undocumented repositories.

**DevPulse AI** solves this by serving as the ultimate technical translator. We extract raw GitHub telemetry (commit consistency, language diversity, fork vs. original ratios, and star density) and feed it into a high-performance GenAI engine. The result? A perfectly distilled, highly actionable **Recruiter Readiness Score** delivered in milliseconds.

---

## ✨ Key Features
- ⚡ **Assess your GitHub in < 2 Minutes:** We don't believe in waiting. Utilizing parallelized API fetching and edge-optimized Next.js architecture, DevPulse analyzes years of commit data and generates an AI report blazingly fast.
- 🎯 **Recruiter Readiness Score:** A merciless, data-driven 0-100 scoring system evaluating your overall impact, consistency, and open-source contributions. 
- 🔥 **Brutal Roast & Constructive Boast:** No generic AI fluff. Our engine is prompted as a FAANG Staff Engineer—delivering exactly 1 brutal roast of your weaknesses and 1 highly satisfying boast of your strengths.
- 🗺️ **Actionable Roadmap:** Get 3 precise, no-nonsense next steps to elevate your repository quality before your next interview.
- 👁️ **Founder Matrix:** A hidden, exclusive Admin Dashboard (`/admin-matrix`) for high-level system oversight and ecosystem telemetry.

---

## 🛠️ Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Custom Dark Mode & Glassmorphism)
- **Animations:** Framer Motion
- **AI Engine:** Vercel AI SDK + Google Gemini 1.5 Flash (Structured Object Generation)
- **Data Fetching:** GitHub REST API (Concurrent `Promise.all` optimization)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js 18+ and `npm` installed.

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/abhijeetkangane/devpulse-ai.git
   cd devpulse-ai
   ```

2. **Install dependencies:**
   *Note: We use `--legacy-peer-deps` to ensure absolute stability with React 19 and the Vercel AI SDK.*
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables:**
   Follow the Security instructions below to create your `.env.local` file.

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` to see the engine online.

---

## 🔒 Security & Privacy
**DevPulse AI operates with absolute security.** 
API keys are **NEVER** hardcoded, tracked in version control, or exposed to the client browser. All AI generation happens securely on the server via Next.js Server Actions.

To run this project locally, you must create a `.env.local` file in the root directory and add your credentials:

```env
# .env.local
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key_here
GITHUB_TOKEN=your_optional_github_token_for_higher_rate_limits
```

*Note: The `GITHUB_TOKEN` is optional but highly recommended to bypass public rate limits.*

---

## 🌍 Deployment
This project is hyper-optimized for **Vercel** edge deployment.

1. Push your code to a GitHub repository.
2. Import the project into your Vercel Dashboard.
3. Navigate to the **Settings > Environment Variables** tab in Vercel.
4. Add your `GOOGLE_GENERATIVE_AI_API_KEY` (and `GITHUB_TOKEN` if applicable).
5. Click **Deploy**.

The Vercel build engine will automatically pick up the Next.js 15 config and deploy your instance instantly.

---

<div align="center">
  <p>Engineered with absolute precision by <b>Abhijeet Kangane</b> | Founder</p>
</div>
