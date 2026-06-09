import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "react-email";
import ClientConfirmation from "@/app/emails/ClientConfirmation";
import OwnerNotification from "@/app/emails/OwnerNotification";

const resend = new Resend(process.env.RESEND_API_KEY);

const OWNER_EMAIL = process.env.OWNER_EMAIL!;
const FROM_EMAIL = process.env.FROM_EMAIL!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // Validation basique
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { error: "Le message ne peut pas dépasser 2000 caractères." },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toLocaleString("fr-FR", {
      timeZone: "Europe/Paris",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Rendu HTML des templates
    const clientHtml = await render(
      ClientConfirmation({ name })
    );
    const ownerHtml = await render(
      OwnerNotification({ name, email, phone, message, submittedAt })
    );

    // Envoi en parallèle des deux emails
    const [clientEmail, ownerEmail] = await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        subject: "Votre demande de contact a bien été reçue",
        html: clientHtml,
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: [OWNER_EMAIL],
        subject: `Nouvelle demande de contact — ${name}`,
        html: ownerHtml,
      }),
    ]);

    if (clientEmail.error || ownerEmail.error) {
      console.error("Resend errors:", clientEmail.error, ownerEmail.error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Une erreur inattendue s'est produite." },
      { status: 500 }
    );
  }
}