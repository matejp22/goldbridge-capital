import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type SupportedLocale = "en" | "de" | "it";

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
  locale?: unknown;
};

type ErrorMessages = {
  rateLimit: string;
  invalidRequest: string;
  requiredFields: string;
  invalidEmail: string;
  shortName: string;
  shortPurpose: string;
  confirmations: string;
  unavailable: string;
  emailFailed: string;
  unexpected: string;
};

const messages: Record<SupportedLocale, ErrorMessages> = {
  en: {
    rateLimit:
      "Too many requests. Please wait a few minutes before trying again.",
    invalidRequest: "Invalid request format.",
    requiredFields: "Please complete all required fields.",
    invalidEmail: "Please enter a valid email address.",
    shortName: "The name entered is too short.",
    shortPurpose:
      "The inquiry description must contain at least 20 characters.",
    confirmations:
      "Both confirmations are required.",
    unavailable:
      "The contact service is currently unavailable.",
    emailFailed:
      "The inquiry could not be sent. Please try again.",
    unexpected:
      "An error occurred while processing your inquiry.",
  },

  de: {
    rateLimit:
      "Zu viele Anfragen. Bitte warten Sie einige Minuten, bevor Sie es erneut versuchen.",
    invalidRequest: "Ungültiges Anfrageformat.",
    requiredFields:
      "Bitte füllen Sie alle Pflichtfelder aus.",
    invalidEmail:
      "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    shortName: "Der eingegebene Name ist zu kurz.",
    shortPurpose:
      "Die Beschreibung der Anfrage muss mindestens 20 Zeichen enthalten.",
    confirmations:
      "Beide Bestätigungen sind erforderlich.",
    unavailable:
      "Der Kontaktservice ist derzeit nicht verfügbar.",
    emailFailed:
      "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
    unexpected:
      "Bei der Verarbeitung Ihrer Anfrage ist ein Fehler aufgetreten.",
  },

  it: {
    rateLimit:
      "Troppe richieste. Attendi alcuni minuti prima di riprovare.",
    invalidRequest: "Formato della richiesta non valido.",
    requiredFields:
      "Compila tutti i campi obbligatori.",
    invalidEmail:
      "Inserisci un indirizzo e-mail valido.",
    shortName: "Il nome inserito è troppo breve.",
    shortPurpose:
      "La descrizione della richiesta deve contenere almeno 20 caratteri.",
    confirmations:
      "Sono necessarie entrambe le conferme.",
    unavailable:
      "Il servizio di contatto non è attualmente disponibile.",
    emailFailed:
      "Non è stato possibile inviare la richiesta. Riprova.",
    unexpected:
      "Si è verificato un errore durante l’elaborazione della richiesta.",
  },
};

const rateLimitStore = new Map<string, RateLimitEntry>();

export async function POST(request: Request) {
  let locale: SupportedLocale = "en";
  let t = messages.en;

  try {
    const clientIp = getClientIp(request);

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          error: t.rateLimit,
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

    const contentType =
      request.headers.get("content-type") || "";

    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { error: t.invalidRequest },
        { status: 415 }
      );
    }

    const body = (await request.json()) as ContactPayload;

    locale = getSupportedLocale(body.locale);
    t = messages[locale];

    const website = normaliseText(body.website, 200);

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
    const goldLocation = normaliseText(
      body.goldLocation,
      180
    );
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
        { error: t.requiredFields },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: t.invalidEmail },
        { status: 400 }
      );
    }

    if (name.length < 2) {
      return NextResponse.json(
        { error: t.shortName },
        { status: 400 }
      );
    }

    if (purpose.length < 20) {
      return NextResponse.json(
        { error: t.shortPurpose },
        { status: 400 }
      );
    }

    if (!ownershipConfirmed || !privacyConfirmed) {
      return NextResponse.json(
        { error: t.confirmations },
        { status: 400 }
      );
    }

    const recipientEmail =
      process.env.CONTACT_TO_EMAIL;

    if (!recipientEmail) {
      console.error(
        "CONTACT_TO_EMAIL is not configured."
      );

      return NextResponse.json(
        { error: t.unavailable },
        { status: 500 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error(
        "RESEND_API_KEY is not configured."
      );

      return NextResponse.json(
        { error: t.unavailable },
        { status: 500 }
      );
    }

    const { data, error } =
      await resend.emails.send({
        from:
          "Gold Bridge Capital <inquiries@goldbridge-capital.com>",
        to: [recipientEmail],
        replyTo: email,
        subject: `New financing inquiry – ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
            <h1 style="font-size: 24px;">New confidential inquiry</h1>

            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Company:</strong> ${escapeHtml(
              company || "Not provided"
            )}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(
              phone || "Not provided"
            )}</p>

            <hr style="margin: 24px 0; border: 0; border-top: 1px solid #dddddd;" />

            <p><strong>Requested financing amount:</strong> ${escapeHtml(
              financingAmount
            )}</p>

            <p><strong>Estimated gold value:</strong> ${escapeHtml(
              goldValue
            )}</p>

            <p><strong>Gold quantity:</strong> ${escapeHtml(
              goldAmount || "Not provided"
            )}</p>

            <p><strong>Gold location:</strong> ${escapeHtml(
              goldLocation
            )}</p>

            <p><strong>Financing purpose:</strong></p>
            <p>${escapeHtml(purpose).replace(
              /\n/g,
              "<br />"
            )}</p>

            <hr style="margin: 24px 0; border: 0; border-top: 1px solid #dddddd;" />

            <p><strong>Ownership confirmed:</strong> Yes</p>
            <p><strong>Privacy consent confirmed:</strong> Yes</p>
            <p><strong>Submitted language:</strong> ${locale.toUpperCase()}</p>
          </div>
        `,
      });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: t.emailFailed },
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
      { error: t.unexpected },
      { status: 500 }
    );
  }
}

function getSupportedLocale(
  value: unknown
): SupportedLocale {
  if (
    value === "de" ||
    value === "it" ||
    value === "en"
  ) {
    return value;
  }

  return "en";
}

function getClientIp(request: Request) {
  const forwardedFor =
    request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return (
      forwardedFor.split(",")[0]?.trim() ||
      "unknown"
    );
  }

  return (
    request.headers.get("x-real-ip")?.trim() ||
    request.headers
      .get("cf-connecting-ip")
      ?.trim() ||
    "unknown"
  );
}

function isRateLimited(identifier: string) {
  const now = Date.now();
  const existingEntry =
    rateLimitStore.get(identifier);

  if (
    !existingEntry ||
    existingEntry.resetAt <= now
  ) {
    rateLimitStore.set(identifier, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });

    return false;
  }

  if (
    existingEntry.count >=
    RATE_LIMIT_MAX_REQUESTS
  ) {
    return true;
  }

  existingEntry.count += 1;
  rateLimitStore.set(identifier, existingEntry);

  return false;
}

function normaliseText(
  value: unknown,
  maximumLength: number
) {
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