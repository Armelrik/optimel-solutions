import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data.name || !data.email || !data.pole || !data.formation)
      return new Response(
        JSON.stringify({ error: "Champs obligatoires manquants." }),
        { status: 400 }
      );

    const newEntry = { ...data, date: new Date().toISOString() };

    // 🧾 Enregistrement local
    const filePath = path.join(
      process.cwd(),
      "src/constants/inscriptions.json"
    );
    const fileData = await fs.readFile(filePath, "utf8");
    const inscriptions = fileData ? JSON.parse(fileData) : [];
    inscriptions.push(newEntry);
    await fs.writeFile(filePath, JSON.stringify(inscriptions, null, 2), "utf8");

    // ✉️ Envoi email de notification
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"OPTIMEL Academy" <${process.env.MAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER || process.env.MAIL_USER,
      subject: `📝 Nouvelle inscription – ${data.name}`,
      html: `
        <h3>Nouvelle inscription reçue</h3>
        <p><strong>Nom :</strong> ${data.name}</p>
        <p><strong>Email :</strong> ${data.email}</p>
        <p><strong>Téléphone :</strong> ${data.phone || "N/A"}</p>
        <p><strong>Pôle :</strong> ${data.pole}</p>
        <p><strong>Formation :</strong> ${data.formation}</p>
        <p><strong>Paiement :</strong> ${data.payment}</p>
        <p><strong>Message :</strong> ${data.message || "Aucun"}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Erreur inscription:", error);
    return new Response(JSON.stringify({ error: "Erreur serveur." }), {
      status: 500,
    });
  }
}
