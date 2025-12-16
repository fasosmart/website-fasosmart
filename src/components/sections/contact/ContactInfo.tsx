"use client";

import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { companyInfo } from "@/lib/constants";

export function ContactInfo() {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-display font-bold text-foreground mb-3">
          Contactez-nous
        </h2>
        <p className="text-muted-foreground">
          Notre équipe est à votre disposition pour répondre à toutes vos
          questions et vous accompagner dans vos projets.
        </p>
      </motion.div>

      {/* Contact Cards avec animations */}
      <div className="space-y-4">
        {[
          { icon: Phone, label: "Téléphone", value: companyInfo.contact.phone, href: `tel:${companyInfo.contact.phone}`, clickable: true },
          { icon: Mail, label: "Email", value: companyInfo.contact.email, href: `mailto:${companyInfo.contact.email}`, clickable: true },
          { icon: Globe, label: "Site web", value: companyInfo.contact.website, href: `https://${companyInfo.contact.website}`, clickable: true },
          { icon: MapPin, label: "Adresse", value: companyInfo.contact.address, href: null, clickable: false },
          { icon: Clock, label: "Horaires", value: "Lun - Ven : 8h - 18h", value2: "Sam : 9h - 13h", href: null, clickable: false },
        ].map((item, index) => {
          const Icon = item.icon;
          const Component = item.clickable ? "a" : "div";
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
            >
              <Component
                href={item.href || undefined}
                target={
                  item.clickable && item.href?.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.clickable && item.href?.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`flex items-start gap-4 p-4 rounded-xl bg-card border border-border transition-all group ${
                  item.clickable
                    ? "hover:border-primary/40 hover:shadow-lg cursor-pointer"
                    : ""
                }`}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  <p
                    className={`font-semibold ${
                      item.clickable
                        ? "text-foreground group-hover:text-primary transition-colors"
                        : "text-foreground"
                    }`}
                  >
                    {item.value}
                  </p>
                  {item.value2 && (
                    <p className="text-sm text-muted-foreground">
                      {item.value2}
                    </p>
                  )}
                </div>
              </Component>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

