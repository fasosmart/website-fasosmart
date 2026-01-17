"use client";

import { Globe2, Star, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { values } from "@/lib/data";

/**
 * Mapping des icônes pour chaque valeur
 * Panafricanisme → Globe2 (représente l'Afrique et l'intégration régionale)
 * Innovation → Star (représente l'excellence et la créativité)
 * Passion → Heart (représente l'envie et l'engagement)
 */
const valueIconMap: Record<string, typeof Globe2> = {
  Panafricanisme: Globe2,
  Innovation: Star,
  Passion: Heart,
};

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

export function Values() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header avec animations */}
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
            Ce qui nous définit
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Nos Valeurs
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Les principes fondamentaux qui guident chacune de nos actions et
            décisions au quotidien.
          </motion.p>
        </motion.div>

        {/* Values Grid avec animations */}
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {values.map((value, index) => {
            const Icon = valueIconMap[value.title] || Globe2;
            return (
              <motion.div
                key={value.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-card text-card-foreground rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/40 text-center overflow-hidden"
              >
                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                {/* Icon avec animation améliorée */}
                <motion.div
                  className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-primary-dark transition-all duration-300 relative z-10"
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1 
                  }}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeInOut"
                  }}
                >
                  <Icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 relative z-10">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base relative z-10">
                  {value.description}
                </p>

                {/* Hover decoration - barre en bas */}
                <motion.div
                  className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-primary-dark to-primary rounded-b-2xl"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

