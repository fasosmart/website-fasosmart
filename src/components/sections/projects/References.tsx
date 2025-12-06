import { references } from "@/lib/data";
import { Building2 } from "lucide-react";
import { stats } from "@/lib/constants";

export function References() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nos Références
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
            Ils nous ont fait confiance
          </h2>
          <p className="text-lg text-gray-600">
            Plus de {references.length} entreprises et institutions nous ont
            choisis pour leurs projets de transformation digitale.
          </p>
        </div>

        {/* References Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
          {references.map((reference) => (
            <div
              key={reference.id}
              className="group relative bg-white rounded-xl p-4 lg:p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20"
            >
              {/* Logo placeholder */}
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center group-hover:from-primary group-hover:to-primary-dark transition-all duration-300">
                <span className="text-lg font-bold text-primary group-hover:text-white transition-colors">
                  {reference.name.charAt(0)}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-sm font-semibold text-gray-900 text-center mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {reference.name}
              </h3>

              {/* Services tooltip on hover */}
              <div className="hidden group-hover:block absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-xl z-10">
                <p className="font-medium mb-1">Services fournis :</p>
                <ul className="space-y-0.5">
                  {reference.services.slice(0, 3).map((service, idx) => (
                    <li key={idx} className="text-gray-300">
                      • {service}
                    </li>
                  ))}
                </ul>
                {/* Arrow */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-xl bg-white border border-gray-100">
            <div className="text-3xl font-bold text-primary mb-1">
              {stats[0].value}
            </div>
            <div className="text-gray-600 text-sm">{stats[0].label}</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white border border-gray-100">
            <div className="text-3xl font-bold text-primary mb-1">{stats[1].value}</div>
            <div className="text-gray-600 text-sm">{stats[1].label}</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white border border-gray-100">
            <div className="text-3xl font-bold text-primary mb-1">{stats[2].value}</div>
            <div className="text-gray-600 text-sm">{stats[2].label}</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white border border-gray-100">
            <div className="text-3xl font-bold text-primary mb-1">{stats[3].value}</div>
            <div className="text-gray-600 text-sm">{stats[3].label}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

