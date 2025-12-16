"use client";

/**
 * Composant ScrollToTop
 * 
 * Bouton flottant permettant de remonter en haut de la page
 * 
 * FONCTIONNALITÉS :
 * - Apparaît après un scroll de 300px
 * - Animation fluide avec framer-motion
 * - Scroll smooth vers le haut au clic
 * - Position fixe en bas à droite
 * - Design cohérent avec le design system
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Détection du scroll pour afficher/masquer le bouton
  useEffect(() => {
    const toggleVisibility = () => {
      // Afficher le bouton après 300px de scroll
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Écouter l'événement de scroll
    window.addEventListener("scroll", toggleVisibility);

    // Nettoyage : retirer l'écouteur au démontage
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Animation fluide
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          aria-label="Remonter en haut de la page"
          title="Remonter en haut"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

