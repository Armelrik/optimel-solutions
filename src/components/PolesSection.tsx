"use client";

import PoleCard from "@/components/PoleCard";
import {
  Target,
  Settings,
  Laptop,
  Zap,
  Building2,
  GraduationCap,
} from "lucide-react";

export default function PolesSection() {
  const poles = [
    {
      icon: Target,
      title: "OPTIMEL Stratégie Solutions",
      slogan: "Donner une vision claire aux décideurs",
      description:
        "Nous accompagnons les institutions publiques, les entreprises et les collectivités du Burkina Faso dans la définition et la mise en œuvre de stratégies efficaces adaptées aux réalités locales.",
      services: [
        "Conseil en stratégie nationale, sectorielle et institutionnelle",
        "Appui aux communes pour le développement local",
        "Études économiques et analyses de marché",
        "Accompagnement à la transformation digitale des services publics",
      ],
      cta: "Participer à nos ateliers de planification stratégique",
    },
    {
      icon: Settings,
      title: "OPTIMEL Operations Solutions",
      slogan: "Des organisations performantes pour un impact durable",
      description:
        "Nous aidons les entreprises et les institutions burkinabè à améliorer leurs processus, réduire leurs coûts et maximiser leur performance.",
      services: [
        "Audit organisationnel et optimisation des processus",
        "Mise en place de systèmes qualité",
        "Conseil en supply chain et logistique",
        "Solutions de suivi-évaluation de projets",
      ],
      cta: "S'inscrire à nos ateliers en gestion de la qualité",
    },
    {
      icon: Laptop,
      title: "OPTIMEL IT Solutions",
      slogan: "Le numérique au service du développement",
      description:
        "Nous concevons et déployons des solutions numériques adaptées aux réalités du Burkina Faso pour rendre la technologie accessible et utile.",
      services: [
        "Développement d'applications web et mobiles",
        "Cybersécurité et hébergement local",
        "Digitalisation des services publics",
        "Formations en programmation et data",
      ],
      cta: "Découvrir nos formations digitales",
    },
    {
      icon: Zap,
      title: "OPTIMEL Energy Solutions",
      slogan: "Éclairer le Burkina, durablement",
      description:
        "Nous développons des solutions énergétiques innovantes pour soutenir la transition vers des énergies propres et améliorer l'accès à l'électricité.",
      services: [
        "Études et installation de systèmes solaires photovoltaïques",
        "Conseil en efficacité énergétique",
        "Partenariats public-privé pour électrification rurale",
        "Maintenance et gestion de centrales solaires",
      ],
      cta: "S'inscrire à nos ateliers énergie solaire",
    },
    {
      icon: Building2,
      title: "OPTIMEL BTP Solutions",
      slogan: "Construire aujourd'hui, pour demain",
      description:
        "Nous répondons aux besoins en infrastructures durables au Burkina Faso avec un souci de qualité, de sécurité et de respect de l'environnement.",
      services: [
        "Construction de bâtiments publics et privés",
        "Travaux publics et infrastructures routières",
        "Promotion immobilière et logements abordables",
        "Conseil en construction durable",
      ],
      cta: "Demander un devis pour vos projets BTP",
    },
    {
      icon: GraduationCap,
      title: "OPTIMEL Capability Solutions",
      slogan: "Former et inspirer les leaders de demain",
      description:
        "Nous sommes dédiés au renforcement des compétences au Burkina Faso. Le capital humain est la première richesse d'une nation.",
      services: [
        "Formations professionnelles continues",
        "Coaching en leadership et management",
        "Développement des compétences techniques",
        "Programmes e-learning et MOOCs locaux",
      ],
      cta: "S'inscrire à nos formations",
    },
  ];

  return (
    <section id="poles" className="py-20 px-4">
      <div className="container mx-auto">
        {/* === Header === */}
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Nos Pôles d&apos;Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Six pôles spécialisés pour accompagner votre transformation et votre
            développement
          </p>
        </div>

        {/* === Grid de pôles === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {poles.map((pole, index) => (
            <PoleCard key={pole.title} {...pole} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
