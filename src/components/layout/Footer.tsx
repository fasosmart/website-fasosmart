import Link from "next/link";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { companyInfo, navigation } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-primary-darker text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-gray-300 leading-relaxed">
              {companyInfo.mission}
            </p>
            <p className="text-xs text-gray-400 italic">
              {companyInfo.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Contactez-nous
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="h-4 w-4 shrink-0" />
                <a
                  href={`tel:${companyInfo.contact.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {companyInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {companyInfo.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Globe className="h-4 w-4 shrink-0" />
                <a
                  href={`https://${companyInfo.contact.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {companyInfo.contact.website}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>{companyInfo.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {companyInfo.name}. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

