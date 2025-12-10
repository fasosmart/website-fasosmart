import { Metadata } from "next";
import {
  PageBanner,
  ContactInfo,
  ContactForm,
} from "@/components/sections";
import { SectionTransition } from "@/components/shared/SectionTransition";
import { MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Fasosmart pour vos projets technologiques. Notre équipe est à votre disposition pour répondre à toutes vos questions.",
};

export default function ContactPage() {
  return (
    <>
      {/* Banner */}
      <PageBanner
        icon="MessageSquare"
        subtitle="Parlons de votre projet"
        title="Contactez-nous"
        description="Notre équipe est à votre écoute pour vous accompagner dans vos projets de transformation digitale."
      />

      {/* Transition */}
      <SectionTransition variant="wave" className="text-white" />

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info - 2 columns */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>

            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-80 bg-gradient-to-br from-primary/5 to-primary/10 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
            <p className="text-gray-600">
              Carte Google Maps à intégrer ultérieurement
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Guinée Conakry, Quartier Kobaya
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
