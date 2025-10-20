# 🌍 OPTIMEL Solutions Group SA

> **Des solutions intégrées pour bâtir l’avenir du Burkina Faso.**  
> Plateforme web officielle d’OPTIMEL Solutions Group — développée par **Armel Kima (Meltech)**.

---

## 📖 Sommaire

1. [Aperçu](#-aperçu)
2. [Stack technique](#-stack-technique)
3. [Structure du projet](#-structure-du-projet)
4. [Installation et exécution](#-installation-et-exécution)
5. [Configuration de l’envoi d’emails (contact)](#-configuration-de-lenvoi-demails-contact)
6. [Scripts disponibles](#-scripts-disponibles)
7. [Fonctionnalités principales](#-fonctionnalités-principales)
8. [Déploiement](#-déploiement)
9. [Crédits & Auteur](#-crédits--auteur)

---

## 🚀 Aperçu

OPTIMEL Solutions Group SA est une plateforme web vitrine présentant les pôles d’expertise du groupe OPTIMEL :

- **Stratégie**, **Opérations**, **IT**, **Énergie**, **BTP** et **Capability**.
- Chaque pôle dispose d’une page dédiée avec ses services et domaines d’intervention.
- Le site inclut une section **Academy** (formations professionnelles), une section **Contact**, et un **formulaire fonctionnel** avec envoi de mail via **Nodemailer**.
- Le design repose sur une esthétique **“glassmorphique”**, animée et responsive, avec **mode clair/sombre dynamique**.

---

## 🧠 Stack technique

| Technologie           | Rôle                                                 |
| --------------------- | ---------------------------------------------------- |
| ⚡ **Next.js 15**     | Framework React moderne (App Router, Server Actions) |
| ⚛️ **React 19**       | Interface déclarative et performante                 |
| 🟦 **TypeScript**     | Typage statique robuste                              |
| 🎨 **TailwindCSS v4** | Système de design ultra-personnalisé                 |
| 🎞️ **Framer Motion**  | Animations fluides et interactives                   |
| 🔷 **Lucide React**   | Icônes légères et personnalisables                   |
| 📬 **Nodemailer**     | Envoi d’e-mails côté serveur (formulaire de contact) |

---

## 🧱 Structure du projet

```bash
src/
├── app/
│   ├── page.tsx                  # Page d'accueil principale
│   ├── layout.tsx                # Layout global (Header + Footer)
│   ├── api/
│   │   └── contact/route.ts      # API d’envoi d’e-mails via Nodemailer
│   ├── strategie/
│   ├── operations/
│   ├── it/
│   ├── energie/
│   ├── btp/
│   ├── capability/
│   └── academy/
│       └── page.tsx              # Catalogue de formations
│
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   ├── BackToTopButton.tsx
│   ├── AnimatedLogo.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── PolesSection.tsx
│   │   └── ContactSection.tsx
│
├── constants/
│   └── academy.ts                # Catalogue des formations (constantes)
│
├── hooks/
│   ├── use-toast.ts
│   └── use-mobile.tsx
│
├── public/
│   └── assets/
│       └── optimel-logo.png
│
└── styles/
    └── globals.css               # Thème + animations + mode sombre
```

````

---

## ⚙️ Installation et exécution

### 1️⃣ Cloner le projet

```bash
git clone https://github.com/meltech/optimel-solutions.git
cd optimel-solutions
```

### 2️⃣ Installer les dépendances

```bash
npm install
```

### 3️⃣ Démarrer le serveur local

```bash
npm run dev
```

L’application sera accessible sur 👉 **[http://localhost:3000](http://localhost:3000)**

---

## 📧 Configuration de l’envoi d’emails (contact)

### 1️⃣ Créer un fichier `.env.local`

```bash
MAIL_USER="ton.email@gmail.com"
MAIL_PASS="mot_de_passe_application"
CONTACT_RECEIVER="destinataire@optimel.bf"
```

💡 **Pour Gmail** :
Crée un mot de passe d’application via
👉 [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)

### 2️⃣ Vérifier la route API

`src/app/api/contact/route.ts` — Cette route reçoit les données du formulaire
et envoie un email formaté via **Nodemailer**.

---

## 🧰 Scripts disponibles

| Commande        | Description                                    |
| --------------- | ---------------------------------------------- |
| `npm run dev`   | Lance le serveur Next.js en mode développement |
| `npm run build` | Compile le projet pour la production           |
| `npm start`     | Démarre le serveur de production               |
| `npm run lint`  | Analyse et corrige les erreurs de code         |

---

## 🌟 Fonctionnalités principales

✅ Pages dynamiques pour chaque pôle
✅ Section **Academy** avec formations et inscriptions
✅ Formulaire de contact avec envoi d’e-mails via **Nodemailer**
✅ Mode **sombre / clair** intelligent
✅ **Effet glassmorphism** sur tout le design
✅ Bouton “Retour en haut” (scroll smooth)
✅ Navigation fluide et responsive
✅ Animations légères et transitions naturelles

---

## 🚀 Déploiement

### 🔹 Sur **Vercel**

```bash
vercel deploy
```

### 🔹 Sur **VPS LWS / Ubuntu**

```bash
npm run build
npm run start
```

Puis configurer ton reverse proxy (Nginx / Apache) vers le port `3000`.

---

## 👨‍💻 Crédits & Auteur

Développé avec ❤️ par **[Armel Kima](https://www.linkedin.com/in/armelkima/)**
**Data Engineer • Web Developer • Fondateur de Meltech**

> _“Mettre vos idées en lumière.”_

---

## 📄 Licence

Ce projet est protégé et appartient à **OPTIMEL Solutions Group SA**.
Toute reproduction, utilisation commerciale ou redistribution non autorisée est interdite.
````
