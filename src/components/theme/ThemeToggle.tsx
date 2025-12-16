"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useThemeMode } from "@/components/providers/theme-provider";

/**
 * Toggle de thème clair/sombre.
 * - Utilise un contexte maison pour appliquer la classe `dark` sur html.
 * - Affiche une icône Soleil/Lune avec un focus visible et une animation douce.
 */
export function ThemeToggle() {
  const { theme, setTheme } = useThemeMode();
  const [isMounted, setIsMounted] = useState(false);

  // Évite les décalages entre rendu serveur et client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const isDark = theme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform duration-200 ease-out dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform duration-200 ease-out dark:rotate-0 dark:scale-100" />
    </button>
  );
}


