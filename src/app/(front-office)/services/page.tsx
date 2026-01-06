import { Metadata } from "next";
import { PageBanner, ContactCTA } from "@/components/sections";
import { SectionTransition } from "@/components/shared/SectionTransition";
import { ServicesOverview } from "@/components/sections/services";

export const metadata: Metadata = {
  title: "Nos Services",
  description:
    "Chez Fasosmart, nous travaillons en étroite collaboration avec vous pour personnaliser nos services en fonction de vos exigences spécifiques. Quels que soient vos besoins, notre équipe dévouée est là pour vous guider à chaque étape du processus.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Banner */}
      <PageBanner
        icon="Briefcase"
        subtitle="Nos solutions"
        title="Nos Services"
        description="Des solutions technologiques sur mesure pour stimuler votre productivité et accompagner votre transformation digitale."
      />

      {/* Transition */}
      <SectionTransition variant="wave" className="text-white" />

      {/* Services Overview */}
      <ServicesOverview />

      {/* Transition */}
      <SectionTransition variant="gradient" className="text-white" />

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}

