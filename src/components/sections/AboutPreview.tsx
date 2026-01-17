"use client";

import Link from "next/link";
import { ArrowRight, Target, Eye, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/constants";

export function AboutPreview() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content avec animations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              À propos de nous
            </motion.span>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Une entreprise panafricaine au service de la révolution
              technologique
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {companyInfo.mission}
            </motion.p>

            {/* Mission & Vision Cards avec animations */}
            <div className="space-y-4 mb-8">
              <motion.div
                className="flex gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10 group hover:bg-primary/10 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.02, x: 8 }}
              >
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Target className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Notre Mission
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Démocratiser l&apos;utilisation des solutions technologiques pour
                    stimuler la productivité.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10 group hover:bg-primary/10 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.02, x: 8 }}
              >
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Eye className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Notre Vision
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {companyInfo.vision}
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/a-propos" className="flex items-center">
                    En savoir plus
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Visual avec animations */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 lg:p-12 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative elements animés */}
              <motion.div
                className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl"
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
              <motion.div
                className="absolute bottom-4 left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
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

                <div className="relative space-y-6">
                {/* Values preview avec animation */}
                <motion.div
                  className="bg-card text-foreground rounded-xl p-6 shadow-lg border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  style={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Lightbulb className="w-5 h-5 text-white" />
                    </motion.div>
                    <h3 className="font-semibold text-foreground">
                      Nos Valeurs
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {["Innovation", "Excellence", "Collaboration", "Intégrité"].map(
                      (value, index) => (
                        <motion.div
                          key={value}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                        >
                          <motion.span
                            className="w-2 h-2 rounded-full bg-primary"
                            whileHover={{ scale: 1.5 }}
                          />
                          {value}
                        </motion.div>
                      )
                    )}
                  </div>
                </motion.div>

                {/* Quote avec animation */}
                <motion.div
                  className="bg-primary text-white rounded-xl p-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-lg font-medium italic leading-relaxed">
                    &ldquo;Quels que soient vos besoins, notre équipe dévouée est là
                    pour vous guider à chaque étape du processus.&rdquo;
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

