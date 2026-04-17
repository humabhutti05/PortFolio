"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, CheckCircle2, Trophy, Target, Zap } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Magnetic from "@/components/ui/Magnetic";

const projects = [
  {
    title: "HireAI: Recruiting Engine",
    problem: "Recruiters spend 23 hours screening resumes for a single hire.",
    solution: "Developed an autonomous agent that ranks candidates based on skill-match and sentiment using Gemini 1.5 Pro.",
    results: ["90% reduction in screening time", "4.8/5 CSAT from early beta testers"],
    tech: ["Next.js", "Gemini AI", "Tailwind", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1200",
    link: "https://github.com/humabhutti05/HireAI",
    accent: "#00ffcc"
  },
  {
    title: "Physical AI: Robotics MCP",
    problem: "Connecting LLMs to physical hardware usually requires complex middleware.",
    solution: "Implemented Model Context Protocol (MCP) to allow Gemini to issue direct tactile commands to robotic arms.",
    results: ["Direct hardware control via Natural Language", "Successful cross-platform deployment"],
    tech: ["Python", "Gemini MCP", "Robotics", "FastAPI"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200",
    link: "https://github.com/humabhutti05/Physical-AI-Robots-",
    accent: "#8b5cf6"
  },
  {
    title: "Cloud-Native Infrastructure",
    problem: "Scaling AI applications often leads to high latency and infrastructure drift.",
    solution: "Orchestrated a Kubernetes-based environment with Helm and Docker for seamless AI service scaling.",
    results: ["Zero-downtime deployments", "Automated vertical/horizontal scaling"],
    tech: ["Kubernetes", "Docker", "Helm", "GCP"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1200",
    link: "https://github.com/humabhutti05/Hackathon-2-Phase-IVCloud-Native-Todo-Chatbot-Local-Minikube-Deployment",
    accent: "#3b82f6"
  }
];

function ProjectSection({ project, index }: { project: typeof projects[0], index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <div ref={containerRef} className="min-h-screen flex items-center py-20 relative">
      <motion.div 
        style={{ opacity, scale }}
        className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* Visual Side */}
        <div className={`relative ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
          <motion.div 
            style={{ y: y1 }}
            className="relative rounded-3xl overflow-hidden border border-white/10 group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent z-10" />
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-1000"
            />
            
            {/* Tech Float */}
            <div className="absolute bottom-6 left-6 z-20 flex flex-wrap gap-2">
              {project.tech.map(t => (
                <Badge key={t} className="bg-black/80 backdrop-blur-md border-white/5 text-white/80 font-mono text-[10px] uppercase tracking-widest px-3 py-1">
                  {t}
                </Badge>
              ))}
            </div>
          </motion.div>
          
          {/* Accent Blobs */}
          <div 
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[100px] -z-10 opacity-30" 
            style={{ backgroundColor: project.accent }}
          />
        </div>

        {/* Content Side */}
        <div className="space-y-10">
          <div>
             <motion.div 
               initial={{ x: -20, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               className="flex items-center gap-2 mb-4"
             >
               <span className="w-8 h-[1px] bg-primary" />
               <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Case Study 0{index + 1}</span>
             </motion.div>
             <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">{project.title}</h3>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0 text-red-500">
                <Target size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">The Problem</h4>
                <p className="text-slate-300 text-lg leading-relaxed">{project.problem}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-500">
                <Zap size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">The Solution</h4>
                <p className="text-slate-300 text-lg leading-relaxed">{project.solution}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
               {project.results.map((r, i) => (
                 <div key={i} className="p-4 rounded-2xl glass border border-white/5 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                     <CheckCircle2 size={16} />
                   </div>
                   <span className="text-sm font-medium text-slate-300">{r}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <Magnetic>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button className="h-14 px-8 rounded-full bg-white text-black font-bold uppercase tracking-widest text-xs">
                  View Source <FaGithub className="ml-2" />
                </Button>
              </a>
            </Magnetic>
            <Magnetic>
              <Button variant="link" className="text-white hover:text-primary transition-colors uppercase tracking-widest text-xs font-bold p-0">
                Live Preview <ArrowRight className="ml-2" />
              </Button>
            </Magnetic>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950 relative overflow-hidden">
      {/* Background Section Intro */}
      <div className="container mx-auto px-6 py-24 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-9xl font-black text-white/5 tracking-tighter absolute top-20 left-1/2 -translate-x-1/2 select-none pointer-events-none uppercase">
            Productivity
          </h2>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            PROVEN <span className="text-primary italic">IMPACT</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto uppercase tracking-widest text-[10px] font-bold">
            Turning complex challenges into elegant AI-driven solutions.
          </p>
        </motion.div>
      </div>

      <div className="space-y-0">
        {projects.map((project, i) => (
          <ProjectSection key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
