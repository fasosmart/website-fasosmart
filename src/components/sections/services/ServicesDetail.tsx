"use client";

import { services } from "@/lib/data";
import { motion } from "framer-motion";
import { FlipCard } from "@/components/ui/flip-card";

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

export function ServicesDetail() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-background scroll-mt-20 relative overflow-hidden"
    >
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header avec animations */}
        <motion.div
          className="max-w-3xl mb-16"
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
            Nos Services
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Des solutions technologiques sur mesure
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Chez Fasosmart, nous travaillons en étroite collaboration avec vous
            pour personnaliser nos services en fonction de vos exigences
            spécifiques. Notre équipe dévouée vous accompagne à chaque étape.
          </motion.p>
        </motion.div>

        {/* Services Grid avec animations et Flip Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="h-72" // Hauteur fixe pour les flip cards
              >
                <FlipCard
                  // Face avant (recto)
                  frontIcon={Icon}
                  frontTitle={service.title}
                  frontDescription={service.description}
                  frontBadge={String(index + 1).padStart(2, "0")}
                  // Face arrière (verso) - Méthodologie/Processus
                  backTitle="Notre Processus"
                  backContent={
                    <div className="space-y-3">
                      {service.methodology && service.methodology.length > 0 ? (
                        <ul className="space-y-2">
                          {service.methodology.map((step, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-white/90"
                            >
                              <span className="font-bold mt-0.5">
                                {idx + 1}.
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-white/80 text-sm">
                          Processus personnalisé selon vos besoins.
                        </p>
                      )}
                    </div>
                  }
                  // Styles personnalisés
                  className="h-full"
                  frontClassName="hover:border-primary/40"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

