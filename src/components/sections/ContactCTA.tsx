import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/constants";

export function ContactCTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#063251] via-[#0E76BC] to-[#4491CE] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Nous nous efforçons de dépasser vos attentes en fournissant des
              solutions efficaces et innovantes qui vous permettront
              d&apos;atteindre vos objectifs avec succès.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg"
            >
              <Link href="/contact">
                Nous contacter
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold mb-6">
              Contactez-nous directement
            </h3>

            <div className="space-y-4">
              <a
                href={`tel:${companyInfo.contact.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Téléphone</p>
                  <p className="font-semibold">{companyInfo.contact.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Email</p>
                  <p className="font-semibold">{companyInfo.contact.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Adresse</p>
                  <p className="font-semibold">{companyInfo.contact.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

