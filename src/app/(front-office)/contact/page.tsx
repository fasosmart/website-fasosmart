import { Metadata } from "next";
import {
  PageBanner,
  ContactInfo,
  ContactForm,
  Map,
} from "@/components/sections";
import { SectionTransition } from "@/components/shared/SectionTransition";

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
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border/40 bg-card/5 shadow-sm backdrop-blur-sm px-6 py-8 md:px-10 md:py-12">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
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
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 bg-background border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Map />
        </div>
      </section>
    </>
  );
}
