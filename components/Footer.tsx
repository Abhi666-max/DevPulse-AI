"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="w-full py-8 mt-auto flex justify-center items-center relative z-10 bg-black">
      <div className="absolute top-0 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <p className="text-sm text-gray-500 font-light flex items-center gap-2">
        <span className="opacity-50">Initiated by</span>
        <motion.a
          href="https://github.com/abhijeetkangane"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ color: "#FAFAFA" }}
          className="font-medium text-gray-300 transition-colors tracking-wide"
        >
          Abhijeet Kangane
        </motion.a>
        <span className="opacity-30 mx-1">•</span>
        <span className="text-gray-500 tracking-widest uppercase text-[10px] font-semibold">Founder</span>
      </p>
    </footer>
  );
}
