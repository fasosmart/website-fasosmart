import { formations } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export function FormationsDetail() {
  return (
    <section id="formations" className="py-20 md:py-28 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nos Formations
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
            Développez vos compétences
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nous proposons des formations adaptées à tous les niveaux pour vous
            permettre de maîtriser les outils et technologies essentiels à votre
            réussite professionnelle.
          </p>
        </div>

        {/* Formations Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {formations.map((formation) => {
            const Icon = formation.icon;
            return (
              <div
                key={formation.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Left border accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />

                <div className="p-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-primary-dark transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {formation.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {formation.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom info card */}
        <div className="mt-12 bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 lg:p-10 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                <GraduationCap className="w-8 h-8" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">
                Formation sur mesure disponible
              </h3>
              <p className="text-white/80">
                Vous avez des besoins spécifiques ? Nous créons des programmes de
                formation personnalisés adaptés à votre entreprise et à vos
                objectifs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

