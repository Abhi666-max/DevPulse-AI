"use client";

import { motion } from "framer-motion";
import { Activity, Users, Zap, ShieldAlert, TerminalSquare, Database } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Total Profiles Scanned", value: "1,337", icon: Users, color: "text-blue-400" },
  { label: "Average Score", value: "64.2 / 100", icon: Activity, color: "text-yellow-400" },
  { label: "API Health", value: "99.99%", icon: Zap, color: "text-green-400" },
  { label: "AI Tokens Used", value: "2.4M", icon: TerminalSquare, color: "text-purple-400" },
  { label: "Database Load", value: "12%", icon: Database, color: "text-pink-400" },
  { label: "Blocked Threats", value: "42", icon: ShieldAlert, color: "text-red-400" },
];

export default function AdminMatrix() {
  return (
    <div className="flex-1 flex flex-col items-center min-h-screen bg-[#050505] px-4 py-12 relative overflow-hidden font-mono">
      {/* Intense Matrix Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.15)_0%,rgba(5,5,5,1)_70%)] rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      {/* Scanlines overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none z-50 opacity-20" />

      <div className="w-full max-w-7xl mx-auto z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-16 border-b border-white/10 pb-6"
        >
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent drop-shadow-[0_0_15px_rgba(0,240,255,0.8)]">
            DevPulse AI - Founder Matrix: Abhijeet Kangane
          </h1>
          <Link href="/" className="text-primary hover:text-white transition-colors uppercase text-sm font-bold tracking-widest border border-primary/30 px-4 py-2 rounded bg-primary/10 hover:bg-primary/20">
            Exit Matrix
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
              className="bg-black/60 border border-white/10 p-6 rounded-lg relative overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <stat.icon className={`w-24 h-24 ${stat.color}`} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded bg-white/5 ${stat.color}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-gray-400 uppercase text-xs font-bold tracking-widest">{stat.label}</h3>
                </div>
                <div className={`text-4xl font-black ${stat.color} drop-shadow-[0_0_10px_currentColor]`}>
                  {stat.value}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-black/60 border border-white/10 rounded-lg p-6"
        >
          <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
            <TerminalSquare className="w-5 h-5 text-primary" />
            <h2 className="text-white uppercase text-sm font-bold tracking-widest">Live System Logs</h2>
          </div>
          <div className="space-y-2 text-xs text-gray-500 font-mono">
            <p><span className="text-green-400">[OK]</span> 15:42:01 - AI Core successfully connected to primary node.</p>
            <p><span className="text-green-400">[OK]</span> 15:42:05 - Incoming scan request for user: @torvalds</p>
            <p><span className="text-yellow-400">[WARN]</span> 15:42:08 - Rate limit threshold approaching (85%).</p>
            <p><span className="text-green-400">[OK]</span> 15:42:11 - Report generated in 1.4s. Score: 98.</p>
            <p className="animate-pulse text-primary mt-4">_ awaiting incoming connections...</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
