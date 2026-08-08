import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type SupportedLocale = "en" | "de" | "it";

type InquiryType =
  | "assetBackedFinancing"
  | "hospitalitySale"
  | "hospitalityAcquisition"
  | "hospitalityDevelopment";

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

  inquiryType?: unknown;

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

  propertyName?: unknown;
  propertyType?: unknown;
  propertyLocation?: unknown;
  propertyKeys?: unknown;
  askingPrice?: unknown;
  annualRevenue?: unknown;
  ebitdaNoi?: unknown;
  operatorBrand?: unknown;
  ownershipStructure?: unknown;
  marketStatus?: unknown;
  propertyAuthority?: unknown;
  propertyOverview?: unknown;

  acquisitionMarkets?: unknown;
  acquisitionPropertyType?: unknown;
  investmentRange?: unknown;
  acquisitionCriteria?: unknown;

  developmentLocation?: unknown;
  developmentProjectType?: unknown;
  developmentStage?: unknown;
  landControl?: unknown;
  planningStatus?: unknown;
  totalDevelopmentCost?: unknown;
  capitalInvested?: unknown;
  debtRequired?: unknown;
  equityRequired?: unknown;
  developmentKeys?: unknown;
  developmentOperatorBrand?: unknown;
  developmentOverview?: unknown;

  authorityConfirmed?: unknown;
  privacyConfirmed?: unknown;
  securityConfirmed?: unknown;

  website?: unknown;
  locale?: unknown;
};

type ErrorMessages = {
  rateLimit: string;
  invalidRequest: string;
  requiredFields: string;
  invalidInquiryType: string;
  invalidCollateralType: string;
  preciousMetalsRequired: string;
  digitalAssetsRequired: string;
  financingRequired: string;
  hospitalitySaleRequired: string;
  hospitalityAcquisitionRequired: string;
  hospitalityDevelopmentRequired: string;
  invalidEmail: string;
  shortName: string;
  shortOverview: string;
  confirmations: string;
  unavailable: string;
  emailFailed: string;
  unexpected: string;
};

type ConfirmationEmail = {
  subject: Record<InquiryType, string>;
  greeting: string;
  introduction: Record<InquiryType, string>;
  reviewText: string;
  responseTime: string;
  referenceTitle: string;
  inquiryTypeLabel: string;
  primaryDetailLabel: string;
  secondaryDetailLabel: string;
  securityNotice: string;
  closing: string;
  receiptDisclaimer: string;
  inquiryTypes: Record<InquiryType, string>;
};

const messages: Record<
  SupportedLocale,
  ErrorMessages
> = {
  en: {
    rateLimit:
      "Too many requests. Please wait a few minutes before trying again.",
    invalidRequest:
      "Invalid request format.",
    requiredFields:
      "Please complete all required fields.",
    invalidInquiryType:
      "Please select a valid inquiry type.",
    invalidCollateralType:
      "Please select a valid collateral type.",
    preciousMetalsRequired:
      "Please provide the required precious-metals information.",
    digitalAssetsRequired:
      "Please provide the required digital-asset and custody information.",
    financingRequired:
      "Please complete the required asset-backed financing information.",
    hospitalitySaleRequired:
      "Please complete the required hospitality property information.",
    hospitalityAcquisitionRequired:
      "Please complete the required hospitality acquisition information.",
    hospitalityDevelopmentRequired:
      "Please complete the required hospitality development information.",
    invalidEmail:
      "Please enter a valid email address.",
    shortName:
      "The name entered is too short.",
    shortOverview:
      "The opportunity overview must contain at least 20 characters.",
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
    invalidRequest:
      "Ungültiges Anfrageformat.",
    requiredFields:
      "Bitte füllen Sie alle Pflichtfelder aus.",
    invalidInquiryType:
      "Bitte wählen Sie eine gültige Anfrageart.",
    invalidCollateralType:
      "Bitte wählen Sie eine gültige Sicherheitenart.",
    preciousMetalsRequired:
      "Bitte geben Sie die erforderlichen Informationen zu den Edelmetallen an.",
    digitalAssetsRequired:
      "Bitte geben Sie die erforderlichen Informationen zu digitalen Vermögenswerten und deren Verwahrung an.",
    financingRequired:
      "Bitte vervollständigen Sie die erforderlichen Angaben zur vermögensbesicherten Finanzierung.",
    hospitalitySaleRequired:
      "Bitte vervollständigen Sie die erforderlichen Angaben zur Hospitality-Immobilie.",
    hospitalityAcquisitionRequired:
      "Bitte vervollständigen Sie die erforderlichen Angaben zur Hospitality-Akquisition.",
    hospitalityDevelopmentRequired:
      "Bitte vervollständigen Sie die erforderlichen Angaben zum Hospitality-Entwicklungsprojekt.",
    invalidEmail:
      "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    shortName:
      "Der eingegebene Name ist zu kurz.",
    shortOverview:
      "Die Beschreibung der Möglichkeit muss mindestens 20 Zeichen enthalten.",
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
    invalidInquiryType:
      "Seleziona un tipo di richiesta valido.",
    invalidCollateralType:
      "Seleziona un tipo di garanzia valido.",
    preciousMetalsRequired:
      "Fornisci le informazioni richieste sui metalli preziosi.",
    digitalAssetsRequired:
      "Fornisci le informazioni richieste sugli asset digitali e sulla custodia.",
    financingRequired:
      "Completa le informazioni richieste sul finanziamento garantito da asset.",
    hospitalitySaleRequired:
      "Completa le informazioni richieste sull'immobile hospitality.",
    hospitalityAcquisitionRequired:
      "Completa le informazioni richieste sull'acquisizione hospitality.",
    hospitalityDevelopmentRequired:
      "Completa le informazioni richieste sul progetto di sviluppo hospitality.",
    invalidEmail:
      "Inserisci un indirizzo e-mail valido.",
    shortName:
      "Il nome inserito è troppo breve.",
    shortOverview:
      "La descrizione dell'opportunità deve contenere almeno 20 caratteri.",
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
    subject: {
      assetBackedFinancing:
        "We have received your asset-backed financing inquiry",
      hospitalitySale:
        "We have received your hospitality property inquiry",
      hospitalityAcquisition:
        "We have received your hospitality acquisition inquiry",
      hospitalityDevelopment:
        "We have received your hospitality development inquiry",
    },
    greeting: "Dear",
    introduction: {
      assetBackedFinancing:
        "Thank you for contacting Gold Bridge Capital. We confirm that your confidential asset-backed financing inquiry has been received.",
      hospitalitySale:
        "Thank you for contacting Gold Bridge Capital. We confirm that your confidential hospitality property inquiry has been received.",
      hospitalityAcquisition:
        "Thank you for contacting Gold Bridge Capital. We confirm that your confidential hospitality acquisition inquiry has been received.",
      hospitalityDevelopment:
        "Thank you for contacting Gold Bridge Capital. We confirm that your confidential hospitality development inquiry has been received.",
    },
    reviewText:
      "The information provided will now be reviewed on a preliminary and confidential basis.",
    responseTime:
      "We will contact you if the opportunity appears suitable for further assessment or introduction.",
    referenceTitle:
      "Inquiry summary",
    inquiryTypeLabel:
      "Nature of inquiry",
    primaryDetailLabel:
      "Primary reference",
    secondaryDetailLabel:
      "Commercial reference",
    securityNotice:
      "Please do not send passwords, seed phrases, private keys, login credentials, original ownership documents or sensitive due-diligence materials by email unless specifically requested through an agreed secure channel.",
    closing:
      "Kind regards",
    receiptDisclaimer:
      "This confirmation acknowledges receipt only and does not constitute financing approval, investment commitment, representation, brokerage appointment, recommendation or establishment of a client relationship.",
    inquiryTypes: {
      assetBackedFinancing:
        "Asset-Backed Financing",
      hospitalitySale:
        "Hospitality Property for Sale",
      hospitalityAcquisition:
        "Hospitality Acquisition",
      hospitalityDevelopment:
        "Hospitality Development Project",
    },
  },

  de: {
    subject: {
      assetBackedFinancing:
        "Wir haben Ihre Anfrage zur vermögensbesicherten Finanzierung erhalten",
      hospitalitySale:
        "Wir haben Ihre Anfrage zur Hospitality-Immobilie erhalten",
      hospitalityAcquisition:
        "Wir haben Ihre Hospitality-Akquisitionsanfrage erhalten",
      hospitalityDevelopment:
        "Wir haben Ihre Anfrage zum Hospitality-Entwicklungsprojekt erhalten",
    },
    greeting:
      "Guten Tag",
    introduction: {
      assetBackedFinancing:
        "Vielen Dank für Ihre Kontaktaufnahme mit Gold Bridge Capital. Wir bestätigen den Eingang Ihrer vertraulichen Anfrage zur vermögensbesicherten Finanzierung.",
      hospitalitySale:
        "Vielen Dank für Ihre Kontaktaufnahme mit Gold Bridge Capital. Wir bestätigen den Eingang Ihrer vertraulichen Anfrage zu einer Hospitality-Immobilie.",
      hospitalityAcquisition:
        "Vielen Dank für Ihre Kontaktaufnahme mit Gold Bridge Capital. Wir bestätigen den Eingang Ihrer vertraulichen Hospitality-Akquisitionsanfrage.",
      hospitalityDevelopment:
        "Vielen Dank für Ihre Kontaktaufnahme mit Gold Bridge Capital. Wir bestätigen den Eingang Ihrer vertraulichen Anfrage zu einem Hospitality-Entwicklungsprojekt.",
    },
    reviewText:
      "Die übermittelten Informationen werden nun vorläufig und vertraulich geprüft.",
    responseTime:
      "Wir kontaktieren Sie, sofern die Möglichkeit für eine weitergehende Prüfung oder Vorstellung geeignet erscheint.",
    referenceTitle:
      "Zusammenfassung Ihrer Anfrage",
    inquiryTypeLabel:
      "Art der Anfrage",
    primaryDetailLabel:
      "Primäre Referenz",
    secondaryDetailLabel:
      "Wirtschaftliche Referenz",
    securityNotice:
      "Bitte senden Sie keine Passwörter, Seed-Phrasen, privaten Schlüssel, Zugangsdaten, Original-Eigentumsunterlagen oder sensiblen Due-Diligence-Unterlagen per E-Mail, sofern dies nicht ausdrücklich über einen vereinbarten sicheren Kanal angefordert wurde.",
    closing:
      "Mit freundlichen Grüßen",
    receiptDisclaimer:
      "Diese Bestätigung bestätigt ausschließlich den Eingang und stellt weder eine Finanzierungsgenehmigung, Investitionszusage, Vertretung, Maklerbeauftragung, Empfehlung noch die Begründung einer Kundenbeziehung dar.",
    inquiryTypes: {
      assetBackedFinancing:
        "Vermögensbesicherte Finanzierung",
      hospitalitySale:
        "Hospitality-Immobilie zum Verkauf",
      hospitalityAcquisition:
        "Hospitality-Akquisition",
      hospitalityDevelopment:
        "Hospitality-Entwicklungsprojekt",
    },
  },

  it: {
    subject: {
      assetBackedFinancing:
        "Abbiamo ricevuto la tua richiesta di finanziamento garantito da asset",
      hospitalitySale:
        "Abbiamo ricevuto la tua richiesta relativa a un immobile hospitality",
      hospitalityAcquisition:
        "Abbiamo ricevuto la tua richiesta di acquisizione hospitality",
      hospitalityDevelopment:
        "Abbiamo ricevuto la tua richiesta relativa a un progetto hospitality",
    },
    greeting:
      "Gentile",
    introduction: {
      assetBackedFinancing:
        "Grazie per aver contattato Gold Bridge Capital. Confermiamo di aver ricevuto la tua richiesta riservata di finanziamento garantito da asset.",
      hospitalitySale:
        "Grazie per aver contattato Gold Bridge Capital. Confermiamo di aver ricevuto la tua richiesta riservata relativa a un immobile hospitality.",
      hospitalityAcquisition:
        "Grazie per aver contattato Gold Bridge Capital. Confermiamo di aver ricevuto la tua richiesta riservata di acquisizione hospitality.",
      hospitalityDevelopment:
        "Grazie per aver contattato Gold Bridge Capital. Confermiamo di aver ricevuto la tua richiesta riservata relativa a un progetto di sviluppo hospitality.",
    },
    reviewText:
      "Le informazioni fornite saranno ora esaminate in via preliminare e riservata.",
    responseTime:
      "Ti contatteremo qualora l'opportunità risulti adatta a un'ulteriore valutazione o presentazione.",
    referenceTitle:
      "Riepilogo della richiesta",
    inquiryTypeLabel:
      "Natura della richiesta",
    primaryDetailLabel:
      "Riferimento principale",
    secondaryDetailLabel:
      "Riferimento commerciale",
    securityNotice:
      "Non inviare tramite e-mail password, seed phrase, chiavi private, credenziali di accesso, documenti originali di proprietà o materiali sensibili di due diligence, salvo espressa richiesta attraverso un canale sicuro concordato.",
    closing:
      "Cordiali saluti",
    receiptDisclaimer:
      "Questa conferma attesta esclusivamente la ricezione e non costituisce approvazione di finanziamento, impegno di investimento, rappresentanza, incarico di intermediazione, raccomandazione o instaurazione di un rapporto con il cliente.",
    inquiryTypes: {
      assetBackedFinancing:
        "Finanziamento garantito da asset",
      hospitalitySale:
        "Immobile hospitality in vendita",
      hospitalityAcquisition:
        "Acquisizione hospitality",
      hospitalityDevelopment:
        "Progetto di sviluppo hospitality",
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

    const website =
      normaliseText(body.website, 200);

    if (website) {
      return NextResponse.json({
        success: true,
      });
    }

    const name =
      normaliseText(body.name, 120);

    const company =
      normaliseText(body.company, 160);

    const email =
      normaliseText(
        body.email,
        254
      ).toLowerCase();

    const phone =
      normaliseText(body.phone, 60);

    const inquiryType =
      getInquiryType(body.inquiryType);

    const collateralType =
      getCollateralType(body.collateralType);

    const financingAmount =
      normaliseText(
        body.financingAmount,
        100
      );

    const estimatedAssetValue =
      normaliseText(
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

    const ownershipSource =
      normaliseText(
        body.ownershipSource,
        3000
      );

    const purpose =
      normaliseText(
        body.purpose,
        5000
      );

    const propertyName =
      normaliseText(
        body.propertyName,
        200
      );

    const propertyType =
      normaliseText(
        body.propertyType,
        200
      );

    const propertyLocation =
      normaliseText(
        body.propertyLocation,
        250
      );

    const propertyKeys =
      normaliseText(
        body.propertyKeys,
        80
      );

    const askingPrice =
      normaliseText(
        body.askingPrice,
        100
      );

    const annualRevenue =
      normaliseText(
        body.annualRevenue,
        100
      );

    const ebitdaNoi =
      normaliseText(
        body.ebitdaNoi,
        100
      );

    const operatorBrand =
      normaliseText(
        body.operatorBrand,
        200
      );

    const ownershipStructure =
      normaliseText(
        body.ownershipStructure,
        200
      );

    const marketStatus =
      normaliseText(
        body.marketStatus,
        100
      );

    const propertyAuthority =
      normaliseText(
        body.propertyAuthority,
        3000
      );

    const propertyOverview =
      normaliseText(
        body.propertyOverview,
        5000
      );

    const acquisitionMarkets =
      normaliseText(
        body.acquisitionMarkets,
        500
      );

    const acquisitionPropertyType =
      normaliseText(
        body.acquisitionPropertyType,
        300
      );

    const investmentRange =
      normaliseText(
        body.investmentRange,
        150
      );

    const acquisitionCriteria =
      normaliseText(
        body.acquisitionCriteria,
        5000
      );

    const developmentLocation =
      normaliseText(
        body.developmentLocation,
        250
      );

    const developmentProjectType =
      normaliseText(
        body.developmentProjectType,
        250
      );

    const developmentStage =
      normaliseText(
        body.developmentStage,
        250
      );

    const landControl =
      normaliseText(
        body.landControl,
        500
      );

    const planningStatus =
      normaliseText(
        body.planningStatus,
        500
      );

    const totalDevelopmentCost =
      normaliseText(
        body.totalDevelopmentCost,
        120
      );

    const capitalInvested =
      normaliseText(
        body.capitalInvested,
        120
      );

    const debtRequired =
      normaliseText(
        body.debtRequired,
        120
      );

    const equityRequired =
      normaliseText(
        body.equityRequired,
        120
      );

    const developmentKeys =
      normaliseText(
        body.developmentKeys,
        80
      );

    const developmentOperatorBrand =
      normaliseText(
        body.developmentOperatorBrand,
        250
      );

    const developmentOverview =
      normaliseText(
        body.developmentOverview,
        5000
      );

    const authorityConfirmed =
      body.authorityConfirmed === true;

    const privacyConfirmed =
      body.privacyConfirmed === true;

    const securityConfirmed =
      body.securityConfirmed === true;

    if (
      !name ||
      !email
    ) {
      return NextResponse.json(
        { error: t.requiredFields },
        { status: 400 }
      );
    }

    if (!inquiryType) {
      return NextResponse.json(
        { error: t.invalidInquiryType },
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

    if (
      !authorityConfirmed ||
      !privacyConfirmed ||
      !securityConfirmed
    ) {
      return NextResponse.json(
        { error: t.confirmations },
        { status: 400 }
      );
    }

    if (
      inquiryType ===
      "assetBackedFinancing"
    ) {
      if (
        !collateralType
      ) {
        return NextResponse.json(
          {
            error:
              t.invalidCollateralType,
          },
          { status: 400 }
        );
      }

      if (
        !financingAmount ||
        !estimatedAssetValue ||
        !ownershipSource ||
        !purpose
      ) {
        return NextResponse.json(
          {
            error:
              t.financingRequired,
          },
          { status: 400 }
        );
      }

      if (
        ownershipSource.length < 20 ||
        purpose.length < 20
      ) {
        return NextResponse.json(
          {
            error:
              t.shortOverview,
          },
          { status: 400 }
        );
      }

      if (
        (
          collateralType ===
            "preciousMetals" ||
          collateralType ===
            "combination"
        ) &&
        (
          !preciousMetalsDescription ||
          !preciousMetalsLocation
        )
      ) {
        return NextResponse.json(
          {
            error:
              t.preciousMetalsRequired,
          },
          { status: 400 }
        );
      }

      if (
        (
          collateralType ===
            "digitalAssets" ||
          collateralType ===
            "combination"
        ) &&
        (
          !digitalAssetsDescription ||
          !digitalAssetCustody ||
          !custodyJurisdiction
        )
      ) {
        return NextResponse.json(
          {
            error:
              t.digitalAssetsRequired,
          },
          { status: 400 }
        );
      }
    }

    if (
      inquiryType ===
      "hospitalitySale"
    ) {
      if (
        !propertyType ||
        !propertyLocation ||
        !askingPrice ||
        !marketStatus ||
        !propertyAuthority ||
        !propertyOverview
      ) {
        return NextResponse.json(
          {
            error:
              t.hospitalitySaleRequired,
          },
          { status: 400 }
        );
      }

      if (
        propertyAuthority.length < 20 ||
        propertyOverview.length < 20
      ) {
        return NextResponse.json(
          {
            error:
              t.shortOverview,
          },
          { status: 400 }
        );
      }
    }

    if (
      inquiryType ===
      "hospitalityAcquisition"
    ) {
      if (
        !acquisitionMarkets ||
        !acquisitionPropertyType ||
        !investmentRange ||
        !acquisitionCriteria
      ) {
        return NextResponse.json(
          {
            error:
              t.hospitalityAcquisitionRequired,
          },
          { status: 400 }
        );
      }

      if (
        acquisitionCriteria.length < 20
      ) {
        return NextResponse.json(
          {
            error:
              t.shortOverview,
          },
          { status: 400 }
        );
      }
    }

    if (
      inquiryType ===
      "hospitalityDevelopment"
    ) {
      if (
        !developmentLocation ||
        !developmentProjectType ||
        !developmentStage ||
        !landControl ||
        !planningStatus ||
        !totalDevelopmentCost ||
        !developmentOverview
      ) {
        return NextResponse.json(
          {
            error:
              t.hospitalityDevelopmentRequired,
          },
          { status: 400 }
        );
      }

      if (
        developmentOverview.length < 20
      ) {
        return NextResponse.json(
          {
            error:
              t.shortOverview,
          },
          { status: 400 }
        );
      }
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
        subject:
          createInternalSubject(
            inquiryType,
            name
          ),
        html:
          createInternalInquiryEmail({
            name,
            company,
            email,
            phone,
            inquiryType,

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

            propertyName,
            propertyType,
            propertyLocation,
            propertyKeys,
            askingPrice,
            annualRevenue,
            ebitdaNoi,
            operatorBrand,
            ownershipStructure,
            marketStatus,
            propertyAuthority,
            propertyOverview,

            acquisitionMarkets,
            acquisitionPropertyType,
            investmentRange,
            acquisitionCriteria,

            developmentLocation,
            developmentProjectType,
            developmentStage,
            landControl,
            planningStatus,
            totalDevelopmentCost,
            capitalInvested,
            debtRequired,
            equityRequired,
            developmentKeys,
            developmentOperatorBrand,
            developmentOverview,

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

    const {
      primaryDetail,
      secondaryDetail,
    } =
      getCustomerSummary({
        inquiryType,
        collateralType,
        financingAmount,
        estimatedAssetValue,
        propertyType,
        propertyLocation,
        askingPrice,
        acquisitionMarkets,
        investmentRange,
        developmentLocation,
        totalDevelopmentCost,
      });

    const confirmationResult =
      await resend.emails.send({
        from:
          "Gold Bridge Capital <inquiries@goldbridge-capital.com>",
        to: [email],
        replyTo:
          "inquiries@goldbridge-capital.com",
        subject:
          confirmation.subject[
            inquiryType
          ],
        html:
          createCustomerConfirmationEmail({
            name,
            inquiryType,
            primaryDetail,
            secondaryDetail,
            confirmation,
          }),
      });

    if (
      confirmationResult.error
    ) {
      console.error(
        "Resend confirmation email error:",
        confirmationResult.error
      );
    }

    return NextResponse.json({
      success: true,
      id:
        inquiryResult.data?.id,
      confirmationSent:
        !confirmationResult.error,
    });
  } catch (error) {
    console.error(
      "Contact API error:",
      error
    );

    return NextResponse.json(
      { error: t.unexpected },
      { status: 500 }
    );
  }
}

function createInternalSubject(
  inquiryType: InquiryType,
  name: string
) {
  const labels: Record<
    InquiryType,
    string
  > = {
    assetBackedFinancing:
      "Asset-backed financing inquiry",
    hospitalitySale:
      "Hospitality property inquiry",
    hospitalityAcquisition:
      "Hospitality acquisition inquiry",
    hospitalityDevelopment:
      "Hospitality development inquiry",
  };

  return `${labels[inquiryType]} – ${name}`;
}

function createInternalInquiryEmail({
  name,
  company,
  email,
  phone,
  inquiryType,

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

  propertyName,
  propertyType,
  propertyLocation,
  propertyKeys,
  askingPrice,
  annualRevenue,
  ebitdaNoi,
  operatorBrand,
  ownershipStructure,
  marketStatus,
  propertyAuthority,
  propertyOverview,

  acquisitionMarkets,
  acquisitionPropertyType,
  investmentRange,
  acquisitionCriteria,

  developmentLocation,
  developmentProjectType,
  developmentStage,
  landControl,
  planningStatus,
  totalDevelopmentCost,
  capitalInvested,
  debtRequired,
  equityRequired,
  developmentKeys,
  developmentOperatorBrand,
  developmentOverview,

  locale,
}: {
  name: string;
  company: string;
  email: string;
  phone: string;
  inquiryType: InquiryType;

  collateralType: CollateralType | null;
  financingAmount: string;
  estimatedAssetValue: string;
  preciousMetalsDescription: string;
  preciousMetalsLocation: string;
  digitalAssetsDescription: string;
  digitalAssetCustody: string;
  custodyJurisdiction: string;
  ownershipSource: string;
  purpose: string;

  propertyName: string;
  propertyType: string;
  propertyLocation: string;
  propertyKeys: string;
  askingPrice: string;
  annualRevenue: string;
  ebitdaNoi: string;
  operatorBrand: string;
  ownershipStructure: string;
  marketStatus: string;
  propertyAuthority: string;
  propertyOverview: string;

  acquisitionMarkets: string;
  acquisitionPropertyType: string;
  investmentRange: string;
  acquisitionCriteria: string;

  developmentLocation: string;
  developmentProjectType: string;
  developmentStage: string;
  landControl: string;
  planningStatus: string;
  totalDevelopmentCost: string;
  capitalInvested: string;
  debtRequired: string;
  equityRequired: string;
  developmentKeys: string;
  developmentOperatorBrand: string;
  developmentOverview: string;

  locale: SupportedLocale;
}) {
  let transactionDetails = "";

  if (
    inquiryType ===
    "assetBackedFinancing"
  ) {
    transactionDetails = `
      ${emailRow(
        "Collateral type",
        collateralType || "Not provided"
      )}
      ${emailRow(
        "Requested financing amount",
        financingAmount
      )}
      ${emailRow(
        "Estimated collateral value",
        estimatedAssetValue
      )}
      ${emailRow(
        "Precious metals",
        preciousMetalsDescription ||
          "Not applicable"
      )}
      ${emailRow(
        "Precious-metals location",
        preciousMetalsLocation ||
          "Not applicable"
      )}
      ${emailRow(
        "Digital assets",
        digitalAssetsDescription ||
          "Not applicable"
      )}
      ${emailRow(
        "Digital-asset custody",
        digitalAssetCustody ||
          "Not applicable"
      )}
      ${emailRow(
        "Custody jurisdiction",
        custodyJurisdiction ||
          "Not applicable"
      )}

      ${emailLongText(
        "Ownership and source overview",
        ownershipSource
      )}

      ${emailLongText(
        "Transaction and financing purpose",
        purpose
      )}
    `;
  }

  if (
    inquiryType ===
    "hospitalitySale"
  ) {
    transactionDetails = `
      ${emailRow(
        "Property name",
        propertyName ||
          "Not provided"
      )}
      ${emailRow(
        "Property type",
        propertyType
      )}
      ${emailRow(
        "Location",
        propertyLocation
      )}
      ${emailRow(
        "Rooms / keys",
        propertyKeys ||
          "Not provided"
      )}
      ${emailRow(
        "Indicative asking price",
        askingPrice
      )}
      ${emailRow(
        "Market status",
        marketStatus
      )}
      ${emailRow(
        "Annual revenue",
        annualRevenue ||
          "Not provided"
      )}
      ${emailRow(
        "EBITDA / NOI",
        ebitdaNoi ||
          "Not provided"
      )}
      ${emailRow(
        "Operator / brand",
        operatorBrand ||
          "Not provided"
      )}
      ${emailRow(
        "Ownership structure",
        ownershipStructure ||
          "Not provided"
      )}

      ${emailLongText(
        "Ownership / authority to introduce",
        propertyAuthority
      )}

      ${emailLongText(
        "Property and transaction overview",
        propertyOverview
      )}
    `;
  }

  if (
    inquiryType ===
    "hospitalityAcquisition"
  ) {
    transactionDetails = `
      ${emailRow(
        "Target markets",
        acquisitionMarkets
      )}
      ${emailRow(
        "Property type",
        acquisitionPropertyType
      )}
      ${emailRow(
        "Investment range",
        investmentRange
      )}

      ${emailLongText(
        "Acquisition criteria",
        acquisitionCriteria
      )}
    `;
  }

  if (
    inquiryType ===
    "hospitalityDevelopment"
  ) {
    transactionDetails = `
      ${emailRow(
        "Project location",
        developmentLocation
      )}
      ${emailRow(
        "Project type",
        developmentProjectType
      )}
      ${emailRow(
        "Development stage",
        developmentStage
      )}
      ${emailRow(
        "Land ownership / control",
        landControl
      )}
      ${emailRow(
        "Planning / permit status",
        planningStatus
      )}
      ${emailRow(
        "Total development cost",
        totalDevelopmentCost
      )}
      ${emailRow(
        "Capital invested",
        capitalInvested ||
          "Not provided"
      )}
      ${emailRow(
        "Debt required",
        debtRequired ||
          "Not provided"
      )}
      ${emailRow(
        "Equity / JV required",
        equityRequired ||
          "Not provided"
      )}
      ${emailRow(
        "Planned rooms / keys",
        developmentKeys ||
          "Not provided"
      )}
      ${emailRow(
        "Operator / brand",
        developmentOperatorBrand ||
          "Not provided"
      )}

      ${emailLongText(
        "Development overview",
        developmentOverview
      )}
    `;
  }

  return `
    <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
      <h1 style="font-size: 24px;">
        New confidential inquiry
      </h1>

      ${emailRow(
        "Inquiry type",
        inquiryType
      )}

      <hr style="margin: 24px 0; border: 0; border-top: 1px solid #dddddd;" />

      ${emailRow(
        "Name",
        name
      )}
      ${emailRow(
        "Company",
        company ||
          "Not provided"
      )}
      ${emailRow(
        "Email",
        email
      )}
      ${emailRow(
        "Phone",
        phone ||
          "Not provided"
      )}

      <hr style="margin: 24px 0; border: 0; border-top: 1px solid #dddddd;" />

      ${transactionDetails}

      <hr style="margin: 24px 0; border: 0; border-top: 1px solid #dddddd;" />

      <p><strong>Authority confirmed:</strong> Yes</p>
      <p><strong>Privacy consent confirmed:</strong> Yes</p>
      <p><strong>Security warning confirmed:</strong> Yes</p>
      <p><strong>Submitted language:</strong> ${locale.toUpperCase()}</p>
    </div>
  `;
}

function createCustomerConfirmationEmail({
  name,
  inquiryType,
  primaryDetail,
  secondaryDetail,
  confirmation,
}: {
  name: string;
  inquiryType: InquiryType;
  primaryDetail: string;
  secondaryDetail: string;
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
            ${escapeHtml(
              confirmation.subject[
                inquiryType
              ]
            )}
          </h1>
        </div>

        <div style="padding: 32px; font-family: Arial, sans-serif; color: #253047; font-size: 16px; line-height: 1.7;">
          <p>
            ${escapeHtml(
              confirmation.greeting
            )}
            ${escapeHtml(name)},
          </p>

          <p>
            ${escapeHtml(
              confirmation.introduction[
                inquiryType
              ]
            )}
          </p>

          <p>
            ${escapeHtml(
              confirmation.reviewText
            )}
          </p>

          <p>
            ${escapeHtml(
              confirmation.responseTime
            )}
          </p>

          <div style="margin: 28px 0; padding: 20px; background: #f7f4ec; border-left: 4px solid #c7aa60;">
            <p style="margin: 0 0 12px; font-weight: 700;">
              ${escapeHtml(
                confirmation.referenceTitle
              )}
            </p>

            <p style="margin: 6px 0;">
              <strong>
                ${escapeHtml(
                  confirmation.inquiryTypeLabel
                )}:
              </strong>
              ${escapeHtml(
                confirmation.inquiryTypes[
                  inquiryType
                ]
              )}
            </p>

            <p style="margin: 6px 0;">
              <strong>
                ${escapeHtml(
                  confirmation.primaryDetailLabel
                )}:
              </strong>
              ${escapeHtml(
                primaryDetail ||
                  "Not provided"
              )}
            </p>

            <p style="margin: 6px 0;">
              <strong>
                ${escapeHtml(
                  confirmation.secondaryDetailLabel
                )}:
              </strong>
              ${escapeHtml(
                secondaryDetail ||
                  "Not provided"
              )}
            </p>
          </div>

          <p style="font-size: 14px; color: #596174;">
            ${escapeHtml(
              confirmation.securityNotice
            )}
          </p>

          <p style="margin-top: 28px;">
            ${escapeHtml(
              confirmation.closing
            )},<br />

            <strong>
              Gold Bridge Capital
            </strong><br />

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

function getCustomerSummary({
  inquiryType,
  collateralType,
  financingAmount,
  estimatedAssetValue,
  propertyType,
  propertyLocation,
  askingPrice,
  acquisitionMarkets,
  investmentRange,
  developmentLocation,
  totalDevelopmentCost,
}: {
  inquiryType: InquiryType;
  collateralType: CollateralType | null;
  financingAmount: string;
  estimatedAssetValue: string;
  propertyType: string;
  propertyLocation: string;
  askingPrice: string;
  acquisitionMarkets: string;
  investmentRange: string;
  developmentLocation: string;
  totalDevelopmentCost: string;
}) {
  if (
    inquiryType ===
    "assetBackedFinancing"
  ) {
    return {
      primaryDetail:
        collateralType ||
        "Not provided",
      secondaryDetail:
        `${financingAmount} requested / ${estimatedAssetValue} estimated collateral`,
    };
  }

  if (
    inquiryType ===
    "hospitalitySale"
  ) {
    return {
      primaryDetail:
        `${propertyType} – ${propertyLocation}`,
      secondaryDetail:
        askingPrice,
    };
  }

  if (
    inquiryType ===
    "hospitalityAcquisition"
  ) {
    return {
      primaryDetail:
        acquisitionMarkets,
      secondaryDetail:
        investmentRange,
    };
  }

  return {
    primaryDetail:
      developmentLocation,
    secondaryDetail:
      totalDevelopmentCost,
  };
}

function emailRow(
  label: string,
  value: string
) {
  return `
    <p>
      <strong>${escapeHtml(
        label
      )}:</strong>
      ${escapeHtml(value)}
    </p>
  `;
}

function emailLongText(
  label: string,
  value: string
) {
  return `
    <p>
      <strong>${escapeHtml(
        label
      )}:</strong>
    </p>

    <p>
      ${escapeHtml(value).replace(
        /\n/g,
        "<br />"
      )}
    </p>
  `;
}

function getSupportedLocale(
  value: unknown
): SupportedLocale {
  if (
    value === "en" ||
    value === "de" ||
    value === "it"
  ) {
    return value;
  }

  return "en";
}

function getInquiryType(
  value: unknown
): InquiryType | null {
  if (
    value ===
      "assetBackedFinancing" ||
    value ===
      "hospitalitySale" ||
    value ===
      "hospitalityAcquisition" ||
    value ===
      "hospitalityDevelopment"
  ) {
    return value;
  }

  return null;
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

function getClientIp(
  request: Request
) {
  const forwardedFor =
    request.headers.get(
      "x-forwarded-for"
    );

  if (forwardedFor) {
    return (
      forwardedFor
        .split(",")[0]
        ?.trim() ||
      "unknown"
    );
  }

  return (
    request.headers
      .get("x-real-ip")
      ?.trim() ||
    request.headers
      .get(
        "cf-connecting-ip"
      )
      ?.trim() ||
    "unknown"
  );
}

function isRateLimited(
  identifier: string
) {
  const now =
    Date.now();

  const existingEntry =
    rateLimitStore.get(
      identifier
    );

  if (
    !existingEntry ||
    existingEntry.resetAt <= now
  ) {
    rateLimitStore.set(
      identifier,
      {
        count: 1,
        resetAt:
          now +
          RATE_LIMIT_WINDOW_MS,
      }
    );

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
  if (
    typeof value !==
    "string"
  ) {
    return "";
  }

  return value
    .trim()
    .slice(
      0,
      maximumLength
    );
}

function isValidEmail(
  value: string
) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    value
  );
}

function escapeHtml(
  value: unknown
) {
  return String(
    value ?? ""
  )
    .replaceAll(
      "&",
      "&amp;"
    )
    .replaceAll(
      "<",
      "&lt;"
    )
    .replaceAll(
      ">",
      "&gt;"
    )
    .replaceAll(
      '"',
      "&quot;"
    )
    .replaceAll(
      "'",
      "&#039;"
    );
}