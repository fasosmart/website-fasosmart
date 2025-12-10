# Structure des Images - Fasosmart

## Organisation modulaire des images

```
images/
├── shared/                    # Images partagées entre plusieurs pages
│   ├── logo/                  # Logos Fasosmart (PNG, SVG)
│   ├── patterns/              # Patterns et textures de fond
│   └── icons/                 # Icônes personnalisées
│
├── home/                      # Images spécifiques à la page d'accueil
│   ├── hero/                  # Images de la section Hero
│   └── sections/              # Images des autres sections (Services, Formations, etc.)
│
├── about/                     # Images de la page À Propos
│   ├── team/                  # Photos d'équipe
│   └── values/                # Images illustrant les valeurs
│
├── services-formations/        # Images Services & Formations
│   ├── services/              # Images par service (7 services)
│   └── formations/            # Images par formation (8 formations)
│
├── projects/                   # Images des projets
│   ├── cciag/                 # Images projet CCIAG
│   ├── makila-share/          # Images projet Makila Share
│   ├── guinee-gaz/            # Images projet Guinée GAZ
│   └── gmt/                   # Images projet GMT
│
├── contact/                   # Images page Contact
│
├── partners/                   # Logos des partenaires (fournisseurs)
│                               # Format: partners/[nom-partenaire].png
│
├── references/                 # Logos des références (clients)
│                               # Format: references/[nom-client].png
│
└── logos/                      # Logos généraux (clients, partenaires, etc.)
```

## Utilisation

### Exemple dans un composant

```tsx
import Image from "next/image";

// Image partagée
<Image 
  src="/images/shared/logo/fasosmart-logo.png" 
  alt="Fasosmart"
/>

// Image spécifique à une page
<Image 
  src="/images/home/hero/hero-image.jpg" 
  alt="Hero"
/>

// Logo partenaire
<Image 
  src="/images/partners/proline.png" 
  alt="Proline"
/>
```

## Formats recommandés

- **Logos** : PNG avec fond transparent
- **Photos** : JPG/WebP optimisées
- **Illustrations** : SVG ou PNG
- **Taille** : Optimiser avant upload (max 2MB par image)

## Naming convention

- Utiliser des noms descriptifs en minuscules avec tirets
- Exemple : `hero-background.jpg`, `team-member-john.jpg`

