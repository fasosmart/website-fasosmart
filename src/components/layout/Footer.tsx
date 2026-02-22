import Link from "next/link";
import { Phone, Mail, Globe, MapPin, ExternalLink } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { companyInfo, divisions, navigation } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#063251] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            {/* Logo Footer */}
            <Logo variant="footer" showText={false} showSlogan={false} />
            <p className="text-sm text-gray-300 leading-relaxed mt-4">
              {companyInfo.mission}
            </p>
            <p className="text-xs text-primary italic">{companyInfo.tagline}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-white">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        {/* Divisions */}
        <div className="divisions space-y-4">
          <h3>Nos Filiales</h3>
          <ul className="space-y-3">
            {divisions.map((division) => (
              <li key={division.name} className="flex items-center">
          <a
            href={`https://${division.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <span>{division.name}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
              </li>
            ))}
          </ul>
        </div>
          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-white">
              Contactez-nous
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${companyInfo.contact.addresses[0].phone}`}>
                  {companyInfo.contact.addresses[0].phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${companyInfo.contact.email}`}>
                  {companyInfo.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Globe className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`https://${companyInfo.contact.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {companyInfo.contact.website}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                <span>{companyInfo.contact.addresses[0].address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {companyInfo.name}. Tous droits
            réservés.
          </p>
        </div>

      </div>
    </footer>
  );
}
