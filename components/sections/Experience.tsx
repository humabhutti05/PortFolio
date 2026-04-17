"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Internee.pk",
    duration: "2023 - Present",
    desc: "Developing responsive UI components and optimizing performance for client-side applications using React and Tailwind CSS.",
    skills: ["React", "UI/UX", "Tailwind"]
  },
  {
    role: "Full-Stack Intern",
    company: "InternPe",
    duration: "2023",
    desc: "Worked on building CRUD applications and integrating RESTful APIs with MongoDB and Express.js.",
    skills: ["MERN", "JWT", "APIs"]
  },
  {
    role: "Web Dev Intern",
    company: "CodeAlpha",
    duration: "2022",
    desc: "Assisted in the development of landing pages and internal tools using HTML, CSS, and vanilla JavaScript.",
    skills: ["JavaScript", "HTML/CSS", "Git"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-primary">Journey</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Dot */}
              <div className="absolute top-2 left-[-5px] md:left-auto md:right-[-8px] w-4 h-4 rounded-full bg-primary glow z-10 hidden md:block"
                   style={index % 2 !== 0 ? { right: 'auto', left: '-8px' } : {}} />

              <div className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all">
                <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <Briefcase size={18} className="text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    {exp.company}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                
                <div className={`flex items-center gap-2 mb-4 text-slate-500 text-sm ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <Calendar size={14} />
                  <span>{exp.duration}</span>
                </div>

                <p className="text-slate-400 mb-6 leading-relaxed">
                  {exp.desc}
                </p>

                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                   {exp.skills.map(skill => (
                     <span key={skill} className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300">
                       {skill}
                     </span>
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
