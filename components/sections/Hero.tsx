"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThreeDElement from "@/components/ui/ThreeDElement";
import Magnetic from "@/components/ui/Magnetic";

import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(springY, [-500, 500], [10, -10]);
  const rotateY = useTransform(springX, [-500, 500], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = clientX - window.innerWidth / 2;
      const y = clientY - window.innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Elements */}
      <motion.div 
        style={{ x: springX, y: springY, opacity: 0.15 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[180px]" />
      </motion.div>

      <ThreeDElement />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
           style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
           className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-10 rounded-full glass border border-white/10 text-[10px] font-bold tracking-[0.2em] uppercase text-primary"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Building the future of AI
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-[0.9]"
          >
            <span className="text-white drop-shadow-2xl">HUMA</span><br />
            <span className="text-gradient drop-shadow-2xl uppercase">Yousaf</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-2xl font-medium text-slate-400 mb-12 h-8"
          >
            <Typewriter
              options={{
                strings: ["AI INTEGRATION", "FULL-STACK ARCHITECTURE", "NEXT.JS SPECIALIST"],
                autoStart: true,
                loop: true,
                cursor: "_",
                delay: 60
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Magnetic>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <Button size="lg" className="relative bg-white text-black hover:bg-slate-100 px-10 h-14 rounded-full font-bold text-sm tracking-widest uppercase">
                  Explore Work
                </Button>
              </div>
            </Magnetic>
            
            <Magnetic>
              <Button variant="outline" size="lg" className="glass border-white/10 hover:border-white/20 text-white px-10 h-14 rounded-full font-bold text-sm tracking-widest uppercase">
                Get In Touch
              </Button>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
