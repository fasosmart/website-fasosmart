"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation d'envoi (pas de backend pour l'instant)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100">
        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Message envoyé !
          </h3>
          <p className="text-gray-600 mb-6">
            Merci pour votre message. Notre équipe vous répondra dans les plus
            brefs délais.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
          >
            Envoyer un autre message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
        Envoyez-nous un message
      </h2>
      <p className="text-gray-600 mb-6">
        Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name & Email Row */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nom complet *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Votre nom"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="votre@email.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>
        </div>

        {/* Phone & Company Row */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+224 XXX XXX XXX"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Entreprise
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Nom de votre entreprise"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Sujet *
          </label>
          <select
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
          >
            <option value="">Sélectionnez un sujet</option>
            <option value="services">Demande d&apos;information sur les services</option>
            <option value="formations">Demande d&apos;information sur les formations</option>
            <option value="devis">Demande de devis</option>
            <option value="partenariat">Proposition de partenariat</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Décrivez votre projet ou votre demande..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          className="w-full font-semibold"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
              Envoi en cours...
            </>
          ) : (
            <>
              Envoyer le message
              <Send className="w-5 h-5 ml-2" />
            </>
          )}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          En soumettant ce formulaire, vous acceptez que vos données soient
          utilisées pour vous recontacter.
        </p>
      </form>
    </div>
  );
}

