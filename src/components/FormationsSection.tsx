"use client";

import { BookOpen, Users, Clock, Award } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: BookOpen,
    title: "Formations variées",
    description: "Stratégie, IT, Énergie, BTP et plus",
  },
  {
    icon: Users,
    title: "Formateurs experts",
    description: "Professionnels expérimentés",
  },
  {
    icon: Clock,
    title: "Horaires flexibles",
    description: "Adaptés à vos contraintes",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Diplômes reconnus",
  },
];

export default function FormationsSection() {
  return (
    <section id="formations" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="glass rounded-3xl p-8 md:p-16 animate-slide-in">
          {/* === Titre principal === */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              OPTIMEL Academy
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Inscrivez-vous à nos ateliers et formations pour développer vos
              compétences et celles de vos équipes.
            </p>
          </div>

          {/* === Cartes de formation === */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-dark rounded-2xl p-6 text-center hover:scale-105 transition-all"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* === Bouton d'inscription === */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Réservez votre place et payez directement via Orange Money ou Moov
              Money
            </p>

            <Link
              href="#contact"
              className="inline-block bg-primary hover:bg-accent text-primary-foreground px-10 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-xl"
            >
              S&apos;inscrire maintenant
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
