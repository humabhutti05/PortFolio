"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, ChevronRight } from "lucide-react";

const COMMANDS = {
  help: "Available commands: help, about, projects, contact, clear, whoami, skills",
  about: "Navigating to About section...",
  projects: "Navigating to Projects section...",
  contact: "Navigating to Contact section...",
  whoami: "Huma Yousaf - Full-Stack AI Developer in Karachi, Pakistan.",
  skills: "React, Next.js, AI Integration, MERN Stack...",
};

export default function CommandCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ cmd: string; output: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "j") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    if (!cmd) return;

    let output = "Command not found. Type 'help' for list of commands.";
    
    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    if (cmd in COMMANDS) {
      output = COMMANDS[cmd as keyof typeof COMMANDS];
      
      // Handle Navigation
      if (cmd === "about" || cmd === "projects" || cmd === "contact") {
        const element = document.getElementById(cmd);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => setIsOpen(false), 500);
        }
      }
    }

    setHistory((prev) => [...prev, { cmd, output }]);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -20 }}
            className="w-full max-w-2xl bg-slate-950 border border-white/10 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-2">
                <TerminalIcon size={14} className="text-primary" />
                <span className="text-xs font-mono text-slate-400">huma@portfolio: ~</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-500 hover:text-white transition-colors"
              >
                <X size={14} />
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-4 h-[400px] overflow-y-auto font-mono text-sm scrollbar-hide">
              <div className="text-primary mb-4">Welcome to the Command Center. Type &apos;help&apos; to begin.</div>
              
              {history.map((item, i) => (
                <div key={i} className="mb-4">
                  <div className="flex items-center gap-2 text-slate-300">
                    <ChevronRight size={14} className="text-primary" />
                    <span>{item.cmd}</span>
                  </div>
                  <div className="text-slate-500 mt-1 pl-5">{item.output}</div>
                </div>
              ))}

              <form onSubmit={handleCommand} className="flex items-center gap-2">
                <ChevronRight size={14} className="text-primary" />
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="bg-transparent border-none outline-none text-white w-full"
                  spellCheck={false}
                  autoFocus
                />
              </form>
            </div>
            
            <div className="bg-slate-900 px-4 py-2 border-t border-white/5 text-[10px] text-slate-500 flex justify-between">
              <span>Press ESC to close</span>
              <span>Shortcut: CTRL + J</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
