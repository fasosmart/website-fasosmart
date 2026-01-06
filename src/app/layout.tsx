// Importation des types pour la métadonnée et des polices Google
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
// Importation des styles globaux
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

// Chargement de la police Inter, assignée à la variable CSS --font-inter
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Optimise l'affichage pendant le chargement
});

// Chargement de la police Poppins, assignée à la variable CSS --font-poppins
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap", // Optimise l'affichage pendant le chargement
});

// Métadonnées du site pour SEO et réseaux sociaux
export const metadata: Metadata = {
  title: {
    default: "FASOSMART - L'innovation au cœur de nos activités !",
    template: "%s | Fasosmart", // Modèle de titre pour les sous-pages
  },
  description:
    "Développer et démocratiser l'utilisation des solutions technologiques dans la vie des gens et des sociétés afin de stimuler leur productivité.",
  keywords: [
    "Fasosmart",
    "technologie",
    "solutions technologiques",
    "Guinée",
    "Afrique",
    "innovation",
    "productivité",
  ],
  // Auteurs du site
  authors: [{ name: "Fasosmart" }],
  // Créateur du site
  creator: "Fasosmart",
  // Base de la métadonnée du site
  metadataBase: new URL("https://www.fasosmart.com"),
  // Open Graph pour les réseaux sociaux
  openGraph: {
    type: "website",
    // Langue du site définie sur français
    locale: "fr_FR",
    // URL du site
    url: "https://www.fasosmart.com",
    // Nom du site
    siteName: "Fasosmart",
    // Titre du site
    title: "FASOSMART - Solutions Technologiques",
    description:
      "Une entreprise panafricaine leader au service de la révolution technologique africaine",
  },
  // Icônes pour le favicon et les appareils
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

// Composant racine du layout de l'application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Les enfants représentent le contenu de chaque page
}>) {
  return (
    // Langue du document définie sur français, avec gestion de l'hydratation
    <html lang="fr" suppressHydrationWarning>
      {/* Classes CSS pour activer les polices et l'anticrénelage */}
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
