import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // ✅ dit à Next.js de préparer un site statique
  images: {
    unoptimized: true, // ✅ évite les optimisations serveur inutiles
  },
  trailingSlash: true, // ✅ pour la compatibilité avec LWS
};

export default nextConfig;
