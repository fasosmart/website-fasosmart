import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formations } from "@/lib/data";

export function Formations() {
  // On affiche seulement 4 formations sur la page d'accueil
  const displayedFormations = formations.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Nos Formations
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
              Développez vos compétences avec nos formations professionnelles
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Nous proposons des formations adaptées à tous les niveaux pour
              vous permettre de maîtriser les outils et technologies
              essentiels à votre réussite professionnelle.
            </p>

            {/* Formations List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {displayedFormations.map((formation) => {
                const Icon = formation.icon;
                return (
                  <div
                    key={formation.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-gray-900">
                      {formation.title}
                    </span>
                  </div>
                );
              })}
            </div>

            <Button asChild size="lg" className="font-semibold">
              <Link href="/services-formations#formations">
                Découvrir nos formations
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 lg:p-12 text-white">
              {/* Decorative */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-2xl" />

              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Pourquoi choisir nos formations ?
                </h3>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>
                      Formateurs expérimentés et certifiés
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>
                      Programmes adaptés aux besoins du marché
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>
                      Approche pratique avec des cas réels
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>
                      Accompagnement personnalisé
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

