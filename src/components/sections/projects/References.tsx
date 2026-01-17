"use client";

import Image from "next/image";
import { references } from "@/lib/data";
import { Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { stats } from "@/lib/constants";
import { useCounter } from "@/hooks/useCounter";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

function AnimatedStat({ value, label, index }: { value: string; label: string; index: number }) {
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
      className="text-center p-6 rounded-xl bg-card border border-border"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
      }}
      whileHover={{ y: -8, scale: 1.05 }}
    >
      <div className="text-3xl font-bold text-primary mb-1">{formattedValue}</div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </motion.div>
  );
}

export function References() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
            Nos Références
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Ils nous ont fait confiance
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            La confiance de nos clients prestigieux témoigne de notre excellence et notre engagement envers la qualité. Découvrez quelques-unes de nos
            réalisations majeures. 
            <br />
            {references.length} entreprises et institutions nous ont
            choisis pour leurs projets de transformation digitale.
          </motion.p>
        </motion.div>

        {/* References Grid avec animations */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {references.map((reference) => (
            <motion.div
              key={reference.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative bg-card text-card-foreground rounded-xl p-4 lg:p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/40"
            >
              {/* Logo (ou fallback initiale) */}
              <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center overflow-hidden group-hover:from-primary group-hover:to-primary-dark transition-all duration-300">
                {reference.logo ? (
                  <Image
                    src={reference.logo}
                    alt={reference.name}
                    width={64}
                    height={64}
                    className="max-h-16 w-auto object-contain"
                  />
                ) : (
                  <span className="text-lg font-bold text-primary group-hover:text-white transition-colors">
                    {reference.name.charAt(0)}
                  </span>
                )}
              </div>

              {/* Name */}
              <h3 className="text-sm font-semibold text-foreground text-center mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {reference.name}
              </h3>

              {/* Services tooltip on hover */}
              <div className="hidden group-hover:block absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-xl z-10">
                <p className="font-medium mb-1">Services fournis :</p>
                <ul className="space-y-0.5">
                  {reference.services.slice(0, 7).map((service, idx) => (
                    <li key={idx} className="text-gray-300">
                      • {service}
                    </li>
                  ))}
                </ul>
                {/* Arrow */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats avec compteurs animés */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

