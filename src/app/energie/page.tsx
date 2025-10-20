// "use client";

import { Zap, CheckCircle2, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  energyServices,
  energySolutions,
  energyImpact,
  energyPartners,
  energyBenefits,
} from "@/constants/energy";

export const metadata = {
  title: "OPTIMEL Energy Solutions – Éclairer le Burkina, durablement",
  description:
    "Solutions solaires et énergétiques pour particuliers, entreprises et collectivités au Burkina Faso.",
};

export default function EnergyPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-2xl text-primary-foreground">
              <Zap size={48} />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4">
            OPTIMEL Energy Solutions
          </h1>
          <p className="text-2xl text-primary italic mb-6">
            "Éclairer le Burkina, durablement."
          </p>
        </div>

        {/* Introduction */}
        <section className="glass rounded-3xl p-8 mb-8 animate-slide-in">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Pourquoi l'énergie propre est notre priorité ?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            L'accès à une énergie fiable, abordable et durable est un pilier
            fondamental du développement économique et social. Le Burkina Faso
            dispose d'un potentiel solaire exceptionnel qui reste largement
            inexploité. OPTIMEL Energy Solutions développe des solutions
            énergétiques innovantes pour soutenir la transition vers des
            énergies propres et renouvelables.
          </p>
        </section>

        {/* Services */}
        <section
          className="glass rounded-3xl p-8 mb-8 animate-slide-in"
          style={{ animationDelay: "100ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Nos Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {energyServices.map((s) => (
              <div key={s.title} className="flex items-start gap-4">
                <CheckCircle2
                  className="text-primary mt-1 flex-shrink-0"
                  size={24}
                />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Solutions */}
        <section
          className="glass rounded-3xl p-8 mb-8 animate-slide-in"
          style={{ animationDelay: "200ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Nos Solutions Énergétiques
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {energySolutions.map((cat) => (
              <div
                key={cat.title}
                className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6"
              >
                <h3 className="font-bold text-foreground mb-3">{cat.title}</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {cat.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Impact */}
        <section
          className="glass rounded-3xl p-8 mb-8 animate-slide-in"
          style={{ animationDelay: "250ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Impact et Réalisations
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {energyImpact.map((imp) => (
              <div
                key={imp.title}
                className="bg-background/50 rounded-xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {imp.value}
                </div>
                <p className="text-foreground font-semibold">{imp.title}</p>
                <p className="text-sm text-muted-foreground mt-2">{imp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partenariats */}
        <section
          className="glass rounded-3xl p-8 mb-8 animate-slide-in"
          style={{ animationDelay: "300ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Users className="text-primary" />
            Partenariats Stratégiques
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {energyPartners.map((p) => (
              <div key={p} className="bg-background/50 rounded-xl p-4">
                <p className="font-semibold text-foreground">{p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bénéfices */}
        <section
          className="glass rounded-3xl p-8 mb-8 animate-slide-in"
          style={{ animationDelay: "400ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Bénéfices Attendus
          </h2>
          <ul className="space-y-3">
            {energyBenefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-muted-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div
          className="text-center glass rounded-3xl p-12 animate-slide-in"
          style={{ animationDelay: "500ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Passez à l'énergie solaire
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Demander une étude gratuite
              <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              S'inscrire aux ateliers énergie solaire
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
