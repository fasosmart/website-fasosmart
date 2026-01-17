"use client";

import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/constants";

export function ContactCTA() {
  return (
    <section className="py-24 md:py-32 lg:py-40 gradient-animated text-white relative overflow-hidden">
      {/* Background Pattern animé */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute left-0 w-72 h-72 bg-white rounded-full blur-3xl"
          style={{ bottom: "10%" }}
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
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
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Prêt à transformer votre entreprise ?
            </motion.h2>
            <motion.p
              className="text-lg text-white/90 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Nous nous efforçons de dépasser vos attentes en fournissant des
              solutions efficaces et innovantes qui vous permettront
              d&apos;atteindre vos objectifs avec succès.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg hover:shadow-2xl transition-all"
                >
                  <Link href="/contact" className="flex items-center">
                    Nous contacter
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Info avec animations */}
          <motion.div
            className="glass rounded-2xl p-8 border border-white/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-6">
              Contactez-nous directement
            </h3>

            <div className="space-y-4">
              {[
                { icon: Phone, label: "Téléphone", value: companyInfo.contact.phone, href: `tel:${companyInfo.contact.phone}` },
                { icon: Mail, label: "Email", value: companyInfo.contact.email, href: `mailto:${companyInfo.contact.email}` },
                { icon: MapPin, label: "Adresse", value: companyInfo.contact.address, href: null },
              ].map((item, index) => {
                const Icon = item.icon;
                const Component = item.href ? "a" : "div";
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.02, x: 8 }}
                  >
                    <Component
                      href={item.href || undefined}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer"
                    >
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white transition-colors"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-6 h-6 group-hover:text-primary transition-colors" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-white/70">{item.label}</p>
                        <p className="font-semibold">{item.value}</p>
                      </div>
                    </Component>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

