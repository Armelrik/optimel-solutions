import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Champs manquants." }), {
        status: 400,
      });
    }

    console.log("Mail user:", process.env.MAIL_USER);
    console.log(
      "Mail pass:",
      process.env.MAIL_PASS ? "✔️ défini" : "❌ manquant"
    );

    // ✅ Transporteur SMTP (Gmail ou autre)
    const transporter = nodemailer.createTransport({
      service: "gmail", // ou ton fournisseur SMTP (Mailgun, Outlook, etc.)
      secure: false, // STARTTLS sur port 587
      auth: {
        user: process.env.MAIL_USER, // ton adresse mail
        pass: process.env.MAIL_PASS, // mot de passe / App Password
      },
    });

    // ✅ Email à envoyer
    await transporter.sendMail({
      from: `"OPTIMEL Contact" <${process.env.MAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER || process.env.MAIL_USER,
      subject: `📩 Nouveau message de ${name}`,
      html: `
        <div style="font-family:sans-serif;">
          <h2>Nouveau message depuis le site OPTIMEL</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
          <p><strong>Message :</strong></p>
          <p style="white-space:pre-line;">${message}</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return new Response(JSON.stringify({ error: "Erreur serveur." }), {
      status: 500,
    });
  }
}
