"use client";

import { ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";

interface PoleCardProps {
  icon: LucideIcon;
  title: string;
  slogan: string;
  description: string;
  services: string[];
  cta: string;
  delay?: number;
}

export default function PoleCard({
  icon: Icon,
  title,
  slogan,
  description,
  services,
  cta,
  delay = 0,
}: PoleCardProps) {
  return (
    <div
      className="glass rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 animate-slide-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* ==== Header ==== */}
      <div className="flex items-start gap-4 mb-6">
        <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-2xl text-primary-foreground animate-float">
          <Icon size={32} />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-lg text-primary italic">{slogan}</p>
        </div>
      </div>

      {/* ==== Description ==== */}
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      {/* ==== Liste des services ==== */}
      <div className="mb-6">
        <h4 className="font-semibold text-foreground mb-3">Nos services :</h4>
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-muted-foreground"
            >
              <span className="text-primary mt-1">•</span>
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ==== Bouton CTA ==== */}
      <Link
        href="#formations"
        className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold group transition-colors"
      >
        {cta}
        <ArrowRight
          className="group-hover:translate-x-1 transition-transform"
          size={20}
        />
      </Link>
    </div>
  );
}
