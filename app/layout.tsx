import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevPulse AI | GitHub Profile Analyzer",
  description: "Get your Recruiter Readiness Score in under 2 minutes with GenAI-powered GitHub Profile Analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning className={`${outfit.className} min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary`}>
        <main className="flex-1 flex flex-col relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
