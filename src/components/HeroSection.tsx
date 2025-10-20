"use client";

import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { heroSlides } from "@/constants/heroSlides"; // ✅ import ici

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center pt-20 pb-10 px-4"
    >
      <div className="container mx-auto">
        <div className="glass rounded-3xl p-8 md:p-16 animate-slide-in">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient leading-tight">
              {slide.title}
            </h1>

            <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
              {slide.subtitle}
            </p>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {slide.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#poles"
                className="bg-primary hover:bg-accent text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-xl flex items-center gap-2 group"
              >
                Découvrir nos pôles
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#formations"
                className="glass-dark text-foreground px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-xl"
              >
                Nos formations
              </Link>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-12 bg-primary"
                    : "w-2 bg-muted hover:bg-secondary"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
