import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/data";
import { PageBanner, ContactCTA } from "@/components/sections";
import { SectionTransition } from "@/components/shared/SectionTransition";
import { ServiceDetail, RelatedServices } from "@/components/sections/services";
import type { ServiceData } from "@/lib/service-types";

interface ServicePageProps {
  params: Promise<{ serviceId: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    serviceId: service.id,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { serviceId } = await params;
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return {
      title: "Service non trouvé",
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { serviceId } = await params;
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    notFound();
  }

  // Extraire seulement les données sérialisables (sans l'icône)
  const serviceData: ServiceData = {
    id: service.id,
    title: service.title,
    description: service.description,
    methodology: service.methodology,
  };

  const relatedServicesData: ServiceData[] = services
    .filter((s) => s.id !== serviceId)
    .slice(0, 3)
    .map((s) => ({
      id: s.id,
      title: s.title,
      description: s.description,
      methodology: s.methodology,
    }));

  return (
    <>
      {/* Banner */}
      <PageBanner
        icon="Briefcase"
        subtitle="Service"
        title={service.title}
        description={service.description}
      />

      {/* Transition */}
      <SectionTransition variant="wave" className="text-white" />

      {/* Service Detail */}
      <ServiceDetail service={serviceData} />

      {/* Transition */}
      <SectionTransition variant="gradient" className="text-white" />

      {/* Related Services */}
      {relatedServicesData.length > 0 && (
        <>
          <RelatedServices services={relatedServicesData} currentServiceId={serviceId} />
          <SectionTransition variant="diagonal" className="text-gray-50" />
        </>
      )}

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}

