"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. 
            Drop a message and let&apos;s build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              <p className="text-slate-400">
                I am usually responsive within 24 hours. Feel free to reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass border border-white/5 flex items-center justify-center group-hover:border-primary/50 transition-all text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Me</p>
                  <a href="mailto:humamuhammadyousaf@gmail.com" className="text-lg font-medium text-white hover:text-primary transition-colors">
                    humamuhammadyousaf@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass border border-white/5 flex items-center justify-center group-hover:border-primary/50 transition-all text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Location</p>
                  <p className="text-lg font-medium text-white">Karachi, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="pt-10 flex gap-4">
               {[
                 { icon: <FaGithub />, href: "https://github.com/humabhutti05" },
                 { icon: <FaLinkedin />, href: "#" },
                 { icon: <Mail />, href: "mailto:humamuhammadyousaf@gmail.com" }
               ].map((social, i) => (
                 <a 
                   key={i}
                   href={social.href} 
                   className="w-12 h-12 rounded-xl glass border border-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                 >
                   {social.icon}
                 </a>
               ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-3xl border border-white/10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Name</label>
                  <Input 
                    placeholder="John Doe" 
                    className="bg-slate-900/50 border-white/5 focus:border-primary focus:ring-primary/20 h-12" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-slate-900/50 border-white/5 focus:border-primary focus:ring-primary/20 h-12" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Subject</label>
                <Input 
                  placeholder="Inquiry about AI Project" 
                  className="bg-slate-900/50 border-white/5 focus:border-primary focus:ring-primary/20 h-12" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
                <Textarea 
                  placeholder="Your message here..." 
                  className="bg-slate-900/50 border-white/5 focus:border-primary focus:ring-primary/20 min-h-[150px] resize-none" 
                />
              </div>
              <Button className="w-full h-14 rounded-xl text-base font-bold glow group transition-all duration-300">
                Send Message <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
