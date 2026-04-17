"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaCodeBranch, FaUsers, FaBook } from "react-icons/fa";
import { getGitHubStats } from "@/lib/github";

interface Stats {
  public_repos: number;
  stars: number;
  forks: number;
  followers: number;
}

export default function GitHubStats({ username }: { username: string }) {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    getGitHubStats(username).then((data) => {
      if (data) setStats(data);
    });
  }, [username]);

  if (!stats) return null;

  const statItems = [
    { label: "Repositories", value: stats.public_repos, icon: <FaBook /> },
    { label: "Stars Earned", value: stats.stars, icon: <FaStar /> },
    { label: "Forks", value: stats.forks, icon: <FaCodeBranch /> },
    { label: "Followers", value: stats.followers, icon: <FaUsers /> },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      {statItems.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="p-6 rounded-2xl glass border border-white/5 flex flex-col items-center text-center group hover:border-primary/50 transition-all"
        >
          <div className="text-2xl text-primary mb-3 group-hover:scale-110 transition-transform">
            {item.icon}
          </div>
          <div className="text-3xl font-bold text-white mb-1">
            {item.value}
          </div>
          <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
            {item.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
