"use client";

import { formations } from "@/lib/data";
import { GraduationCap, Clock, DollarSign, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { FlipCard } from "@/components/ui/flip-card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export function FormationsDetail() {
  return (
    <section
      id="formations"
      className="py-24 md:py-32 bg-background scroll-mt-20 relative overflow-hidden"
    >
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
            Nos Formations
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Développez vos compétences
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Nous proposons des formations adaptées à tous les niveaux pour vous
            permettre de maîtriser les outils et technologies essentiels à votre
            réussite professionnelle.
          </motion.p>
        </motion.div>

        {/* Formations Grid avec animations et Flip Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {formations.map((formation) => {
            const Icon = formation.icon;
            return (
              <motion.div
                key={formation.id}
                variants={cardVariants}
                className="h-72" // Hauteur fixe pour les flip cards
              >
                <FlipCard
                  // Face avant (recto)
                  frontIcon={Icon}
                  frontTitle={formation.title}
                  frontDescription={formation.description}
                  // Face arrière (verso) - Détails de la formation
                  backTitle="Détails de la formation"
                  backContent={
                    <div className="space-y-4 text-sm">
                      {/* Prérequis */}
                      {formation.prerequisites &&
                        formation.prerequisites.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4" />
                              Prérequis
                            </h4>
                            <ul className="space-y-1 text-white/80">
                              {formation.prerequisites.map((req, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className=" mt-0.5">•</span>
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                      {/* Compétences développées */}
                      {formation.skills && formation.skills.length > 0 && (
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" />
                            Compétences développées
                          </h4>
                          <ul className="space-y-1 text-white/80">
                            {formation.skills.map((skill, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="mt-0.5">•</span>
                                <span>{skill}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Durée et Prix */}
                      <div className="flex flex-col gap-2 pt-2 border-t border-white/20">
                        {formation.duration && (
                          <div className="flex items-center gap-2 text-white/90">
                            <Clock className="w-4 h-4 " />
                            <span className="text-xs">
                              Durée : {formation.duration}
                            </span>
                          </div>
                        )}
                        {formation.price && (
                          <div className="flex items-center gap-2 text-white/90">
                            <DollarSign className="w-4 h-4 " />
                            <span className="text-xs">Prix : {formation.price}</span>
                          </div>
                        )}
                      </div>
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

        {/* Bottom info card avec animations */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 lg:p-10 text-white overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Background decoration animé */}
          <motion.div
            className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="flex flex-col lg:flex-row lg:items-center gap-6 relative z-10">
            <div className="flex-shrink-0">
              <motion.div
                className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <GraduationCap className="w-8 h-8" />
              </motion.div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">
                Formation sur mesure disponible
              </h3>
              <p className="text-white/90">
                Vous avez des besoins spécifiques ? Nous créons des programmes de
                formation personnalisés adaptés à votre entreprise et à vos
                objectifs.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

