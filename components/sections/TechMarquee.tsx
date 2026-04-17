"use client";

import Marquee from "react-fast-marquee";
import { 
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, 
  SiMongodb, SiNodedotjs, SiExpress, SiFirebase, 
  SiPostgresql, SiOpenai
} from "react-icons/si";

const tech = [
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <SiReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "OpenAI", icon: <SiOpenai /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
];

export default function TechMarquee() {
  return (
    <div className="py-10 bg-white/5 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <Marquee speed={50} gradient={false} pauseOnHover>
        {tech.map((item, index) => (
          <div key={index} className="flex items-center gap-4 mx-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <span className="text-3xl text-white">{item.icon}</span>
            <span className="text-xl font-black tracking-tighter text-white uppercase">{item.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
