"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Brain, Code2, Rocket, Smartphone } from "lucide-react";
import { useRef } from "react";

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", 
  "OpenAI SDK", "Firebase", "REST APIs", "Tailwind CSS", "Redux", 
  "PostgreSQL", "Google Cloud", "UI/UX", "Authentication"
];

const highlights = [
  {
    icon: <Brain className="text-primary" />,
    title: "AI Integration",
    desc: "Integrating LLMs and AI logic into modern web applications."
  },
  {
    icon: <Code2 className="text-primary" />,
    title: "Full-Stack Dev",
    desc: "End-to-end development with MERN stack and Next.js."
  },
  {
    icon: <Rocket className="text-primary" />,
    title: "Performance",
    desc: "Optimizing apps for speed, SEO, and accessibility."
  },
  {
    icon: <Smartphone className="text-primary" />,
    title: "Responsive UI",
    desc: "Designing mobile-first, sleek, and intuitive interfaces."
  }
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xLeft = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
  const xRight = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="about" ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-primary font-mono text-xs font-bold uppercase tracking-[0.4em]">Background</span>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter">
              BEYOND THE <span className="text-primary italic">CODE</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            style={{ x: xLeft, opacity }}
          >
            <h3 className="text-3xl font-black mb-6 text-white uppercase tracking-tighter">
              Engineering <span className="text-primary">Intelligence</span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-10 text-lg">
              Based in Karachi, Pakistan, I am passionate about building intelligent web solutions that solve real-world problems. 
              My expertise lies in bridging the gap between AI capabilities and modern full-stack development. 
              I specialize in creating high-performance applications with Next.js and the MERN stack.
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Badge variant="outline" className="py-2 px-4 glass text-slate-300 hover:border-primary transition-colors cursor-default">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            style={{ x: xRight, opacity }}
            className="grid sm:grid-cols-2 gap-8"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl glass border border-white/5 hover:border-primary/20 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] group-hover:bg-primary/10 transition-colors" />
                <div className="w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/5">
                  <div className="scale-125">{item.icon}</div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
