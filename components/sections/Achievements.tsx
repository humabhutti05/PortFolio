"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Trophy } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import GitHubStats from "@/components/ui/GitHubStats";

const achievements = [
  {
    title: "Best Intern Award",
    org: "CodeAlpha",
    date: "2022",
    icon: <Trophy className="text-yellow-500" />
  },
  {
    title: "Full-Stack Certification",
    org: "University of Karachi",
    date: "2023",
    icon: <ShieldCheck className="text-blue-500" />
  },
  {
    title: "AI Integration Specialist",
    org: "Google Cloud",
    date: "2024",
    icon: <Award className="text-primary" />
  }
];

export default function Achievements() {
  return (
    <section className="py-24 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center gap-2 text-primary font-mono text-xs font-bold uppercase tracking-[0.4em]">
              <FaGithub size={14} /> Global Impact
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              REAL-TIME <span className="text-primary italic">METRICS</span>
            </h2>
          </motion.div>
        </div>

        {/* GitHub Stats Row */}
        <div className="mb-24">
          <GitHubStats username="humabhutti05" />
        </div>

        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-4"
          >
            Certifications & Recognition
          </motion.h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center gap-6 group hover:border-primary/30 transition-all"
            >
              <div className="w-20 h-20 rounded-2xl bg-slate-800/50 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl border border-white/5">
                <div className="scale-150">{item.icon}</div>
              </div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium tracking-wide uppercase">{item.org} • {item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
