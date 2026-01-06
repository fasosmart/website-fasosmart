"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import type { ServiceData } from "@/lib/service-types";
import { serviceIconMap } from "@/lib/service-icons";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/constants";

interface ServiceDetailProps {
  service: ServiceData;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  // Récupérer l'icône depuis le mapping côté client
  const Icon = serviceIconMap[service.id] || serviceIconMap["dev-apps"];

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-turquoise/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Colonne principale - Description et Méthodologie */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description principale */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 lg:p-10 shadow-sm border border-border"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
                  {service.title}
                </h1>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>

            {/* Méthodologie / Processus */}
            {service.methodology && service.methodology.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card rounded-2xl p-8 lg:p-10 shadow-sm border border-border"
              >
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Notre Processus
                </h2>
                <div className="space-y-4">
                  {service.methodology.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-foreground leading-relaxed flex-1">
                        {step}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar - CTA et Contact */}
          <div className="lg:col-span-1 space-y-6">
            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white shadow-lg sticky top-24"
            >
              <h3 className="text-xl font-display font-bold mb-4">
                Intéressé par ce service ?
              </h3>
              <p className="text-white/90 mb-6 text-sm leading-relaxed">
                Contactez-nous pour discuter de vos besoins et obtenir un devis
                personnalisé.
              </p>
              <div className="space-y-3">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-white text-primary hover:bg-white/90"
                >
                  <Link href="/contact" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Nous contacter
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  <a
                    href={`mailto:${companyInfo.contact.email}?subject=Demande de renseignement - ${service.title}`}
                    className="flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Envoyer un email
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Retour aux services */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Retour aux services
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

