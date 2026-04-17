"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/5 bg-[#0f172a]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-slate-400 text-sm">
            © {currentYear} <span className="text-white font-medium">Huma Muhammad Yousaf</span>. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#home" className="text-slate-500 hover:text-primary transition-colors text-sm">Home</a>
          <a href="#about" className="text-slate-500 hover:text-primary transition-colors text-sm">About</a>
          <a href="#projects" className="text-slate-500 hover:text-primary transition-colors text-sm">Projects</a>
          <a href="#experience" className="text-slate-500 hover:text-primary transition-colors text-sm">Experience</a>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2">
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <p className="text-xs text-slate-500 font-medium uppercase tracking-[0.2em]">Designed for Excellence</p>
           </div>
           <p className="text-[10px] text-slate-600 font-mono">Press CTRL+J for Command Center</p>
        </div>
      </div>
    </footer>
  );
}
