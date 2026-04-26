import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#FAFAFA",
        primary: {
          DEFAULT: "#00E5FF",
          glow: "rgba(0, 229, 255, 0.4)",
        },
        accent: {
          DEFAULT: "#7B61FF",
          glow: "rgba(123, 97, 255, 0.4)",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at center, rgba(123, 97, 255, 0.1) 0%, rgba(0, 0, 0, 1) 70%)',
      },
    },
  },
  plugins: [],
};
export default config;
