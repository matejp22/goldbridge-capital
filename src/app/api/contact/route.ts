import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  financingAmount?: unknown;
  goldValue?: unknown;
  goldAmount?: unknown;
  goldLocation?: unknown;
  purpose?: unknown;
  ownershipConfirmed?: unknown;
  privacyConfirmed?: unknown;
  website?: unknown;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          error:
            "Preveč zahtev. Pred ponovnim poskusom počakajte nekaj minut.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(
              Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)
            ),
          },
        }
      );
    }

    const contentType = request.headers.get("content-type") || "";

    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Neveljavna oblika zahteve." },
        { status: 415 }
      );
    }

    const body = (await request.json()) as ContactPayload;

    const website = normaliseText(body.website, 200);

    /*
     * Honeypot:
     * običajni uporabniki tega polja ne vidijo in ga pustijo praznega.
     * Če ga avtomatiziran bot izpolni, zahtevo tiho zavrnemo.
     */
    if (website) {
      return NextResponse.json({
        success: true,
      });
    }

    const name = normaliseText(body.name, 120);
    const company = normaliseText(body.company, 160);
    const email = normaliseText(body.email, 254).toLowerCase();
    const phone = normaliseText(body.phone, 60);
    const financingAmount = normaliseText(
      body.financingAmount,
      100
    );
    const goldValue = normaliseText(body.goldValue, 100);
    const goldAmount = normaliseText(body.goldAmount, 120);
    const goldLocation = normaliseText(body.goldLocation, 180);
    const purpose = normaliseText(body.purpose, 5000);

    const ownershipConfirmed =
      body.ownershipConfirmed === true;

    const privacyConfirmed =
      body.privacyConfirmed === true;

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

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "E-poštni naslov ni veljaven." },
        { status: 400 }
      );
    }

    if (name.length < 2) {
      return NextResponse.json(
        { error: "Ime je prekratko." },
        { status: 400 }
      );
    }

    if (purpose.length < 20) {
      return NextResponse.json(
        {
          error:
            "Opis povpraševanja mora vsebovati najmanj 20 znakov.",
        },
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
      console.error("CONTACT_TO_EMAIL is not configured.");

      return NextResponse.json(
        { error: "Kontaktna storitev trenutno ni na voljo." },
        { status: 500 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured.");

      return NextResponse.json(
        { error: "Kontaktna storitev trenutno ni na voljo." },
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
          <p><strong>Podjetje:</strong> ${escapeHtml(
            company || "Ni navedeno"
          )}</p>
          <p><strong>E-pošta:</strong> ${escapeHtml(email)}</p>
          <p><strong>Telefon:</strong> ${escapeHtml(
            phone || "Ni naveden"
          )}</p>

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

          <p><strong>Lokacija zlata:</strong> ${escapeHtml(
            goldLocation
          )}</p>

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

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return (
    request.headers.get("x-real-ip")?.trim() ||
    request.headers.get("cf-connecting-ip")?.trim() ||
    "unknown"
  );
}

function isRateLimited(identifier: string) {
  const now = Date.now();
  const existingEntry = rateLimitStore.get(identifier);

  if (!existingEntry || existingEntry.resetAt <= now) {
    rateLimitStore.set(identifier, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });

    return false;
  }

  if (existingEntry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  existingEntry.count += 1;
  rateLimitStore.set(identifier, existingEntry);

  return false;
}

function normaliseText(value: unknown, maximumLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maximumLength);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}