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

type ConfirmationEmail = {
  subject: string;
  greeting: string;
  introduction: string;
  reviewText: string;
  responseTime: string;
  referenceTitle: string;
  amountLabel: string;
  goldValueLabel: string;
  locationLabel: string;
  securityNotice: string;
  closing: string;
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
    confirmations: "Both confirmations are required.",
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

const confirmationEmails: Record<
  SupportedLocale,
  ConfirmationEmail
> = {
  en: {
    subject:
      "We have received your confidential financing inquiry",
    greeting: "Dear",
    introduction:
      "Thank you for contacting Gold Bridge Capital. We confirm that your confidential financing inquiry has been received successfully.",
    reviewText:
      "The information provided will now be reviewed on a preliminary and confidential basis.",
    responseTime:
      "We will contact you after the initial assessment if the transaction appears to meet the relevant financing criteria.",
    referenceTitle: "Inquiry summary",
    amountLabel: "Requested financing amount",
    goldValueLabel: "Estimated gold value",
    locationLabel: "Gold location",
    securityNotice:
      "For your security, please do not send passwords, private keys, banking credentials or original ownership documents by email unless specifically requested through an agreed secure channel.",
    closing: "Kind regards",
  },

  de: {
    subject:
      "Wir haben Ihre vertrauliche Finanzierungsanfrage erhalten",
    greeting: "Guten Tag",
    introduction:
      "Vielen Dank für Ihre Kontaktaufnahme mit Gold Bridge Capital. Wir bestätigen, dass Ihre vertrauliche Finanzierungsanfrage erfolgreich eingegangen ist.",
    reviewText:
      "Die übermittelten Informationen werden nun vorläufig und vertraulich geprüft.",
    responseTime:
      "Nach der ersten Prüfung werden wir Sie kontaktieren, sofern die Transaktion die relevanten Finanzierungskriterien grundsätzlich erfüllt.",
    referenceTitle: "Zusammenfassung Ihrer Anfrage",
    amountLabel: "Gewünschter Finanzierungsbetrag",
    goldValueLabel: "Geschätzter Goldwert",
    locationLabel: "Standort des Goldes",
    securityNotice:
      "Bitte senden Sie zu Ihrer Sicherheit keine Passwörter, privaten Schlüssel, Bankzugangsdaten oder Originalnachweise zum Eigentum per E-Mail, sofern dies nicht ausdrücklich über einen vereinbarten sicheren Kanal angefordert wurde.",
    closing: "Mit freundlichen Grüßen",
  },

  it: {
    subject:
      "Abbiamo ricevuto la tua richiesta riservata di finanziamento",
    greeting: "Gentile",
    introduction:
      "Grazie per aver contattato Gold Bridge Capital. Confermiamo di aver ricevuto correttamente la tua richiesta riservata di finanziamento.",
    reviewText:
      "Le informazioni fornite saranno ora esaminate in via preliminare e riservata.",
    responseTime:
      "Ti contatteremo dopo la valutazione iniziale qualora l’operazione risulti compatibile con i criteri di finanziamento applicabili.",
    referenceTitle: "Riepilogo della richiesta",
    amountLabel: "Importo del finanziamento richiesto",
    goldValueLabel: "Valore stimato dell’oro",
    locationLabel: "Ubicazione dell’oro",
    securityNotice:
      "Per la tua sicurezza, non inviare tramite e-mail password, chiavi private, credenziali bancarie o documenti originali di proprietà, salvo espressa richiesta attraverso un canale sicuro concordato.",
    closing: "Cordiali saluti",
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

    if (
      !recipientEmail ||
      !process.env.RESEND_API_KEY
    ) {
      console.error(
        "Contact email environment variables are not configured."
      );

      return NextResponse.json(
        { error: t.unavailable },
        { status: 500 }
      );
    }

    const inquiryResult = await resend.emails.send({
      from:
        "Gold Bridge Capital <inquiries@goldbridge-capital.com>",
      to: [recipientEmail],
      replyTo: email,
      subject: `New financing inquiry – ${name}`,
      html: createInternalInquiryEmail({
        name,
        company,
        email,
        phone,
        financingAmount,
        goldValue,
        goldAmount,
        goldLocation,
        purpose,
        locale,
      }),
    });

    if (inquiryResult.error) {
      console.error(
        "Resend inquiry email error:",
        inquiryResult.error
      );

      return NextResponse.json(
        { error: t.emailFailed },
        { status: 500 }
      );
    }

    const confirmation =
      confirmationEmails[locale];

    const confirmationResult =
      await resend.emails.send({
        from:
          "Gold Bridge Capital <inquiries@goldbridge-capital.com>",
        to: [email],
        replyTo:
          "inquiries@goldbridge-capital.com",
        subject: confirmation.subject,
        html: createCustomerConfirmationEmail({
          name,
          financingAmount,
          goldValue,
          goldLocation,
          confirmation,
        }),
      });

    if (confirmationResult.error) {
      /*
       * Povpraševanje je bilo že uspešno prejeto.
       * Zato stranki ne vrnemo napake in ne povzročimo
       * ponovne oddaje istega povpraševanja.
       */
      console.error(
        "Resend confirmation email error:",
        confirmationResult.error
      );
    }

    return NextResponse.json({
      success: true,
      id: inquiryResult.data?.id,
      confirmationSent:
        !confirmationResult.error,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: t.unexpected },
      { status: 500 }
    );
  }
}

function createInternalInquiryEmail({
  name,
  company,
  email,
  phone,
  financingAmount,
  goldValue,
  goldAmount,
  goldLocation,
  purpose,
  locale,
}: {
  name: string;
  company: string;
  email: string;
  phone: string;
  financingAmount: string;
  goldValue: string;
  goldAmount: string;
  goldLocation: string;
  purpose: string;
  locale: SupportedLocale;
}) {
  return `
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
  `;
}

function createCustomerConfirmationEmail({
  name,
  financingAmount,
  goldValue,
  goldLocation,
  confirmation,
}: {
  name: string;
  financingAmount: string;
  goldValue: string;
  goldLocation: string;
  confirmation: ConfirmationEmail;
}) {
  return `
    <div style="margin: 0; padding: 32px 16px; background: #f4f1e8;">
      <div style="max-width: 640px; margin: 0 auto; overflow: hidden; background: #ffffff; border: 1px solid #ddd5c2; border-radius: 14px;">
        <div style="padding: 28px 32px; background: #172136; color: #ffffff;">
          <p style="margin: 0; color: #d4bc78; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;">
            Gold Bridge Capital
          </p>

          <h1 style="margin: 10px 0 0; font-family: Georgia, serif; font-size: 28px; line-height: 1.25;">
            ${escapeHtml(confirmation.subject)}
          </h1>
        </div>

        <div style="padding: 32px; font-family: Arial, sans-serif; color: #253047; font-size: 16px; line-height: 1.7;">
          <p>
            ${escapeHtml(confirmation.greeting)}
            ${escapeHtml(name)},
          </p>

          <p>${escapeHtml(confirmation.introduction)}</p>

          <p>${escapeHtml(confirmation.reviewText)}</p>

          <p>${escapeHtml(confirmation.responseTime)}</p>

          <div style="margin: 28px 0; padding: 20px; background: #f7f4ec; border-left: 4px solid #c7aa60;">
            <p style="margin: 0 0 12px; font-weight: 700;">
              ${escapeHtml(confirmation.referenceTitle)}
            </p>

            <p style="margin: 6px 0;">
              <strong>${escapeHtml(
                confirmation.amountLabel
              )}:</strong>
              ${escapeHtml(financingAmount)}
            </p>

            <p style="margin: 6px 0;">
              <strong>${escapeHtml(
                confirmation.goldValueLabel
              )}:</strong>
              ${escapeHtml(goldValue)}
            </p>

            <p style="margin: 6px 0;">
              <strong>${escapeHtml(
                confirmation.locationLabel
              )}:</strong>
              ${escapeHtml(goldLocation)}
            </p>
          </div>

          <p style="font-size: 14px; color: #596174;">
            ${escapeHtml(confirmation.securityNotice)}
          </p>

          <p style="margin-top: 28px;">
            ${escapeHtml(confirmation.closing)},<br />
            <strong>Gold Bridge Capital</strong><br />
            <a
              href="mailto:inquiries@goldbridge-capital.com"
              style="color: #896f2f;"
            >
              inquiries@goldbridge-capital.com
            </a>
          </p>
        </div>

        <div style="padding: 18px 32px; background: #172136; color: #aeb6c5; font-family: Arial, sans-serif; font-size: 12px; line-height: 1.6;">
          This confirmation acknowledges receipt only and does not constitute a financing offer, commitment or establishment of a client relationship.
        </div>
      </div>
    </div>
  `;
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