"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pole: "",
    formation: "",
    payment: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        toast({
          title: "✅ Inscription réussie",
          description: "Votre inscription a bien été enregistrée !",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          pole: "",
          formation: "",
          payment: "",
          message: "",
        });
      } else {
        toast({
          title: "❌ Erreur",
          description: result.error || "Impossible d'envoyer l'inscription.",
        });
      }
    } catch (err) {
      toast({
        title: "❌ Erreur serveur",
        description: "Vérifiez votre connexion internet.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass rounded-3xl p-8 md:p-12 space-y-6 max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center text-foreground">
        Formulaire d'inscription
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nom complet"
          className="glass-dark w-full px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="glass-dark w-full px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Téléphone"
          className="glass-dark w-full px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary"
        />
        <select
          name="pole"
          value={formData.pole}
          onChange={handleChange}
          className="glass-dark w-full px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary"
          required
        >
          <option value="">Choisir un pôle</option>
          <option value="Stratégie">Stratégie</option>
          <option value="Opérations">Opérations</option>
          <option value="IT">IT</option>
          <option value="Énergie">Énergie</option>
          <option value="BTP">BTP</option>
          <option value="Capability">Capability</option>
        </select>
      </div>

      <input
        type="text"
        name="formation"
        value={formData.formation}
        onChange={handleChange}
        placeholder="Nom de la formation"
        className="glass-dark w-full px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary"
        required
      />

      <select
        name="payment"
        value={formData.payment}
        onChange={handleChange}
        className="glass-dark w-full px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary"
        required
      >
        <option value="">Mode de paiement</option>
        <option value="Orange Money">Orange Money</option>
        <option value="Moov Money">Moov Money</option>
        <option value="Wave">Wave</option>
      </select>

      <textarea
        name="message"
        rows={4}
        value={formData.message}
        onChange={handleChange}
        placeholder="Message ou note (optionnel)"
        className="glass-dark w-full px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary resize-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary hover:bg-accent text-primary-foreground px-6 py-4 rounded-xl font-semibold transition-all hover:scale-105 shadow-xl"
      >
        {loading ? "Envoi..." : "Envoyer l'inscription"}
      </button>
    </motion.form>
  );
}
