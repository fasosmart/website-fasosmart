# FasoSmart - Site Web Corporatif

> **THINK SMART - THINK REVOLUTION**  
> Site web moderne et responsive pour FasoSmart, une entreprise panafricaine leader au service de la révolution technologique africaine.

[![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.18-38bdf8)](https://tailwindcss.com/)

---

## 📋 Table des matières

- [À propos](#-à-propos)
- [Technologies utilisées](#-technologies-utilisées)
- [Prérequis](#-prérequis)
- [Installation](#-installation)
- [Scripts disponibles](#-scripts-disponibles)
- [Structure du projet](#-structure-du-projet)
- [Design System](#-design-system)
- [Architecture](#-architecture)
- [Fonctionnalités](#-fonctionnalités)
- [Développement](#-développement)
- [Déploiement](#-déploiement)
- [Contribution](#-contribution)
- [Licence](#-licence)

---

## 🎯 À propos

**FasoSmart** est une entreprise panafricaine spécialisée dans les solutions technologiques innovantes. Ce site web présente l'entreprise, ses services, formations, projets et permet aux visiteurs de prendre contact.

### Mission
Développer et démocratiser l'utilisation des solutions technologiques dans la vie des gens et des sociétés afin de stimuler leur productivité.

### Vision
Une entreprise panafricaine leader au service de la révolution technologique africaine.

### Site en dev
🌐 [https://website-fasosmart.vercel.app/](https://website-fasosmart.vercel.app/)

---

## 🛠 Technologies utilisées

### Core
- **[Next.js 16.0.7](https://nextjs.org/)** - Framework React avec App Router
- **[React 19.2.0](https://react.dev/)** - Bibliothèque UI
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Typage statique

### Styling & UI
- **[TailwindCSS 3.4.18](https://tailwindcss.com/)** - Framework CSS utilitaire
- **[Shadcn/UI](https://ui.shadcn.com/)** - Composants UI modulaires (style: New York)
- **[Framer Motion 12.23.26](https://www.framer.com/motion/)** - Animations fluides
- **[Lucide React](https://lucide.dev/)** - Bibliothèque d'icônes

### Utilitaires
- **[class-variance-authority](https://cva.style/)** - Gestion des variantes de classes
- **[clsx](https://github.com/lukeed/clsx)** & **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Gestion des classes CSS

### Polices
- **[Inter](https://fonts.google.com/specimen/Inter)** - Police principale (corps de texte)
- **[Poppins](https://fonts.google.com/specimen/Poppins)** - Police d'affichage (titres)

---

## 📦 Prérequis

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 (ou yarn/pnpm)

---

## 🚀 Installation

1. **Cloner le dépôt** (si applicable)
   ```bash
   git clone <repository-url>
   cd fasosmart
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

---

## 📜 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement sur `http://localhost:3000` |
| `npm run build` | Compile l'application pour la production |
| `npm run start` | Lance le serveur de production (après `build`) |
| `npm run lint` | Vérifie le code avec ESLint |

---

## 📁 Structure du projet

```
fasosmart/
├── public/                      # Assets statiques
│   ├── images/                  # Images organisées par section
│   │   ├── shared/              # Images partagées (logo, patterns, icons)
│   │   ├── home/                 # Images page d'accueil
│   │   ├── about/                # Images page À Propos
│   │   ├── services-formations/  # Images services & formations
│   │   ├── projects/             # Images projets clients
│   │   ├── partners/             # Logos partenaires
│   │   └── references/           # Logos références clients
│   └── ...
│
├── resources/                    # Documentation et ressources
│   └── docs/
│       ├── process/              # Documentation processus
│       │   ├── fasosmart_design_tokens.md
│       │   └── fasosmart_animations_process.md
│       └── images/               # Captures d'écran
│
├── src/
│   ├── app/                      # App Router Next.js
│   │   ├── (front-office)/       # Routes publiques
│   │   │   ├── page.tsx          # Page d'accueil
│   │   │   ├── a-propos/         # Page À Propos
│   │   │   ├── services-formations/  # Page Services & Formations
│   │   │   ├── projets/          # Page Projets
│   │   │   ├── contact/          # Page Contact
│   │   │   └── layout.tsx        # Layout front-office
│   │   ├── (auth)/               # Routes authentification
│   │   ├── (back-office)/        # Routes administration
│   │   ├── layout.tsx             # Layout racine
│   │   ├── globals.css            # Styles globaux + Design Tokens
│   │   └── ...
│   │
│   ├── components/               # Composants React
│   │   ├── layout/               # Layout (Header, Footer)
│   │   ├── sections/             # Sections de pages
│   │   │   ├── about/             # Sections page À Propos
│   │   │   ├── contact/          # Sections page Contact
│   │   │   ├── projects/         # Sections page Projets
│   │   │   ├── services/         # Sections Services & Formations
│   │   │   └── ...                # Autres sections
│   │   ├── shared/               # Composants partagés
│   │   ├── providers/            # Context Providers (ThemeProvider)
│   │   ├── theme/                # Composants thème (ThemeToggle)
│   │   └── ui/                   # Composants UI Shadcn
│   │
│   ├── lib/                      # Utilitaires et constantes
│   │   ├── constants.ts          # Constantes (navigation, companyInfo)
│   │   ├── data.ts               # Données (services, formations, projets)
│   │   └── utils.ts              # Fonctions utilitaires
│   │
│   ├── hooks/                    # Hooks React personnalisés
│   │   ├── useCounter.ts         # Compteur animé
│   │   └── useScrollReveal.ts    # Révélation au scroll
│   │
│   ├── types/                    # Types TypeScript
│   │   └── index.ts
│   │
│   └── config/                    # Configuration
│       └── theme.ts               # Configuration thème
│
├── components.json                # Configuration Shadcn/UI
├── tailwind.config.js            # Configuration TailwindCSS
├── tsconfig.json                 # Configuration TypeScript
├── next.config.ts                 # Configuration Next.js
└── package.json                  # Dépendances et scripts
```

---

## 🎨 Design System

### Design Tokens

Le projet utilise un **Design System cohérent** basé sur les couleurs de la marque FasoSmart et des tokens CSS personnalisés pour le mode clair et sombre.

#### Couleurs principales
- **Bleu primaire:** `#4491CE` (RGB: 68, 145, 206)
- **Bleu foncé:** `#0E76BC` (RGB: 14, 118, 188)
- **Bleu turquoise:** `#1087A4` (RGB: 16, 135, 164)
- **Bleu très foncé:** `#063251` (RGB: 6, 50, 81)

#### Tokens CSS (Mode clair)
- `--background`: `hsl(210, 40%, 98%)` - Fond global
- `--foreground`: `hsl(222, 47%, 7%)` - Texte principal
- `--card`: `#FFFFFF` - Surfaces de cartes
- `--border`: `hsl(214, 32%, 91%)` - Bordures
- `--primary`: `hsl(204, 56%, 55%)` - Couleur primaire (basée sur `#4491CE`)

#### Tokens CSS (Mode sombre)
- `--background`: `hsl(210, 40%, 8%)` - Fond bleu nuit
- `--foreground`: `hsl(210, 40%, 98%)` - Texte clair
- `--card`: `hsl(210, 40%, 10%)` - Surfaces de cartes
- `--border`: `hsl(210, 30%, 28%)` - Bordures
- `--primary`: `hsl(204, 56%, 55%)` - Couleur primaire (identique)

### Typographie
- **Police principale:** Inter (corps de texte, UI)
- **Police d'affichage:** Poppins (titres, headings)

### Composants UI
Le projet utilise **Shadcn/UI** (style New York) pour une base de composants cohérente et personnalisable.

---

## 🏗 Architecture

### App Router (Next.js 16)
Le projet utilise le **App Router** de Next.js avec:
- **Route Groups:** `(front-office)`, `(auth)`, `(back-office)`
- **Layouts imbriqués:** Layout racine + layouts par groupe
- **Server Components:** Par défaut pour de meilleures performances
- **Client Components:** Uniquement quand nécessaire (`"use client"`)

### Organisation des composants

#### Sections (`src/components/sections/`)
Chaque section de page est un composant réutilisable:
- `Hero.tsx` - Section hero de la page d'accueil
- `Services.tsx` - Section services (accueil)
- `ServicesDetail.tsx` - Détails services (page dédiée)
- `AboutPreview.tsx` - Aperçu À Propos (accueil)
- `AboutSection.tsx` - Section complète À Propos
- `Projects.tsx` - Section projets (accueil)
- `ProjectsPortfolio.tsx` - Portfolio complet
- `ContactCTA.tsx` - Call-to-action contact
- etc.

#### Layout (`src/components/layout/`)
- `Header.tsx` - Header avec navigation et menu mobile
- `Footer.tsx` - Footer avec liens et informations

#### Providers (`src/components/providers/`)
- `ThemeProvider.tsx` - Gestion du thème clair/sombre avec persistence localStorage

### Gestion des données
- **Constantes:** `src/lib/constants.ts` (navigation, companyInfo, stats)
- **Données:** `src/lib/data.ts` (services, formations, projets, partenaires, références)

---

## ✨ Fonctionnalités

### 🌓 Mode sombre / Mode clair
- **Toggle de thème** avec persistence dans `localStorage`
- **Détection automatique** de la préférence système (`prefers-color-scheme`)
- **Design tokens** adaptés pour les deux modes
- **Transitions fluides** entre les modes

### 🎬 Animations
- **Framer Motion** pour les animations fluides
- **Scroll reveal** - Révélation progressive au scroll
- **Hover effects** - Micro-interactions sur les éléments
- **Page transitions** - Transitions entre sections
- **Counter animations** - Compteurs animés pour les statistiques

### 📱 Responsive Design
- **Mobile-first** approach
- **Breakpoints Tailwind:** sm, md, lg, xl
- **Menu mobile** avec slide-in depuis la droite
- **Images optimisées** avec Next.js Image

### ♿ Accessibilité
- **ARIA labels** sur les éléments interactifs
- **Focus states** visibles
- **Contraste WCAG** respecté
- **Navigation au clavier** supportée

### 🚀 Performance
- **Server Components** par défaut
- **Code splitting** automatique
- **Images optimisées** (Next.js Image)
- **Font optimization** (next/font)

---

## 💻 Développement

### Conventions de code

#### TypeScript
- **Typage strict** - Éviter `any`, utiliser des types explicites
- **Interfaces** pour les props de composants
- **Types partagés** dans `src/types/`

#### React
- **Composants fonctionnels** avec hooks
- **Server Components** par défaut, `"use client"` uniquement si nécessaire
- **Props typées** avec TypeScript
- **Composants réutilisables** et modulaires

#### Styling
- **TailwindCSS** pour le styling
- **Design tokens** via variables CSS (`--background`, `--foreground`, etc.)
- **Classes utilitaires** plutôt que CSS inline
- **Responsive** avec les breakpoints Tailwind

#### Naming
- **Composants:** PascalCase (`AboutSection.tsx`)
- **Fichiers:** kebab-case pour les pages, PascalCase pour les composants
- **Variables/fonctions:** camelCase
- **Constantes:** UPPER_SNAKE_CASE ou camelCase selon le contexte

### Ajouter une nouvelle page

1. Créer le fichier dans `src/app/(front-office)/nouvelle-page/page.tsx`
2. Ajouter la route dans `src/lib/constants.ts` (navigation)
3. Créer les sections nécessaires dans `src/components/sections/`
4. Importer et utiliser dans la page

### Ajouter un nouveau composant

1. Créer le fichier dans `src/components/[dossier]/`
2. Exporter depuis un `index.ts` si nécessaire
3. Utiliser les design tokens pour le styling
4. Typage TypeScript complet

---

## 🚢 Déploiement

### Vercel (Recommandé)
Le projet est optimisé pour le déploiement sur **Vercel**:

1. Connecter le dépôt GitHub/GitLab à Vercel
2. Vercel détecte automatiquement Next.js
3. Déploiement automatique à chaque push

### Build de production
```bash
npm run build
npm run start
```

### Variables d'environnement
Créer un fichier `.env.local` pour les variables d'environnement (si nécessaire):
```env
NEXT_PUBLIC_SITE_URL=https://fasosmart.com
```

## 📄 Licence

Ce projet est propriétaire et appartient à **FasoSmart**.

---

## 📞 Contact

**FasoSmart**  
📍 Guinée Conakry, Quartier Kobaya  
📞 +224 613 15 45 45  
✉️ info@fasosmart.com  
🌐 www.fasosmart.com

---

## 🙏 Remerciements

- [Next.js](https://nextjs.org/) - Framework React
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS
- [Shadcn/UI](https://ui.shadcn.com/) - Composants UI
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide](https://lucide.dev/) - Icônes

---
