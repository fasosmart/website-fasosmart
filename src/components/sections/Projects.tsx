"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

// Variants d'animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export function Projects() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-turquoise/5 rounded-full blur-3xl" />
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
            Nos Projets
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Des projets qui font la différence
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Découvrez nos réalisations et projets en cours qui transforment les
            entreprises et institutions en Guinée et en Afrique.
          </motion.p>
        </motion.div>

        {/* Projects Grid avec animations */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/30"
            >
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10" />

              {/* Project Header avec gradient animé */}
              <motion.div
                className="relative bg-gradient-to-r from-primary to-primary-dark p-6 text-white overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Pattern animé en arrière-plan */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />
                </div>

                <div className="relative z-10 flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Building2 className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-white/80">Client</p>
                    <p className="font-semibold">{project.client}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold relative z-10">{project.title}</h3>
              </motion.div>

              {/* Project Content */}
              <div className="p-6 relative z-10">
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                <div className="space-y-3">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.4 }}
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      </motion.div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Placeholder pour plus de projets avec animation */}
          <motion.div
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 flex flex-col items-center justify-center text-center border-2 border-dashed border-gray-300 hover:border-primary/30 transition-all duration-300 group"
            variants={cardVariants}
            whileHover={{ scale: 1.02, borderColor: "rgba(68, 145, 206, 0.3)" }}
          >
            <motion.div
              className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <ArrowRight className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Plus de projets
            </h3>
            <p className="text-gray-600 mb-6">
              Découvrez l&apos;ensemble de nos réalisations et références clients.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" className="border-2 hover:border-primary hover:bg-primary hover:text-primary transition-all">
                <Link href="/projets">Voir tous les projets</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

