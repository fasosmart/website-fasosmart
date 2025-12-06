import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
import { companyInfo } from "@/lib/constants";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Intro */}
      <div>
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">
          Contactez-nous
        </h2>
        <p className="text-gray-600">
          Notre équipe est à votre disposition pour répondre à toutes vos
          questions et vous accompagner dans vos projets.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="space-y-4">
        {/* Phone */}
        <a
          href={`tel:${companyInfo.contact.phone}`}
          className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all group"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
            <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Téléphone</p>
            <p className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
              {companyInfo.contact.phone}
            </p>
          </div>
        </a>

        {/* Email */}
        <a
          href={`mailto:${companyInfo.contact.email}`}
          className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all group"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
            <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Email</p>
            <p className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
              {companyInfo.contact.email}
            </p>
          </div>
        </a>

        {/* Website */}
        <a
          href={`https://${companyInfo.contact.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all group"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
            <Globe className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Site web</p>
            <p className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
              {companyInfo.contact.website}
            </p>
          </div>
        </a>

        {/* Address */}
        <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Adresse</p>
            <p className="font-semibold text-gray-900">
              {companyInfo.contact.address}
            </p>
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Horaires</p>
            <p className="font-semibold text-gray-900">Lun - Ven : 8h - 18h</p>
            <p className="text-sm text-gray-500">Sam : 9h - 13h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

