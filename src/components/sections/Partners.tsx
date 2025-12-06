import { partners } from "@/lib/data";

export function Partners() {
  // Dupliquer les partenaires pour l'effet infini
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nos Partenaires
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Avec nos partenaires, ensemble, nous explorons les horizons de la
            transformation numérique.
          </p>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex animate-scroll-x hover:[animation-play-state:paused]">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 mx-4 md:mx-8"
            >
              <div className="group flex items-center justify-center w-40 md:w-48 h-24 md:h-28 rounded-xl bg-gray-50 hover:bg-primary/5 border border-gray-100 hover:border-primary/20 transition-all duration-300 cursor-pointer">
                {/* Logo Placeholder */}
                <div className="text-center px-4">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-gray-200/80 group-hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <span className="text-xl font-bold text-gray-400 group-hover:text-primary transition-colors">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-500 group-hover:text-primary transition-colors line-clamp-1">
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
              className="flex items-center justify-center p-4 rounded-xl bg-gray-50 border border-gray-100"
            >
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gray-200/80 flex items-center justify-center">
                  <span className="text-lg font-bold text-gray-400">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <span className="text-xs font-medium text-gray-500 line-clamp-1">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        {partners.length > 6 && (
          <p className="text-center text-sm text-gray-400 mt-4">
            +{partners.length - 6} autres partenaires
          </p>
        )}
      </div>
    </section>
  );
}
