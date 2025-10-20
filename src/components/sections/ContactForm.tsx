"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message envoyé avec succès ✅");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Erreur lors de l’envoi ❌");
      }
    } catch {
      setStatus("Erreur réseau ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        type="text"
        placeholder="Nom complet"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-xl glass-dark border-0 focus:ring-2 focus:ring-primary transition-all"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-xl glass-dark border-0 focus:ring-2 focus:ring-primary transition-all"
      />
      <input
        name="phone"
        type="tel"
        placeholder="Téléphone"
        value={form.phone}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl glass-dark border-0 focus:ring-2 focus:ring-primary transition-all"
      />
      <textarea
        name="message"
        rows={4}
        placeholder="Votre message..."
        value={form.message}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-xl glass-dark border-0 focus:ring-2 focus:ring-primary transition-all resize-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary hover:bg-accent text-primary-foreground px-6 py-4 rounded-xl font-semibold transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-2"
      >
        <Send size={20} />
        {loading ? "Envoi en cours..." : "Envoyer le message"}
      </button>

      {status && (
        <p
          className={`text-center mt-3 font-semibold ${
            status.includes("succès") ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
}
