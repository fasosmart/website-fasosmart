"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type ThemeMode = "light" | "dark";

interface ThemeContextValue {
  readonly theme: ThemeMode;
  readonly setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  readonly children: ReactNode;
}

const THEME_STORAGE_KEY = "fasosmart-theme";

/**
 * Provider de thème global maison.
 * - Applique la classe `dark` sur l'élément <html>.
 * - Persiste le choix utilisateur dans localStorage.
 * - Initialise à partir de `prefers-color-scheme` si aucun choix n'est stocké.
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeMode>("light");

  // Applique la classe sur <html> et persiste le thème
  const applyTheme = useCallback((mode: ThemeMode) => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    window.localStorage.setItem(THEME_STORAGE_KEY, mode);
  }, []);

  // Initialisation à partir du storage ou du système
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem(THEME_STORAGE_KEY) as
      | ThemeMode
      | null;

    if (stored === "light" || stored === "dark") {
      setThemeState(stored);
      applyTheme(stored);
      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initial: ThemeMode = prefersDark ? "dark" : "light";
    setThemeState(initial);
    applyTheme(initial);
  }, [applyTheme]);

  const setTheme = useCallback(
    (mode: ThemeMode) => {
      setThemeState(mode);
      applyTheme(mode);
    },
    [applyTheme]
  );

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook pour accéder au thème courant et au setter.
 */
export function useThemeMode(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeMode doit être utilisé à l'intérieur de ThemeProvider."
    );
  }
  return context;
}

