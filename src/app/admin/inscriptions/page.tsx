"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Mail, Phone, Download } from "lucide-react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

interface Inscription {
  name: string;
  email: string;
  phone: string;
  pole: string;
  formation: string;
  payment: string;
  message?: string;
  date: string;
}

export default function AdminInscriptionsPage() {
  const [inscriptions, setInscriptions] = useState<Inscription[]>([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/inscriptions");
      if (res.ok) {
        const data = await res.json();
        setInscriptions(data);
      }
    };
    fetchData();
  }, []);

  const filteredInscriptions = inscriptions.filter(
    (i) =>
      i.pole.toLowerCase().includes(filter.toLowerCase()) &&
      (i.name.toLowerCase().includes(search.toLowerCase()) ||
        i.formation.toLowerCase().includes(search.toLowerCase()) ||
        i.email.toLowerCase().includes(search.toLowerCase()))
  );

  // 🆕 Fonction d’export Excel
  const handleExportExcel = () => {
    const exportData = filteredInscriptions.map((i) => ({
      Nom: i.name,
      Email: i.email,
      Téléphone: i.phone,
      Pôle: i.pole,
      Formation: i.formation,
      Paiement: i.payment,
      Message: i.message || "",
      Date: new Date(i.date).toLocaleString("fr-FR"),
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Inscriptions");

    const excelBuffer = XLSX.write(workbook, {
      type: "array",
      bookType: "xlsx",
    });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });

    saveAs(
      blob,
      `Inscriptions_OPTIMEL_${new Date().toISOString().slice(0, 10)}.xlsx`
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto glass rounded-3xl p-8 shadow-2xl"
      >
        <h1 className="text-4xl font-bold mb-6 text-center text-gradient">
          Tableau des Inscriptions – OPTIMEL Academy
        </h1>

        {/* 🔍 Barre de recherche, filtre et export */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-3 glass-dark rounded-xl px-4 py-2 w-full md:w-1/2">
            <Search className="text-primary" />
            <input
              type="text"
              placeholder="Rechercher un nom, formation ou email..."
              className="bg-transparent w-full outline-none text-foreground"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 glass-dark rounded-xl px-4 py-2">
              <Filter className="text-primary" />
              <select
                className="bg-transparent outline-none text-foreground"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="">Tous les pôles</option>
                <option value="Stratégie">Stratégie</option>
                <option value="Opérations">Opérations</option>
                <option value="IT">IT</option>
                <option value="Énergie">Énergie</option>
                <option value="BTP">BTP</option>
                <option value="Capability">Capability</option>
              </select>
            </div>

            {/* 🆕 Bouton Export Excel */}
            <button
              onClick={handleExportExcel}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-xl font-semibold hover:bg-accent transition-all hover:scale-105 shadow-lg"
            >
              <Download size={18} />
              Exporter
            </button>
          </div>
        </div>

        {/* 📋 Tableau principal */}
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-muted text-muted-foreground uppercase text-xs">
              <tr>
                <th className="px-4 py-3">Nom</th>
                <th className="px-4 py-3">Pôle</th>
                <th className="px-4 py-3">Formation</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Téléphone</th>
                <th className="px-4 py-3">Paiement</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredInscriptions.length > 0 ? (
                filteredInscriptions.map((i, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-border hover:bg-accent/10 transition-colors"
                  >
                    <td className="px-4 py-3 font-semibold">{i.name}</td>
                    <td className="px-4 py-3">{i.pole}</td>
                    <td className="px-4 py-3">{i.formation}</td>
                    <td className="px-4 py-3 flex items-center gap-2 text-primary">
                      <Mail size={14} /> {i.email}
                    </td>
                    <td className="px-4 py-3 flex items-center gap-2">
                      <Phone size={14} /> {i.phone || "—"}
                    </td>
                    <td className="px-4 py-3">{i.payment}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {new Date(i.date).toLocaleDateString("fr-FR")}
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="text-center py-6 text-muted-foreground"
                  >
                    Aucune inscription trouvée.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
