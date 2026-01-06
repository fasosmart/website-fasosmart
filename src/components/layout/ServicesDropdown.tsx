"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import { serviceIconMap } from "@/lib/service-icons";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface ServicesDropdownProps {
  isActive: boolean;
}

export function ServicesDropdown({ isActive }: ServicesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Lien Services avec chevron */}
      <Link
        href="/services"
        className={cn(
          "relative py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1",
          isActive
            ? "text-primary"
            : "text-muted-foreground hover:text-primary"
        )}
      >
        Services
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
        {/* Tiret sous le lien actif */}
        {isActive && (
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
        )}
      </Link>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-[600px] max-w-[calc(100vw-2rem)] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden z-50"
          >
            {/* Grid 2 colonnes */}
            <div className="grid grid-cols-2 gap-0">
              {services.map((service, index) => {
                const Icon = serviceIconMap[service.id] || serviceIconMap["dev-apps"];
                const isLastRow = index >= services.length - (services.length % 2 || 2);
                const isEvenIndex = index % 2 === 1;
                return (
                  <Link
                    key={service.id}
                    href={`/services/${service.id}`}
                    className={cn(
                      "p-4 hover:bg-primary/5 transition-colors duration-200 group border-r border-b border-border",
                      isEvenIndex && "border-r-0",
                      isLastRow && "border-b-0"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      {/* Icône */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                        <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                      </div>
                      {/* Contenu */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm text-foreground mb-1 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Footer avec lien "Voir tous" */}
            <div className="border-t border-border bg-muted/30">
              <Link
                href="/services"
                className="flex items-center justify-between p-4 hover:bg-primary/5 transition-colors duration-200 group"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  Voir tous les services
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

