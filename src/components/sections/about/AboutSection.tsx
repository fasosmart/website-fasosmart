import { companyInfo } from "@/lib/constants";
import { Building2, Users, Globe, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Qui sommes-nous ?
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
              Une entreprise panafricaine au service de l&apos;innovation
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Chez <strong className="text-gray-900">Fasosmart</strong>, nous
                travaillons en étroite collaboration avec vous pour personnaliser
                nos services en fonction de vos exigences spécifiques.
              </p>
              <p>
                Quels que soient vos besoins, notre équipe dévouée est là pour
                vous guider à chaque étape du processus. Nous nous efforçons de
                dépasser vos attentes en fournissant des solutions efficaces et
                innovantes qui vous permettront d&apos;atteindre vos objectifs avec
                succès.
              </p>
              <p>
                Notre engagement envers l&apos;excellence et notre passion pour la
                technologie nous permettent de proposer des solutions de pointe
                adaptées aux défis du marché africain.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">5+</div>
              <div className="text-gray-600 text-sm">Années d&apos;expérience</div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-gray-600 text-sm">Clients satisfaits</div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">100+</div>
              <div className="text-gray-600 text-sm">Projets réalisés</div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">10+</div>
              <div className="text-gray-600 text-sm">Partenaires</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

