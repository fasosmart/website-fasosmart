"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { divisions } from "@/lib/data";
import { divisionIconMap } from "@/lib/division-icons";

// Variants pour les animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function Divisions() {
  // Vérifier si l'URL est externe
  const isExternalUrl = (url?: string) => {
    return url ? url.startsWith("http") : false;
  };

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-turquoise/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header avec animation */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            FASOSMART GROUP
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            L&apos;écosystème complet pour votre transformation digitale
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            4 filiales spécialisées travaillent ensemble pour vous offrir des solutions technologiques complètes, de l&apos;hébergement web à la télématique, en passant par l&apos;e-commerce.
          </motion.p>
        </motion.div>

        {/* Divisions Grid avec animations */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {divisions.map((division, index) => {
            const Icon = divisionIconMap[division.id];
            const isExternal = isExternalUrl(division.url);

            // Composant de lien (interne ou externe)
            const LinkComponent = ({ children, className }: { children: React.ReactNode; className?: string }) => {
              if (isExternal && division.url) {
                return (
                  <a
                    href={division.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {children}
                  </a>
                );
              }
              return (
                <Link href={division.url || "#"} className={className}>
                  {children}
                </Link>
              );
            };

            return (
              <motion.div
                key={division.id}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="group relative bg-card text-card-foreground rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/40 overflow-hidden"
              >
                {/* Effet de brillance au hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                {/* Gradient de fond au hover avec couleur de la division */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: division.color
                      ? `linear-gradient(to bottom right, ${division.color}08, transparent)`
                      : "linear-gradient(to bottom right, rgba(68, 145, 206, 0.05), transparent)",
                  }}
                />

                {/* Icon avec animation 3D */}
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10 transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: division.color
                      ? `${division.color}15`
                      : "rgba(68, 145, 206, 0.1)",
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon
                    className="w-8 h-8 transition-colors"
                    style={{
                      color: division.color || "#4491CE",
                    }}
                  />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {division.name}
                  </h3>
                  <p className="text-xs font-medium text-primary mb-3">
                    {division.tagline}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {division.description}
                  </p>

                  {/* Features mini */}
                  <ul className="space-y-1 mb-6">
                    {division.features.slice(0, 3).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <span
                          className="w-1 h-1 rounded-full"
                          style={{
                            backgroundColor: division.color || "#4491CE",
                          }}
                        />
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Link */}
                  <LinkComponent className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all group/cta">
                    <span>En savoir plus</span>
                    {isExternal ? (
                      <ExternalLink className="w-4 h-4" />
                    ) : (
                      <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                    )}
                  </LinkComponent>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

