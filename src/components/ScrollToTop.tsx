"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Détection du scroll
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Retour en haut fluide
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 50 }}
          transition={{ duration: 0.4 }}
          className="
            fixed bottom-6 right-6 z-50
            p-4 rounded-full
            bg-primary/80 dark:bg-accent/80
            text-primary-foreground backdrop-blur-xl
            shadow-lg hover:shadow-xl
            border border-border
            hover:scale-110 transition-all
          "
          aria-label="Retour en haut"
        >
          <ArrowUp size={22} />
          <span className="absolute inset-0 rounded-full blur-xl bg-primary/30 dark:bg-accent/30 -z-10"></span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
