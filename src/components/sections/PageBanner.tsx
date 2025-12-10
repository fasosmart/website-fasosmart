"use client";

import {
  Building2,
  MessageSquare,
  FolderKanban,
  Briefcase,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

// Mapping des icônes disponibles
const iconMap: Record<string, LucideIcon> = {
  Building2,
  MessageSquare,
  FolderKanban,
  Briefcase,
  GraduationCap,
};

interface PageBannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: string; // Nom de l'icône au lieu du composant
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function PageBanner({
  title,
  subtitle,
  description,
  icon,
}: PageBannerProps) {
  // Récupérer l'icône depuis le mapping
  const Icon = icon ? iconMap[icon] : undefined;

  return (
    <section className="relative overflow-hidden gradient-animated text-white min-h-[50vh] flex items-center">
      {/* Background Pattern animé */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid Pattern animé */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Icon avec animation */}
          {Icon && (
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass border border-white/20 mb-6"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Icon className="w-8 h-8" />
            </motion.div>
          )}

          {/* Subtitle */}
          {subtitle && (
            <motion.span
              variants={itemVariants}
              className="inline-block text-white/90 font-medium text-sm uppercase tracking-wider mb-4"
            >
              {subtitle}
            </motion.span>
          )}

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight mb-4"
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              variants={itemVariants}
              className="text-lg text-white/90 leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

