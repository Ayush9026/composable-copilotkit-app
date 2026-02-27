'use client';

import React from 'react';
import { CopilotChat } from "@copilotkit/react-ui";
import { motion } from 'framer-motion';
import { LangGraphAgent } from "@/components/LangGraphAgent";
import "@copilotkit/react-ui/styles.css";

export default function Home() {
  return (
    <LangGraphAgent>
      <div className="flex h-screen w-full overflow-hidden text-slate-800 font-sans relative">
        {/* Animated Mesh Background */}
        <div className="bg-mesh" />

        {/* Floating Sidebar */}
        <motion.aside
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="w-80 glass-sidebar flex flex-col hidden md:flex z-20 m-4 rounded-[2rem] shadow-lg border border-white/20"
        >
          <div className="p-8 border-b border-white/40">
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="h-12 w-12 bg-gradient-to-tr from-violet-600 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl shadow-violet-500/20 text-white"
              >
                <span className="text-2xl">🧩</span>
              </motion.div>
              <div>
                <h1 className="font-extrabold text-xl tracking-tight text-slate-950">Composable</h1>
                <p className="text-[10px] text-violet-600 font-bold uppercase tracking-[0.2em]">CopilotKit</p>
              </div>
            </div>
          </div>

          <div className="p-8 flex-1 overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Neural Nodes</h2>
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            </div>

            <div className="space-y-4">
              <AgentStatusCard
                icon="📝"
                name="Synthesizer"
                desc="Deep Context Extraction"
                accent="bg-cyan-500"
              />
              <AgentStatusCard
                icon="🧠"
                name="Reasoning Engine"
                desc="Multi-step Inference"
                accent="bg-violet-500"
              />
              <AgentStatusCard
                icon="⚙️"
                name="Dev Architect"
                desc="Code Synthesis & Logic"
                accent="bg-pink-500"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0 }}
              className="mt-12 p-5 rounded-[1.5rem] bg-gradient-to-br from-violet-600 to-indigo-700 text-white shadow-2xl shadow-violet-500/30 relative overflow-hidden group"
            >
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-sm font-bold mb-1 flex items-center">
                System Verified
              </h3>
              <p className="text-[11px] text-violet-50 text-white/90 leading-relaxed font-medium">
                LangGraph backend synchronized.<br />
                All nodes operational.
              </p>
            </motion.div>
          </div>

          <div className="p-6 border-t border-slate-200/40">
            <p className="text-[10px] text-slate-400 text-center font-bold tracking-tight">AI ECOSYSTEM • POWERED BY COPILOTKIT</p>
          </div>
        </motion.aside>

        {/* Main Workspace */}
        <main className="flex-1 flex flex-col relative z-10 m-4 ml-0 md:ml-0">
          {/* Header Area */}
          <header className="h-20 flex items-center justify-between px-8 z-30 mb-2">
            <div>
              <h2 className="text-2xl font-black text-slate-950 tracking-tight">Agent Workspace</h2>
              <p className="text-xs text-slate-500 font-semibold tracking-wide">Orchestrating complex intelligence tasks</p>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="px-4 py-2 glass-modern rounded-full border border-white/60 text-[11px] font-bold text-slate-700 shadow-sm">
                Latency: <span className="text-cyan-500">24ms</span>
              </div>
              <div className="h-10 w-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-violet-400 to-indigo-600"></div>
              </div>
            </div>
          </header>

          <div className="flex-1 flex flex-col items-center justify-center p-4">
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0 }}
              className="w-full max-w-6xl h-full glass-card-ultra overflow-hidden flex flex-col relative"
            >
              {/* Soft inner glow */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none z-0"></div>

              <CopilotChat
                className="h-full z-10 ultra-chat"
                instructions="You are a world-class AI agent interface. Be precise, elegant, and helpful."
                labels={{
                  title: "Neural Output",
                  initial: "Awaiting initialization...",
                  placeholder: "Input objective for coordinated agent action..."
                }}
              />
            </motion.div>
          </div>
        </main>

        <style jsx global>{`
        .ultra-chat {
          --copilot-kit-primary-color: #000000;
        }

        .ultra-chat .copilotKitButton {
          border-radius: 9999px !important;
          background-color: black !important;
          color: white !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 0 !important;
          width: 40px !important;
          height: 40px !important;
          transition: all 0.2s ease !important;
          position: relative !important;
        }

        .ultra-chat .copilotKitButton:hover {
          transform: scale(1.05) !important;
          background-color: #222 !important;
        }

        .ultra-chat .copilotKitButton:active {
          transform: scale(0.95) !important;
        }

        /* Hide default SVG icon */
        .ultra-chat .copilotKitButton svg {
          display: none !important;
        }

        /* Inject custom up arrow icon */
        .ultra-chat .copilotKitButton::after {
          content: '' !important;
          width: 20px !important;
          height: 20px !important;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white' stroke-width='2.5'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M5 10l7-7m0 0l7 7m-7-7v18' /%3E%3C/svg%3E") !important;
          background-size: contain !important;
          background-repeat: no-repeat !important;
          background-position: center !important;
          display: block !important;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.1);
          border-radius: 10px;
        }
      `}</style>
      </div>
    </LangGraphAgent>
  );
}

function AgentStatusCard({ icon, name, desc, accent }: { icon: string, name: string, desc: string, accent: string }) {
  return (
    <motion.div
      whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.8)' }}
      className="p-4 rounded-2xl bg-white/40 border border-white/40 hover:border-white/80 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 cursor-default group"
    >
      <div className="flex items-center space-x-4">
        <div className="text-xl bg-white rounded-xl h-10 w-10 flex items-center justify-center shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-500">{icon}</div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-[13px] font-bold text-slate-800">{name}</h3>
            <div className={`h-1.5 w-1.5 rounded-full ${accent}`}></div>
          </div>
          <p className="text-[10px] text-slate-500 font-medium mt-0.5">{desc}</p>
        </div>
      </div>
    </motion.div>
  )
}
