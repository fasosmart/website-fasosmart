import { partners } from "@/lib/data";

export function Partners() {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-gray-100">
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

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 lg:gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group flex items-center justify-center p-6 rounded-xl bg-gray-50 hover:bg-primary/5 border border-gray-100 hover:border-primary/20 transition-all duration-300"
            >
              {/* Placeholder for logo - using text for now */}
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-gray-200 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                  <span className="text-lg font-bold text-gray-400 group-hover:text-primary transition-colors">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-600 group-hover:text-primary transition-colors">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

