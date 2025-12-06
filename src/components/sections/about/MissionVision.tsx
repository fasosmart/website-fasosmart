import { Target, Eye, Rocket } from "lucide-react";
import { companyInfo } from "@/lib/constants";

export function MissionVision() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Notre raison d&apos;être
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
            Mission & Vision
          </h2>
          <p className="text-lg text-gray-600">
            Guidés par notre passion pour l&apos;innovation, nous œuvrons pour un
            avenir technologique accessible à tous.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="group relative bg-white rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />

            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Notre Mission
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg">
                {companyInfo.mission}
              </p>

              {/* Decorative line */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-primary font-medium">
                  <Rocket className="w-5 h-5" />
                  <span>Stimuler la productivité</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 lg:p-10 text-white overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-display font-bold mb-4">
                Notre Vision
              </h3>

              <p className="text-white/90 leading-relaxed text-lg">
                {companyInfo.vision}
              </p>

              {/* Decorative line */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center gap-2 font-medium">
                  <Globe className="w-5 h-5" />
                  <span>Leader panafricain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Import manquant
import { Globe } from "lucide-react";

