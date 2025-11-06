"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";

interface Message {
  name: string;
  email: string;
  phone?: string;
  message: string;
  date: string;
}

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/messages");
      if (res.ok) {
        const data = await res.json();
        setMessages(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto glass rounded-3xl p-8 shadow-2xl"
      >
        <h1 className="text-4xl font-bold mb-6 text-center text-gradient">
          Messages de Contact
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Consultez les messages envoyés depuis le formulaire de contact du
          site.
        </p>

        <div className="space-y-6">
          {messages.length === 0 ? (
            <p className="text-center text-muted-foreground">
              Aucun message reçu pour l’instant.
            </p>
          ) : (
            messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass-dark rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <User size={18} className="text-primary" /> {msg.name}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {new Date(msg.date).toLocaleString("fr-FR")}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  <Mail size={14} className="inline mr-2 text-primary" />
                  {msg.email}
                  {msg.phone && (
                    <>
                      {" "}
                      | <MessageSquare size={14} className="inline mx-1" />{" "}
                      {msg.phone}
                    </>
                  )}
                </p>
                <p className="text-foreground text-sm leading-relaxed whitespace-pre-line">
                  {msg.message}
                </p>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
}
