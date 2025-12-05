"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { navigation, companyInfo } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Vérifier si un lien est actif
  const isActive = (href: string) => pathname === href;

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
      {/* Header principal */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "bg-white/95 backdrop-blur-md border-b border-gray-200/50",
          "transition-shadow duration-300",
          isScrolled && "shadow-lg"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Logo />

            {/* Navigation desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative py-2 text-sm font-medium transition-colors duration-200",
                    isActive(item.href)
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
                  )}
                >
                  {item.name}
                  {/* Tiret sous le lien actif */}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Bouton hamburger mobile */}
            <button
              type="button"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
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
          "bg-white overflow-y-auto",
          "transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Navigation mobile */}
          <nav className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-xl text-base font-medium transition-all",
                  isActive(item.href)
                    ? "text-primary bg-primary/10 border-l-4 border-primary"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Séparateur */}
          <div className="my-6 h-px bg-gray-200" />

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
