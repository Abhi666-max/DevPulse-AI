"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const messages = [
  "> Initializing AI core...",
  "> Scanning repositories...",
  "> Analyzing commit history...",
  "> Evaluating code quality...",
  "> Computing Recruiter Readiness Score..."
];

export function LoadingTerminal() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => 
        prev < messages.length - 1 ? prev + 1 : prev
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-2xl mx-auto mt-12 glass-panel rounded-xl p-6 font-mono text-sm shadow-lg overflow-hidden"
    >
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        <span className="ml-2 text-xs text-gray-400">devpulse_terminal</span>
      </div>
      
      <div className="flex flex-col gap-2 min-h-[120px]">
        {messages.slice(0, currentMessageIndex + 1).map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={idx === currentMessageIndex ? "text-primary font-semibold" : "text-gray-400"}
          >
            {msg}
            {idx === currentMessageIndex && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 bg-primary ml-1 align-middle"
              />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
