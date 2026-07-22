import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type SupportedLocale = "en" | "de" | "it";
type CollateralType =
  | "preciousMetals"
  | "digitalAssets"
  | "combination";

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  collateralType?: unknown;
  financingAmount?: unknown;
  estimatedAssetValue?: unknown;
  preciousMetalsDescription?: unknown;
  preciousMetalsLocation?: unknown;
  digitalAssetsDescription?: unknown;
  digitalAssetCustody?: unknown;
  custodyJurisdiction?: unknown;
  ownershipSource?: unknown;
  purpose?: unknown;
  ownershipConfirmed?: unknown;
  privacyConfirmed?: unknown;
  securityConfirmed?: unknown;
  website?: unknown;
  locale?: unknown;
};

type ErrorMessages = {
  rateLimit: string;
  invalidRequest: string;
  requiredFields: string;
  invalidCollateralType: string;
  preciousMetalsRequired: string;
  digitalAssetsRequired: string;
  invalidEmail: string;
  shortName: string;
  shortPurpose: string;
  shortOwnershipSource: string;
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
  collateralTypeLabel: string;
  amountLabel: string;
  assetValueLabel: string;
  custodyLabel: string;
  securityNotice: string;
  riskNotice: string;
  closing: string;
  receiptDisclaimer: string;
  collateralTypes: Record<CollateralType, string>;
};

const messages: Record<
  SupportedLocale,
  ErrorMessages
> = {
  en: {
    rateLimit:
      "Too many requests. Please wait a few minutes before trying again.",
    invalidRequest: "Invalid request format.",
    requiredFields:
      "Please complete all required fields.",
    invalidCollateralType:
      "Please select a valid collateral type.",
    preciousMetalsRequired:
      "Please provide the required precious-metals information.",
    digitalAssetsRequired:
      "Please provide the required digital-asset and custody information.",
    invalidEmail:
      "Please enter a valid email address.",
    shortName: "The name entered is too short.",
    shortPurpose:
      "The inquiry description must contain at least 20 characters.",
    shortOwnershipSource:
      "The ownership and source overview must contain at least 20 characters.",
    confirmations:
      "All confirmations are required.",
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
    invalidCollateralType:
      "Bitte wählen Sie eine gültige Sicherheitenart.",
    preciousMetalsRequired:
      "Bitte geben Sie die erforderlichen Informationen zu den Edelmetallen an.",
    digitalAssetsRequired:
      "Bitte geben Sie die erforderlichen Informationen zu digitalen Vermögenswerten und deren Verwahrung an.",
    invalidEmail:
      "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    shortName:
      "Der eingegebene Name ist zu kurz.",
    shortPurpose:
      "Die Beschreibung der Anfrage muss mindestens 20 Zeichen enthalten.",
    shortOwnershipSource:
      "Die Übersicht zu Eigentum und Herkunft muss mindestens 20 Zeichen enthalten.",
    confirmations:
      "Alle Bestätigungen sind erforderlich.",
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
    invalidRequest:
      "Formato della richiesta non valido.",
    requiredFields:
      "Compila tutti i campi obbligatori.",
    invalidCollateralType:
      "Seleziona un tipo di garanzia valido.",
    preciousMetalsRequired:
      "Fornisci le informazioni richieste sui metalli preziosi.",
    digitalAssetsRequired:
      "Fornisci le informazioni richieste sugli asset digitali e sulla custodia.",
    invalidEmail:
      "Inserisci un indirizzo e-mail valido.",
    shortName:
      "Il nome inserito è troppo breve.",
    shortPurpose:
      "La descrizione della richiesta deve contenere almeno 20 caratteri.",
    shortOwnershipSource:
      "La panoramica di proprietà e origine deve contenere almeno 20 caratteri.",
    confirmations:
      "Sono necessarie tutte le conferme.",
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
      "We will contact you after the initial assessment if the opportunity appears suitable for further institutional review.",
    referenceTitle: "Inquiry summary",
    collateralTypeLabel: "Proposed collateral",
    amountLabel: "Requested financing amount",
    assetValueLabel:
      "Estimated collateral value",
    custodyLabel: "Custody overview",
    securityNotice:
      "Never send passwords, seed phrases, private keys, account login credentials or original ownership documents by email unless specifically requested through an agreed secure channel.",
    riskNotice:
      "Digital assets may be subject to material price volatility, additional-collateral requirements and contractual liquidation rights. Any such terms would be determined solely by the selected institution.",
    closing: "Kind regards",
    receiptDisclaimer:
      "This confirmation acknowledges receipt only and does not constitute a financing offer, commitment, recommendation or establishment of a client relationship.",
    collateralTypes: {
      preciousMetals: "Precious metals",
      digitalAssets: "Digital assets",
      combination:
        "Precious metals and digital assets",
    },
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
      "Nach der ersten Prüfung kontaktieren wir Sie, sofern die Möglichkeit für eine weitergehende institutionelle Prüfung geeignet erscheint.",
    referenceTitle:
      "Zusammenfassung Ihrer Anfrage",
    collateralTypeLabel:
      "Vorgeschlagene Sicherheit",
    amountLabel:
      "Gewünschter Finanzierungsbetrag",
    assetValueLabel:
      "Geschätzter Sicherheitenwert",
    custodyLabel: "Verwahrungsübersicht",
    securityNotice:
      "Senden Sie niemals Passwörter, Seed-Phrasen, private Schlüssel, Kontozugangsdaten oder Originalnachweise per E-Mail, sofern dies nicht ausdrücklich über einen vereinbarten sicheren Kanal angefordert wurde.",
    riskNotice:
      "Digitale Vermögenswerte können erheblichen Kursschwankungen, Nachbesicherungsanforderungen und vertraglichen Liquidationsrechten unterliegen. Solche Konditionen würden ausschließlich vom ausgewählten Institut festgelegt.",
    closing: "Mit freundlichen Grüßen",
    receiptDisclaimer:
      "Diese Bestätigung bestätigt ausschließlich den Eingang und stellt weder ein Finanzierungsangebot, eine Zusage, eine Empfehlung noch die Begründung einer Kundenbeziehung dar.",
    collateralTypes: {
      preciousMetals: "Edelmetalle",
      digitalAssets:
        "Digitale Vermögenswerte",
      combination:
        "Edelmetalle und digitale Vermögenswerte",
    },
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
      "Ti contatteremo dopo la valutazione iniziale qualora l’opportunità risulti idonea a un ulteriore esame istituzionale.",
    referenceTitle:
      "Riepilogo della richiesta",
    collateralTypeLabel:
      "Garanzia proposta",
    amountLabel:
      "Importo del finanziamento richiesto",
    assetValueLabel:
      "Valore stimato della garanzia",
    custodyLabel:
      "Panoramica della custodia",
    securityNotice:
      "Non inviare mai tramite e-mail password, seed phrase, chiavi private, credenziali di accesso o documenti originali di proprietà, salvo espressa richiesta attraverso un canale sicuro concordato.",
    riskNotice:
      "Gli asset digitali possono essere soggetti a significativa volatilità, richieste di garanzie aggiuntive e diritti contrattuali di liquidazione. Tali condizioni sarebbero determinate esclusivamente dall’istituzione selezionata.",
    closing: "Cordiali saluti",
    receiptDisclaimer:
      "Questa conferma attesta esclusivamente la ricezione e non costituisce un’offerta di finanziamento, un impegno, una raccomandazione o l’instaurazione di un rapporto con il cliente.",
    collateralTypes: {
      preciousMetals: "Metalli preziosi",
      digitalAssets: "Asset digitali",
      combination:
        "Metalli preziosi e asset digitali",
    },
  },
};

const rateLimitStore = new Map<
  string,
  RateLimitEntry
>();

export async function POST(request: Request) {
  let locale: SupportedLocale = "en";
  let t = messages.en;

  try {
    const clientIp = getClientIp(request);

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: t.rateLimit },
        {
          status: 429,
          headers: {
            "Retry-After": String(
              Math.ceil(
                RATE_LIMIT_WINDOW_MS / 1000
              )
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

    const body =
      (await request.json()) as ContactPayload;

    locale = getSupportedLocale(body.locale);
    t = messages[locale];

    const website = normaliseText(
      body.website,
      200
    );

    if (website) {
      return NextResponse.json({
        success: true,
      });
    }

    const name = normaliseText(body.name, 120);
    const company = normaliseText(
      body.company,
      160
    );
    const email = normaliseText(
      body.email,
      254
    ).toLowerCase();
    const phone = normaliseText(body.phone, 60);

    const collateralType =
      getCollateralType(body.collateralType);

    const financingAmount = normaliseText(
      body.financingAmount,
      100
    );
    const estimatedAssetValue = normaliseText(
      body.estimatedAssetValue,
      100
    );
    const preciousMetalsDescription =
      normaliseText(
        body.preciousMetalsDescription,
        500
      );
    const preciousMetalsLocation =
      normaliseText(
        body.preciousMetalsLocation,
        250
      );
    const digitalAssetsDescription =
      normaliseText(
        body.digitalAssetsDescription,
        500
      );
    const digitalAssetCustody =
      normaliseText(
        body.digitalAssetCustody,
        300
      );
    const custodyJurisdiction =
      normaliseText(
        body.custodyJurisdiction,
        160
      );
    const ownershipSource = normaliseText(
      body.ownershipSource,
      3000
    );
    const purpose = normaliseText(
      body.purpose,
      5000
    );

    const ownershipConfirmed =
      body.ownershipConfirmed === true;
    const privacyConfirmed =
      body.privacyConfirmed === true;
    const securityConfirmed =
      body.securityConfirmed === true;

    if (
      !name ||
      !email ||
      !financingAmount ||
      !estimatedAssetValue ||
      !ownershipSource ||
      !purpose
    ) {
      return NextResponse.json(
        { error: t.requiredFields },
        { status: 400 }
      );
    }

    if (!collateralType) {
      return NextResponse.json(
        { error: t.invalidCollateralType },
        { status: 400 }
      );
    }

    if (
      (collateralType === "preciousMetals" ||
        collateralType === "combination") &&
      (!preciousMetalsDescription ||
        !preciousMetalsLocation)
    ) {
      return NextResponse.json(
        { error: t.preciousMetalsRequired },
        { status: 400 }
      );
    }

    if (
      (collateralType === "digitalAssets" ||
        collateralType === "combination") &&
      (!digitalAssetsDescription ||
        !digitalAssetCustody ||
        !custodyJurisdiction)
    ) {
      return NextResponse.json(
        { error: t.digitalAssetsRequired },
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

    if (ownershipSource.length < 20) {
      return NextResponse.json(
        { error: t.shortOwnershipSource },
        { status: 400 }
      );
    }

    if (purpose.length < 20) {
      return NextResponse.json(
        { error: t.shortPurpose },
        { status: 400 }
      );
    }

    if (
      !ownershipConfirmed ||
      !privacyConfirmed ||
      !securityConfirmed
    ) {
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

    const inquiryResult =
      await resend.emails.send({
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
          collateralType,
          financingAmount,
          estimatedAssetValue,
          preciousMetalsDescription,
          preciousMetalsLocation,
          digitalAssetsDescription,
          digitalAssetCustody,
          custodyJurisdiction,
          ownershipSource,
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

    const custodySummary = [
      preciousMetalsLocation,
      digitalAssetCustody,
      custodyJurisdiction,
    ]
      .filter(Boolean)
      .join(" | ");

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
          collateralType,
          financingAmount,
          estimatedAssetValue,
          custodySummary,
          confirmation,
        }),
      });

    if (confirmationResult.error) {
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
  collateralType,
  financingAmount,
  estimatedAssetValue,
  preciousMetalsDescription,
  preciousMetalsLocation,
  digitalAssetsDescription,
  digitalAssetCustody,
  custodyJurisdiction,
  ownershipSource,
  purpose,
  locale,
}: {
  name: string;
  company: string;
  email: string;
  phone: string;
  collateralType: CollateralType;
  financingAmount: string;
  estimatedAssetValue: string;
  preciousMetalsDescription: string;
  preciousMetalsLocation: string;
  digitalAssetsDescription: string;
  digitalAssetCustody: string;
  custodyJurisdiction: string;
  ownershipSource: string;
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

      <p><strong>Collateral type:</strong> ${escapeHtml(
        collateralType
      )}</p>

      <p><strong>Requested financing amount:</strong> ${escapeHtml(
        financingAmount
      )}</p>

      <p><strong>Estimated collateral value:</strong> ${escapeHtml(
        estimatedAssetValue
      )}</p>

      <p><strong>Precious metals:</strong> ${escapeHtml(
        preciousMetalsDescription ||
          "Not applicable"
      )}</p>

      <p><strong>Precious-metals location:</strong> ${escapeHtml(
        preciousMetalsLocation ||
          "Not applicable"
      )}</p>

      <p><strong>Digital assets:</strong> ${escapeHtml(
        digitalAssetsDescription ||
          "Not applicable"
      )}</p>

      <p><strong>Digital-asset custody:</strong> ${escapeHtml(
        digitalAssetCustody ||
          "Not applicable"
      )}</p>

      <p><strong>Custody jurisdiction:</strong> ${escapeHtml(
        custodyJurisdiction ||
          "Not applicable"
      )}</p>

      <p><strong>Ownership and source overview:</strong></p>
      <p>${escapeHtml(ownershipSource).replace(
        /\n/g,
        "<br />"
      )}</p>

      <p><strong>Transaction and financing purpose:</strong></p>
      <p>${escapeHtml(purpose).replace(
        /\n/g,
        "<br />"
      )}</p>

      <hr style="margin: 24px 0; border: 0; border-top: 1px solid #dddddd;" />

      <p><strong>Ownership confirmed:</strong> Yes</p>
      <p><strong>Privacy consent confirmed:</strong> Yes</p>
      <p><strong>Security warning confirmed:</strong> Yes</p>
      <p><strong>Submitted language:</strong> ${locale.toUpperCase()}</p>
    </div>
  `;
}

function createCustomerConfirmationEmail({
  name,
  collateralType,
  financingAmount,
  estimatedAssetValue,
  custodySummary,
  confirmation,
}: {
  name: string;
  collateralType: CollateralType;
  financingAmount: string;
  estimatedAssetValue: string;
  custodySummary: string;
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

          <p>${escapeHtml(
            confirmation.introduction
          )}</p>

          <p>${escapeHtml(
            confirmation.reviewText
          )}</p>

          <p>${escapeHtml(
            confirmation.responseTime
          )}</p>

          <div style="margin: 28px 0; padding: 20px; background: #f7f4ec; border-left: 4px solid #c7aa60;">
            <p style="margin: 0 0 12px; font-weight: 700;">
              ${escapeHtml(
                confirmation.referenceTitle
              )}
            </p>

            <p style="margin: 6px 0;">
              <strong>${escapeHtml(
                confirmation.collateralTypeLabel
              )}:</strong>
              ${escapeHtml(
                confirmation.collateralTypes[
                  collateralType
                ]
              )}
            </p>

            <p style="margin: 6px 0;">
              <strong>${escapeHtml(
                confirmation.amountLabel
              )}:</strong>
              ${escapeHtml(financingAmount)}
            </p>

            <p style="margin: 6px 0;">
              <strong>${escapeHtml(
                confirmation.assetValueLabel
              )}:</strong>
              ${escapeHtml(
                estimatedAssetValue
              )}
            </p>

            <p style="margin: 6px 0;">
              <strong>${escapeHtml(
                confirmation.custodyLabel
              )}:</strong>
              ${escapeHtml(
                custodySummary ||
                  "Not provided"
              )}
            </p>
          </div>

          <p style="font-size: 14px; color: #596174;">
            ${escapeHtml(
              confirmation.securityNotice
            )}
          </p>

          <p style="font-size: 14px; color: #596174;">
            ${escapeHtml(
              confirmation.riskNotice
            )}
          </p>

          <p style="margin-top: 28px;">
            ${escapeHtml(
              confirmation.closing
            )},<br />
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
          ${escapeHtml(
            confirmation.receiptDisclaimer
          )}
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

function getCollateralType(
  value: unknown
): CollateralType | null {
  if (
    value === "preciousMetals" ||
    value === "digitalAssets" ||
    value === "combination"
  ) {
    return value;
  }

  return null;
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
      resetAt:
        now + RATE_LIMIT_WINDOW_MS,
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
  rateLimitStore.set(
    identifier,
    existingEntry
  );

  return false;
}

function normaliseText(
  value: unknown,
  maximumLength: number
) {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .trim()
    .slice(0, maximumLength);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    value
  );
}

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}