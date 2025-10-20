export interface Formation {
  titre: string;
  duree: string;
  tarif: string;
  places: string;
}

export const formations: Record<string, Formation[]> = {
  strategie: [
    {
      titre: "Planification Stratégique",
      duree: "3 jours",
      tarif: "150,000 FCFA",
      places: "15",
    },
    {
      titre: "Gestion de Projets Publics",
      duree: "5 jours",
      tarif: "250,000 FCFA",
      places: "20",
    },
    {
      titre: "Risques Stratégique",
      duree: "2 jours",
      tarif: "100,000 FCFA",
      places: "17",
    },
    {
      titre: "Gestion de Projets Privés",
      duree: "5 jours",
      tarif: "250,000 FCFA",
      places: "28",
    },
  ],
  operations: [
    {
      titre: "Amélioration Continue & Lean",
      duree: "4 jours",
      tarif: "200,000 FCFA",
      places: "15",
    },
    {
      titre: "Certification ISO 9001",
      duree: "6 jours",
      tarif: "300,000 FCFA",
      places: "12",
    },
    {
      titre: "Certification ISO 800",
      duree: "5 jours",
      tarif: "200,000 FCFA",
      places: "19",
    },
  ],
  it: [
    {
      titre: "Développement Web React",
      duree: "8 semaines",
      tarif: "400,000 FCFA",
      places: "25",
    },
    {
      titre: "Cybersécurité Fondamentale",
      duree: "2 semaines",
      tarif: "300,000 FCFA",
      places: "20",
    },
  ],
  energie: [
    {
      titre: "Installation Solaire PV",
      duree: "1 semaine",
      tarif: "180,000 FCFA",
      places: "15",
    },
    {
      titre: "Dimensionnement de Systèmes Solaires",
      duree: "3 jours",
      tarif: "150,000 FCFA",
      places: "18",
    },
  ],
  btp: [
    {
      titre: "Conduite de Travaux BTP",
      duree: "2 semaines",
      tarif: "280,000 FCFA",
      places: "15",
    },
    {
      titre: "Construction Durable",
      duree: "1 semaine",
      tarif: "200,000 FCFA",
      places: "20",
    },
  ],
  management: [
    {
      titre: "Leadership & Management",
      duree: "5 jours",
      tarif: "250,000 FCFA",
      places: "20",
    },
    {
      titre: "Gestion d'Équipe",
      duree: "3 jours",
      tarif: "180,000 FCFA",
      places: "25",
    },
  ],
};
