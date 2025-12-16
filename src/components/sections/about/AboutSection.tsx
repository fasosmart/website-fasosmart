"use client";

import { companyInfo } from "@/lib/constants";
import { Building2, Users, Globe, Award } from "lucide-react";
import { motion } from "framer-motion";
import { stats } from "@/lib/constants";
import { useCounter } from "@/hooks/useCounter";

// Composant pour les stats animées
function AnimatedStatCard({
  icon: Icon,
  value,
  label,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  index: number;
}) {
  const numericValue = parseInt(value.replace(/\D/g, "")) || 0;
  const suffix = value.replace(/\d/g, "");
  const { ref, formattedValue } = useCounter(numericValue, {
    duration: 2000,
    suffix,
    start: 0,
  });

  return (
    <motion.div
      ref={ref}
      className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 group hover:border-primary/40 transition-all"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
      }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <motion.div
        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors"
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
      </motion.div>
      <div className="text-3xl font-bold text-foreground mb-1">
        {formattedValue}
      </div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Qui sommes-nous ?
            </motion.span>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Une entreprise panafricaine au service de l&apos;innovation
            </motion.h2>
            <motion.div
              className="space-y-4 text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p>
                Chez <strong className="text-foreground">Fasosmart</strong>, nous
                travaillons en étroite collaboration avec vous pour personnaliser
                nos services en fonction de vos exigences spécifiques.
              </p>
              <p>
                Quels que soient vos besoins, notre équipe dévouée est là pour
                vous guider à chaque étape du processus. Nous nous efforçons de
                dépasser vos attentes en fournissant des solutions efficaces et
                innovantes qui vous permettront d&apos;atteindre vos objectifs avec
                succès.
              </p>
              <p>
                Notre engagement envers l&apos;excellence et notre passion pour la
                technologie nous permettent de proposer des solutions de pointe
                adaptées aux défis du marché africain.
              </p>
            </motion.div>
          </motion.div>

          {/* Stats Grid avec animations */}
          <div className="grid grid-cols-2 gap-6">
            <AnimatedStatCard
              icon={Building2}
              value={stats[0].value}
              label={stats[0].label}
              index={0}
            />
            <AnimatedStatCard
              icon={Users}
              value={stats[1].value}
              label={stats[1].label}
              index={1}
            />
            <AnimatedStatCard
              icon={Globe}
              value={stats[2].value}
              label={stats[2].label}
              index={2}
            />
            <AnimatedStatCard
              icon={Award}
              value={stats[3].value}
              label={stats[3].label}
              index={3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

