// "use client";

import { Users, CheckCircle2, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  partenariatsTypes,
  partenariatsProjets,
  partenariatsAvantages,
  partenariatsContacts,
} from "@/constants/partenariats";

export const metadata = {
  title: "OPTIMEL Partenariats – Ensemble pour un développement durable",
  description:
    "Collaborations stratégiques entre OPTIMEL, les institutions publiques, le secteur privé et les organisations internationales.",
};

export default function PartenariatsPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-2xl text-primary-foreground">
              <Users size={48} />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4">
            OPTIMEL Partenariats
          </h1>
          <p className="text-2xl text-primary italic mb-6">
            "Ensemble pour un développement durable."
          </p>
        </div>

        {/* Introduction */}
        <section className="glass rounded-3xl p-8 mb-10 animate-slide-in">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Des alliances au service du progrès
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Chez OPTIMEL Solutions Group SA, nous croyons que les défis du
            développement nécessitent des réponses collectives. Nos partenariats
            visent à unir les compétences, les technologies et les ressources
            pour construire un Burkina Faso plus résilient et prospère.
          </p>
        </section>

        {/* Types de partenariats */}
        <section
          className="glass rounded-3xl p-8 mb-10 animate-slide-in"
          style={{ animationDelay: "100ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Types de Partenariats
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {partenariatsTypes.map((type) => (
              <div key={type.title} className="flex items-start gap-4">
                <CheckCircle2
                  className="text-primary mt-1 flex-shrink-0"
                  size={24}
                />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground">{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projets conjoints */}
        <section
          className="glass rounded-3xl p-8 mb-10 animate-slide-in"
          style={{ animationDelay: "200ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Projets et Collaborations
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {partenariatsProjets.map((p) => (
              <div
                key={p.title}
                className="bg-background/50 rounded-xl p-6 shadow-sm hover:scale-[1.02] transition-transform"
              >
                <h3 className="font-semibold text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Avantages */}
        <section
          className="glass rounded-3xl p-8 mb-10 animate-slide-in"
          style={{ animationDelay: "300ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Avantages des Partenariats
          </h2>
          <ul className="space-y-3">
            {partenariatsAvantages.map((a, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-muted-foreground">{a}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section
          className="glass rounded-3xl p-8 mb-10 animate-slide-in"
          style={{ animationDelay: "400ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Building2 className="text-primary" />
            Contact Partenariats
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {partenariatsContacts.map((contact) => (
              <div
                key={contact.service}
                className="bg-background/50 rounded-xl p-6"
              >
                <h3 className="font-semibold text-foreground mb-2">
                  {contact.service}
                </h3>
                <p className="text-sm text-muted-foreground">{contact.email}</p>
                <p className="text-sm text-muted-foreground">{contact.tel}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div
          className="text-center glass rounded-3xl p-12 animate-slide-in"
          style={{ animationDelay: "500ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Devenez partenaire d’OPTIMEL
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rejoignez un réseau d’acteurs engagés pour le progrès du Burkina
            Faso. Ensemble, transformons les défis en opportunités.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Proposer un partenariat
              <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Télécharger la brochure
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
