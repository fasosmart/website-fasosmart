"use client";

import { Target, Eye, Rocket, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { companyInfo } from "@/lib/constants";

export function MissionVision() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-turquoise/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Notre raison d&apos;être
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Mission & Vision
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Guidés par notre passion pour l&apos;innovation, nous œuvrons pour un
            avenir technologique accessible à tous.
          </motion.p>
        </motion.div>

        {/* Cards avec animations */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            className="group relative bg-card text-card-foreground rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/40 overflow-hidden flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
          >
            {/* Background decoration animé */}
            <motion.div
              className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative flex flex-col flex-1">
              <motion.div
                className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Target className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Notre Mission
              </h3>

              <p className="text-muted-foreground leading-relaxed text-lg flex-1">
                {companyInfo.mission}
              </p>

              {/* Decorative line */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <motion.div
                  className="flex items-center gap-2 text-primary font-medium"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Rocket className="w-5 h-5" />
                  <span>Stimuler la productivité</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="group relative bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 lg:p-10 text-white overflow-hidden flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
          >
            {/* Background decoration animé */}
            <motion.div
              className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
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
            <motion.div
              className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative flex flex-col flex-1">
              <motion.div
                className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Eye className="w-8 h-8" />
              </motion.div>

              <h3 className="text-2xl font-display font-bold mb-4">
                Notre Vision
              </h3>

              <p className="text-white/90 leading-relaxed text-lg flex-1">
                {companyInfo.vision}
              </p>

              {/* Decorative line */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <motion.div
                  className="flex items-center gap-2 font-medium"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Globe className="w-5 h-5" />
                  <span>Leader panafricain</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
