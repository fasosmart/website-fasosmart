"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, ExternalLink } from "lucide-react";
import { divisions } from "@/lib/data";
import { divisionIconMap } from "@/lib/division-icons";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface DivisionsDropdownProps {
  isActive: boolean;
}

export function DivisionsDropdown({ isActive }: DivisionsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Vérifier si l'URL est externe
  const isExternalUrl = (url?: string) => {
    return url ? url.startsWith("http") : false;
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Lien "Nos Filiales" avec chevron */}
      <Link
        href="/divisions"
        className={cn(
          "relative py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1",
          isActive
            ? "text-primary"
            : "text-muted-foreground hover:text-primary"
        )}
      >
        Nos Filiales
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

      {/* Mega Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-[800px] max-w-[calc(100vw-2rem)] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden z-50"
          >
            {/* Header du mega menu */}
            <div className="px-6 py-4 border-b border-border bg-muted/30">
              <h3 className="text-base font-semibold text-foreground">
                NOS FILIALES
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Découvrez nos divisions spécialisées
              </p>
            </div>

            {/* Grid 2x2 pour les 4 filiales */}
            <div className="grid grid-cols-2 gap-0">
              {divisions.map((division, index) => {
                const Icon = divisionIconMap[division.id];
                const isExternal = isExternalUrl(division.url);
                const isLastRow = index >= divisions.length - 2;
                const isEvenIndex = index % 2 === 1;

                // Composant de lien (interne ou externe)
                const LinkComponent = ({ children, className }: { children: React.ReactNode; className?: string }) => {
                  if (isExternal && division.url) {
                    return (
                      <a
                        href={division.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={className}
                      >
                        {children}
                      </a>
                    );
                  }
                  return (
                    <Link href={division.url || "#"} className={className}>
                      {children}
                    </Link>
                  );
                };

                return (
                  <LinkComponent
                    key={division.id}
                    className={cn(
                      "p-6 hover:bg-primary/5 transition-colors duration-200 group border-r border-b border-border",
                      isEvenIndex && "border-r-0",
                      isLastRow && "border-b-0"
                    )}
                  >
                    <div className="flex flex-col gap-3">
                      {/* Header avec icône et nom */}
                      <div className="flex items-start gap-4">
                        {/* Icône avec couleur */}
                        <div
                          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                          style={{
                            backgroundColor: division.color
                              ? `${division.color}15`
                              : "rgba(68, 145, 206, 0.1)",
                          }}
                        >
                          <Icon
                            className="w-6 h-6 transition-colors"
                            style={{
                              color: division.color || "#4491CE",
                            }}
                          />
                        </div>
                        {/* Nom et tagline */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-base text-foreground mb-1 group-hover:text-primary transition-colors">
                            {division.name}
                          </h3>
                          <p className="text-xs font-medium text-muted-foreground">
                            {division.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {division.description}
                      </p>

                      {/* Features list */}
                      <ul className="space-y-1.5">
                        {division.features.slice(0, 4).map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-xs text-muted-foreground"
                          >
                            <span className="w-1 h-1 rounded-full bg-primary/40" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Link */}
                      <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all pt-2 border-t border-border/50">
                        <span>
                          {isExternal ? "Visiter le site" : "Découvrir"}
                        </span>
                        {isExternal ? (
                          <ExternalLink className="w-4 h-4" />
                        ) : (
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        )}
                      </div>
                    </div>
                  </LinkComponent>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

