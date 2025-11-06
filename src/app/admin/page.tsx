"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, Mail, BarChart3 } from "lucide-react";

export default function AdminDashboard() {
  //   if (prompt("Entrer la clé d’accès:") !== process.env.NEXT_PUBLIC_ADMIN_KEY)
  return null;

  const cards = [
    {
      title: "Inscriptions Academy",
      description:
        "Consultez les inscriptions, gérez les participants et exportez les données en Excel.",
      icon: <GraduationCap className="text-primary" size={40} />,
      href: "/admin/inscriptions",
      color: "from-primary/20 to-accent/20",
    },
    {
      title: "Messages de Contact",
      description:
        "Visualisez les messages reçus via le formulaire de contact et répondez rapidement.",
      icon: <Mail className="text-primary" size={40} />,
      href: "/admin/messages",
      color: "from-green-400/20 to-green-700/20",
    },
    {
      title: "Statistiques",
      description:
        "Analysez les inscriptions, les pôles les plus actifs et la progression des formations.",
      icon: <BarChart3 className="text-primary" size={40} />,
      href: "/admin/stats",
      color: "from-blue-400/20 to-blue-700/20",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-4">
          Tableau de Bord OPTIMEL
        </h1>
        <p className="text-center text-muted-foreground mb-16">
          Gérez les inscriptions, les messages et suivez les statistiques de
          votre plateforme.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <Link href={card.href}>
                <div
                  className={`rounded-3xl glass hover:scale-[1.03] transition-transform duration-300 p-8 flex flex-col items-center text-center bg-gradient-to-br ${card.color}`}
                >
                  <div className="mb-6">{card.icon}</div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {card.description}
                  </p>
                  <span className="text-primary font-semibold">Accéder →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Signature */}
        <div className="text-center mt-20 text-muted-foreground text-sm">
          © {new Date().getFullYear()} OPTIMEL Solutions Group SA — by{" "}
          <Link
            href="https://meltech.tech"
            className="text-primary hover:underline"
          >
            Meltech
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
