"use client";

import { motion } from "framer-motion";

interface SectionTransitionProps {
  variant?: "wave" | "gradient" | "diagonal";
  className?: string;
}

/**
 * Composant de transition fluide entre sections
 * Ajoute une transition visuelle élégante entre les différentes sections
 */
export function SectionTransition({
  variant = "wave",
  className = "",
}: SectionTransitionProps) {
  if (variant === "wave") {
    return (
      <div className={`relative w-full h-16 md:h-24 overflow-hidden ${className}`}>
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z"
            fill="currentColor"
            initial={{ d: "M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z" }}
            animate={{
              d: [
                "M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z",
                "M0,80 C240,40 480,80 720,60 C960,40 1200,80 1440,60 L1440,120 L0,120 Z",
                "M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div
        className={`relative w-full h-24 md:h-32 overflow-hidden ${className}`}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />
      </div>
    );
  }

  if (variant === "diagonal") {
    return (
      <div className={`relative w-full h-16 md:h-24 overflow-hidden ${className}`}>
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* <motion.polygon
            points="0,0 1440,120 1440,0 0,0"
            fill="currentColor"
            initial={{ points: "0,0 1440,120 1440,0 0,0" }}
            animate={{
              points: [
                "0,0 1440,120 1440,0 0,0",
                "0,20 1440,100 1440,0 0,0",
                "0,0 1440,120 1440,0 0,0",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          /> */}
        </svg>
      </div>
    );
  }

  return null;
}

