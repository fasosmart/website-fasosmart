"use client";

import Link from "next/link";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export function QuickNavLinks() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="#services"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass border border-white/30 text-sm font-medium transition-all hover:bg-white/20 backdrop-blur-sm text-white"
          >
            <Briefcase className="w-5 h-5" />
            Nos Services
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="#formations"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass border border-white/30 text-sm font-medium transition-all hover:bg-white/20 backdrop-blur-sm text-white"
          >
            <GraduationCap className="w-5 h-5" />
            Nos Formations
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

