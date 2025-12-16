"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";

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

export function Services() {
  // On affiche seulement 4 services sur la page d'accueil
  const displayedServices = services.slice(0, 4);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-background relative overflow-hidden">
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl dark:bg-primary/20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-turquoise/10 rounded-full blur-3xl dark:bg-primary-turquoise/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Nos Services
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Des solutions technologiques adaptées à vos besoins
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Nous offrons une gamme complète de services pour accompagner votre
            transformation digitale et optimiser votre productivité.
          </motion.p>
        </motion.div>

        {/* Services Grid avec animations */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {displayedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
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

                {/* Gradient de fond au hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon avec animation 3D */}
                <motion.div
                  className="relative w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-all duration-300"
                  whileHover={{
                    rotateY: 360,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors relative z-10" />
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors relative z-10">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                  {service.description}
                </p>

                {/* Hover indicator avec animation */}
                <motion.div
                  className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                >
                  <ArrowRight className="w-4 h-4 text-primary" />
                </motion.div>

                {/* Bordure animée */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/20 transition-colors" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA avec animation */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-semibold border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Link
                href="/services-formations#services"
                className="flex items-center justify-center group"
              >
                <span className="transition-colors group-hover:text-primary">
                  Voir tous nos services
                </span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform text-primary" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

