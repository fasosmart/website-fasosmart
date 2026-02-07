// src/components/sections/contact/ContactInfo.tsx
"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { companyInfo } from "@/lib/constants";

export function ContactInfo() {
  const addresses = companyInfo.contact.addresses;

  const [activeLocationId, setActiveLocationId] = useState<string>(
    addresses.find((addr) => addr.isPrimary)?.id ?? addresses[0]?.id,
  );

  const currentLocation = addresses.find(
    (addr) => addr.id === activeLocationId,
  );

  if (!currentLocation) return null;

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* ==================== HEADER ==================== */}
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
          {addresses.length > 1
            ? "Présents en Guinée et en RD Congo, notre équipe est à votre disposition pour répondre à vos questions."
            : "Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos projets."}
        </p>
      </motion.div>

      {/* ==================== TABS ==================== */}
      {addresses.length > 1 && (
        <div className="flex gap-2 p-1 bg-muted/50 rounded-lg">
          {addresses.map((location) => (
            <button
              key={location.id}
              onClick={() => setActiveLocationId(location.id)}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeLocationId === location.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-pressed={activeLocationId === location.id}
            >
              {location.city}
            </button>
          ))}
        </div>
      )}

      {/* ==================== CARTES ==================== */}
      <div className="space-y-4">
        {/* TÉLÉPHONE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <a
            href={`tel:${currentLocation.phone}`}
            className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all group"
          >
            <motion.div
              className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Phone className="w-5 h-5 text-primary group-hover:text-white" />
            </motion.div>
            <div>
              <p className="text-sm text-muted-foreground">Téléphone</p>
              <p className="font-semibold">{currentLocation.phone}</p>
            </div>
          </a>
        </motion.div>

        {/* EMAIL */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <a
            href={`mailto:${companyInfo.contact.email}`}
            className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all group"
          >
            <motion.div
              className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Mail className="w-5 h-5 text-primary group-hover:text-white" />
            </motion.div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-semibold">{companyInfo.contact.email}</p>
            </div>
          </a>
        </motion.div>

        {/* SITE WEB */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <a
            href={`https://${companyInfo.contact.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all group"
          >
            <motion.div
              className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Globe className="w-5 h-5 text-primary group-hover:text-white" />
            </motion.div>
            <div>
              <p className="text-sm text-muted-foreground">Site web</p>
              <p className="font-semibold">{companyInfo.contact.website}</p>
            </div>
          </a>
        </motion.div>

        {/* ADRESSE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentLocation.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Adresse - {currentLocation.city}, {currentLocation.country}
              </p>
              <p className="font-semibold">{currentLocation.address}</p>
              {/* {currentLocation.reference && (
                <p className="text-xs text-muted-foreground mt-1">
                  {currentLocation.reference}
                </p>
              )} */}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* HORAIRES */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Horaires</p>
            <p className="font-semibold">Lun - Ven : 8h - 18h</p>
            <p className="text-sm text-muted-foreground">Sam : 9h - 13h</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
