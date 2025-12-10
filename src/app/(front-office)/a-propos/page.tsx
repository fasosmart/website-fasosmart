import { Metadata } from "next";
import {
  PageBanner,
  AboutSection,
  MissionVision,
  Values,
  Objectives,
  Partners,
  ContactCTA,
} from "@/components/sections";
import { SectionTransition } from "@/components/shared/SectionTransition";
import { companyInfo } from "@/lib/constants";

export const metadata: Metadata = {
  title: "À Propos",
  description: companyInfo.mission,
};

export default function AboutPage() {
  return (
    <>
      {/* Banner */}
      <PageBanner
        icon="Building2"
        subtitle="À propos de nous"
        title="Découvrez Fasosmart"
        description={companyInfo.slogan + " - " + companyInfo.vision}
      />

      {/* Transition */}
      <SectionTransition variant="wave" className="text-white" />

      {/* À Propos Section */}
      <AboutSection />

      {/* Transition */}
      <SectionTransition variant="gradient" className="text-white" />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Transition */}
      <SectionTransition variant="diagonal" className="text-gray-50" />

      {/* Valeurs */}
      <Values />

      {/* Transition */}
      <SectionTransition variant="wave" className="text-white" />

      {/* Objectifs */}
      <Objectives />

      {/* Transition */}
      <SectionTransition variant="gradient" className="text-gray-50" />

      {/* Partenaires */}
      {/* <Partners /> */}

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}
