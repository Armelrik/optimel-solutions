"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Initialisation du thème
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initial =
      (stored as "light" | "dark") || (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  // Basculer le thème
  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.body.classList.add("theme-transitioning");
    setTimeout(
      () => document.body.classList.remove("theme-transitioning"),
      600
    );

    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label="Basculer le thème"
      whileTap={{ scale: 0.9 }}
      className="
        relative flex items-center justify-center
        w-11 h-11 rounded-full
        bg-primary/10 dark:bg-white/10
        border border-border backdrop-blur-xl
        shadow-lg hover:shadow-xl
        transition-all duration-500
      "
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 180, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sun className="text-yellow-300" size={22} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -180, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Moon className="text-primary" size={22} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* halo animé */}
      <span
        className={`absolute inset-0 rounded-full blur-lg transition-opacity duration-700 ${
          theme === "dark" ? "bg-yellow-300/30" : "bg-primary/30"
        }`}
      />
    </motion.button>
  );
}
