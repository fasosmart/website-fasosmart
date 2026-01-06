import Image from "next/image";
import { partners } from "@/lib/data";

export function Partners() {
  // Dupliquer les partenaires plusieurs fois pour un scroll infini fluide
  // On crée 3 copies pour garantir que tous les éléments soient visibles
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 md:py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nos Partenaires Technologiques
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nous collaborons avec des leaders technologiques mondiaux pour vous offrir des solutions innovantes, fiables et performantes, adaptées à vos
            défis spécifiques. Ces partenariats stratégiques garantissent l'excellence et la pérennité de nos services.
          </p>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex animate-scroll-x hover:[animation-play-state:paused]">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 mx-4 md:mx-8"
            >
              <div className="group flex items-center justify-center w-40 md:w-48 h-24 md:h-28 rounded-xl bg-card hover:bg-primary/5 border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer">
                <div className="text-center px-4">
                  <div className="w-28 h-12 mx-auto mb-2 flex items-center justify-center">
                    {partner.logo ? (
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={160}
                        height={48}
                        className="max-h-12 w-auto object-contain group-hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-lg bg-muted group-hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <span className="text-xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                          {partner.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {partner.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Static Grid for smaller screens (fallback) */}
      <div className="md:hidden mt-8 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-4">
          {partners.slice(0, 6).map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center p-4 rounded-xl bg-card border border-border"
            >
              <div className="text-center">
                <div className="w-24 h-10 mx-auto mb-2 flex items-center justify-center">
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={40}
                      className="max-h-10 w-auto object-contain"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <span className="text-lg font-bold text-muted-foreground">
                        {partner.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <span className="text-xs font-medium text-muted-foreground line-clamp-1">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        {partners.length > 6 && (
          <p className="text-center text-sm text-muted-foreground mt-4">
            +{partners.length - 6} autres partenaires
          </p>
        )}
      </div>
    </section>
  );
}
