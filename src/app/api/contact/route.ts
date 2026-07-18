import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      company,
      email,
      phone,
      financingAmount,
      goldValue,
      goldAmount,
      goldLocation,
      purpose,
      ownershipConfirmed,
      privacyConfirmed,
    } = body;

    if (
      !name ||
      !email ||
      !financingAmount ||
      !goldValue ||
      !goldLocation ||
      !purpose
    ) {
      return NextResponse.json(
        { error: "Manjkajo obvezni podatki." },
        { status: 400 }
      );
    }

    if (!ownershipConfirmed || !privacyConfirmed) {
      return NextResponse.json(
        { error: "Potrebni sta obe potrditvi." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_TO_EMAIL;

    if (!recipientEmail) {
      return NextResponse.json(
        { error: "Prejemni e-poštni naslov ni nastavljen." },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Gold Bridge Capital <onboarding@resend.dev>",
      to: [recipientEmail],
      replyTo: email,
      subject: `Novo povpraševanje – ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
          <h1 style="font-size: 24px;">Novo zaupno povpraševanje</h1>

          <p><strong>Ime in priimek:</strong> ${escapeHtml(name)}</p>
          <p><strong>Podjetje:</strong> ${escapeHtml(company || "Ni navedeno")}</p>
          <p><strong>E-pošta:</strong> ${escapeHtml(email)}</p>
          <p><strong>Telefon:</strong> ${escapeHtml(phone || "Ni naveden")}</p>

          <hr style="margin: 24px 0; border: 0; border-top: 1px solid #dddddd;" />

          <p><strong>Želeni znesek financiranja:</strong> ${escapeHtml(
            financingAmount
          )}</p>

          <p><strong>Ocenjena vrednost zlata:</strong> ${escapeHtml(
            goldValue
          )}</p>

          <p><strong>Količina zlata:</strong> ${escapeHtml(
            goldAmount || "Ni navedena"
          )}</p>

          <p><strong>Lokacija zlata:</strong> ${escapeHtml(goldLocation)}</p>

          <p><strong>Namen financiranja:</strong></p>
          <p>${escapeHtml(purpose).replace(/\n/g, "<br />")}</p>

          <hr style="margin: 24px 0; border: 0; border-top: 1px solid #dddddd;" />

          <p><strong>Lastništvo potrjeno:</strong> Da</p>
          <p><strong>Soglasje za obdelavo podatkov:</strong> Da</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "E-pošte ni bilo mogoče poslati." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Prišlo je do napake pri obdelavi povpraševanja." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}