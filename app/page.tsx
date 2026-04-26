"use client";

import { motion } from "framer-motion";
import { Search, Github, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoadingTerminal } from "@/components/LoadingTerminal";
import { cn } from "@/lib/utils";

export default function Home() {
  const [username, setUsername] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const router = useRouter();

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;
    setIsAnalyzing(true);
    router.push(`/report/${encodeURIComponent(username.trim())}`);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 relative overflow-hidden bg-black selection:bg-white/20">
      {/* Ultra-subtle background gradients for premium depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl w-full mx-auto text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] mb-8 text-xs tracking-widest text-gray-400 font-medium uppercase shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          System Online
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 text-white leading-tight">
          Analyze any developer. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
            In seconds.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-500 font-light mb-12 max-w-xl mx-auto leading-relaxed">
          DevPulse uses advanced heuristics to extract real impact from GitHub profiles, giving you a definitive Recruiter Readiness Score.
        </p>

        {!isAnalyzing ? (
          <motion.form 
            onSubmit={handleAnalyze}
            className="max-w-xl mx-auto relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={cn(
              "relative flex items-center w-full h-16 md:h-16 rounded-2xl bg-[#0A0A0A] overflow-hidden border transition-all duration-500",
              isFocused ? "border-primary/50 shadow-[0_0_30px_rgba(0,229,255,0.15)]" : "border-white/10 hover:border-white/20 shadow-xl"
            )}>
              <div className="pl-6 text-gray-500">
                <Github className={cn("w-5 h-5 transition-colors duration-300", isFocused ? "text-primary" : "text-gray-500")} />
              </div>
              
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Enter a GitHub username"
                className="w-full h-full bg-transparent border-none outline-none text-white px-4 text-base md:text-lg font-light placeholder:text-gray-600"
                autoComplete="off"
                spellCheck="false"
              />
              
              <div className="pr-2">
                <button
                  type="submit"
                  disabled={!username.trim()}
                  className="h-12 px-6 rounded-xl bg-white text-black font-medium text-sm flex items-center gap-2 hover:bg-gray-200 active:scale-95 transition-all disabled:opacity-30 disabled:active:scale-100 disabled:cursor-not-allowed"
                >
                  Analyze <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.form>
        ) : (
          <LoadingTerminal />
        )}
      </motion.div>
    </div>
  );
}
