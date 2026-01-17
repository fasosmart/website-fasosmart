"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ChevronRight, ExternalLink } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { navigation, companyInfo } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { ServicesDropdown } from "./ServicesDropdown";
import { DivisionsDropdown } from "./DivisionsDropdown";
import { services, divisions } from "@/lib/data";
import { serviceIconMap } from "@/lib/service-icons";
import { divisionIconMap } from "@/lib/division-icons";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  const pathname = usePathname();

  // Vérifier si un lien est actif
  const isActive = (href: string) => pathname === href;
  
  // Vérifier si on est sur une page de services
  const isServicesActive = pathname === "/services" || pathname.startsWith("/services/");
  
  // Vérifier si on est sur une page de divisions
  const isDivisionsActive = pathname === "/divisions" || pathname.startsWith("/divisions/");

  // Fermer le menu quand on change de page
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Détecter le scroll pour ajouter une ombre
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Empêcher le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Header principal avec glassmorphism amélioré */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "bg-background/80 backdrop-blur-xl border-b border-border/30",
          "transition-all duration-500",
          isScrolled
            ? "shadow-xl bg-background/95 backdrop-blur-2xl border-border/50"
            : "shadow-none"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Logo variant="header" showText={false} showSlogan={false} />

            <div className="flex items-center gap-4">
              {/* Navigation desktop */}
              <nav className="hidden lg:flex items-center gap-8">
                {navigation.map((item) => {
                  // Remplacer le lien "Nos Filiales" par le mega-menu
                  if (item.name === "Nos Filiales") {
                    return (
                      <DivisionsDropdown key={item.name} isActive={isDivisionsActive} />
                    );
                  }
                  // Remplacer le lien Services par le dropdown
                  if (item.name === "Services") {
                    return (
                      <ServicesDropdown key={item.name} isActive={isServicesActive} />
                    );
                  }
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "relative py-2 text-sm font-medium transition-colors duration-200",
                        isActive(item.href)
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      )}
                    >
                      {item.name}
                      {/* Tiret sous le lien actif */}
                      {isActive(item.href) && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Toggle thème */}
              <div className="hidden lg:block">
                <ThemeToggle />
              </div>

              {/* Bouton hamburger mobile */}
              <button
                type="button"
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-accent transition-colors"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu mobile */}
      <div
        className={cn(
          "fixed top-16 md:top-20 left-0 right-0 bottom-0 z-40 lg:hidden",
          "bg-background overflow-y-auto",
          "transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          {/* Navigation mobile */}
          <nav className="space-y-1">
            {navigation.map((item) => {
              // Gérer le menu "Nos Filiales" avec sous-menu
              if (item.name === "Nos Filiales") {
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => setIsDivisionsOpen(!isDivisionsOpen)}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all",
                        isDivisionsActive
                          ? "text-primary bg-primary/10 border-l-4 border-primary"
                          : "text-foreground hover:text-primary hover:bg-secondary"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronRight
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          isDivisionsOpen && "rotate-90"
                        )}
                      />
                    </button>
                    {/* Sous-menu Filiales */}
                    {isDivisionsOpen && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary/20 pl-2">
                        {divisions.map((division) => {
                          const Icon = divisionIconMap[division.id];
                          const isExternal = division.url?.startsWith("http");
                          return (
                            <a
                              key={division.id}
                              href={division.url || "#"}
                              target={isExternal ? "_blank" : undefined}
                              rel={isExternal ? "noopener noreferrer" : undefined}
                              onClick={() => {
                                setIsOpen(false);
                                setIsDivisionsOpen(false);
                              }}
                              className={cn(
                                "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all",
                                pathname === `/divisions/${division.id}`
                                  ? "text-primary bg-primary/10"
                                  : "text-muted-foreground hover:text-primary hover:bg-secondary"
                              )}
                            >
                              <Icon className="w-4 h-4 flex-shrink-0" />
                              <span className="line-clamp-1">{division.name}</span>
                              {isExternal && <ExternalLink className="w-3 h-3 ml-auto" />}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
              // Gérer le menu Services avec sous-menu
              if (item.name === "Services") {
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all",
                        isServicesActive
                          ? "text-primary bg-primary/10 border-l-4 border-primary"
                          : "text-foreground hover:text-primary hover:bg-secondary"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronRight
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          isServicesOpen && "rotate-90"
                        )}
                      />
                    </button>
                    {/* Sous-menu Services */}
                    {isServicesOpen && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary/20 pl-2">
                        {services.map((service) => {
                          const Icon = serviceIconMap[service.id] || serviceIconMap["dev-apps"];
                          return (
                            <Link
                              key={service.id}
                              href={`/services/${service.id}`}
                              onClick={() => {
                                setIsOpen(false);
                                setIsServicesOpen(false);
                              }}
                              className={cn(
                                "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all",
                                pathname === `/services/${service.id}`
                                  ? "text-primary bg-primary/10"
                                  : "text-muted-foreground hover:text-primary hover:bg-secondary"
                              )}
                            >
                              <Icon className="w-4 h-4 flex-shrink-0" />
                              <span className="line-clamp-1">{service.title}</span>
                            </Link>
                          );
                        })}
                        <Link
                          href="/services"
                          onClick={() => {
                            setIsOpen(false);
                            setIsServicesOpen(false);
                          }}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-all"
                        >
                          <ChevronRight className="w-4 h-4" />
                          Voir tous les services
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-base font-medium transition-all",
                    isActive(item.href)
                      ? "text-primary bg-primary/10 border-l-4 border-primary"
                      : "text-foreground hover:text-primary hover:bg-secondary"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Séparateur */}
          <div className="my-6 h-px bg-border" />

          {/* Toggle thème mobile */}
          <div className="mb-6 flex justify-start px-4">
            <ThemeToggle />
          </div>

          {/* Contact rapide mobile */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10">
            <p className="text-sm font-medium text-gray-700 mb-3">
              Besoin d&apos;aide ?
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${companyInfo.contact.phone}`}
                className="flex items-center gap-3 text-sm text-primary hover:underline"
              >
                <Phone className="w-4 h-4" />
                {companyInfo.contact.phone}
              </a>
              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="flex items-center gap-3 text-sm text-primary hover:underline"
              >
                <Mail className="w-4 h-4" />
                {companyInfo.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer pour compenser le header fixe */}
      <div className="h-16 md:h-20" />
    </>
  );
}
