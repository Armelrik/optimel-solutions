"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        {/* === Titre === */}
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Contactez-nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une question ? Un projet ? Notre équipe est à votre écoute
          </p>
        </div>

        {/* === Contenu principal === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ===== Coordonnées ===== */}
          <div className="glass rounded-3xl p-8 animate-slide-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Nos coordonnées
            </h3>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Adresse",
                  content: "Ouagadougou, Burkina Faso",
                },
                {
                  icon: Phone,
                  title: "Téléphone",
                  content: "+226 70 80 90 70",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "contact@optimelsolutionsgroup.com",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ===== Réseaux sociaux ===== */}
            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4">
                Suivez-nous
              </h4>
              <div className="flex gap-4 flex-wrap">
                {[
                  {
                    label: "Facebook",
                    url: "https://facebook.com/optimelsolutionsgroup",
                  },
                  {
                    label: "LinkedIn",
                    url: "https://linkedin.com/company/optimelsolutionsgroup",
                  },
                  {
                    label: "Twitter",
                    url: "https://x.com/optimelsolutionsgroup",
                  },
                  {
                    label: "Instagram",
                    url: "https://instagram.com/optimelsolutionsgroup",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-dark px-4 py-2 rounded-full text-sm hover:scale-105 transition-all"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ===== Formulaire de contact ===== */}
          <div
            className="glass rounded-3xl p-8 animate-slide-in"
            style={{ animationDelay: "100ms" }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Envoyez-nous un message
            </h3>

            <ContactForm />

            {/* <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Merci pour votre message ! (à connecter à une API)");
              }}
            >
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl glass-dark border-0 focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl glass-dark border-0 focus:ring-2 focus:ring-primary transition-all"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl glass-dark border-0 focus:ring-2 focus:ring-primary transition-all"
                  placeholder="+226 XX XX XX XX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl glass-dark border-0 focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-accent text-primary-foreground px-6 py-4 rounded-xl font-semibold transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Envoyer le message
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </section>
  );
}
