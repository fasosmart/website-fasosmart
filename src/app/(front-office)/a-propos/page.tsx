import { Metadata } from "next";
import { Building2 } from "lucide-react";
import {
  PageBanner,
  AboutSection,
  MissionVision,
  Values,
  Objectives,
  Partners,
  ContactCTA,
} from "@/components/sections";
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
        icon={Building2}
        subtitle="À propos de nous"
        title="Découvrez Fasosmart"
        description={companyInfo.slogan + " - " + companyInfo.vision}
      />

      {/* À Propos Section */}
      <AboutSection />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Valeurs */}
      <Values />

      {/* Objectifs */}
      <Objectives />

      {/* Partenaires */}
      {/* <Partners /> */}

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}
