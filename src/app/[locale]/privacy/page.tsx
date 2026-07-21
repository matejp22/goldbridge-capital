import type { Metadata } from "next";
import {
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

type SupportedLocale = "en" | "de" | "it";

type PrivacyPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const baseUrl = "https://goldbridge-capital.com";

const metadataByLocale: Record<
  SupportedLocale,
  {
    title: string;
    description: string;
    ogLocale: string;
  }
> = {
  en: {
    title: "Privacy Policy | Gold Bridge Capital",
    description:
      "Learn how Gold Bridge Capital collects, uses, protects and retains personal data submitted through its confidential financing inquiry form.",
    ogLocale: "en_US",
  },
  de: {
    title: "Datenschutzerklärung | Gold Bridge Capital",
    description:
      "Erfahren Sie, wie Gold Bridge Capital personenbezogene Daten aus vertraulichen Finanzierungsanfragen erhebt, verwendet, schützt und speichert.",
    ogLocale: "de_DE",
  },
  it: {
    title: "Informativa sulla privacy | Gold Bridge Capital",
    description:
      "Scopri come Gold Bridge Capital raccoglie, utilizza, protegge e conserva i dati personali inviati tramite il modulo di richiesta di finanziamento.",
    ogLocale: "it_IT",
  },
};

function getSupportedLocale(locale: string): SupportedLocale {
  if (locale === "de" || locale === "it") {
    return locale;
  }

  return "en";
}

export async function generateMetadata({
  params,
}: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;
  const supportedLocale = getSupportedLocale(locale);

  const metadata = metadataByLocale[supportedLocale];
  const canonicalUrl = `${baseUrl}/${supportedLocale}/privacy`;

  return {
    title: metadata.title,
    description: metadata.description,

    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en/privacy`,
        de: `${baseUrl}/de/privacy`,
        it: `${baseUrl}/it/privacy`,
        "x-default": `${baseUrl}/en/privacy`,
      },
    },

    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: metadata.title,
      description: metadata.description,
      siteName: "Gold Bridge Capital",
      locale: metadata.ogLocale,
      alternateLocale: ["en_US", "de_DE", "it_IT"].filter(
        (item) => item !== metadata.ogLocale
      ),
    },

    twitter: {
      card: "summary",
      title: metadata.title,
      description: metadata.description,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default async function PrivacyPage({
  params,
}: PrivacyPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "Privacy",
  });

  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="legal-page">
        <div className="container legal-page-container">
          <div className="legal-page-header">
            <span className="section-kicker">
              {t("kicker")}
            </span>

            <h1>{t("title")}</h1>

            <p>{t("updated")}</p>
          </div>

          <div className="legal-content">
            <section>
              <h2>{t("controller.title")}</h2>

              <p>{t("controller.introduction")}</p>

              <address>
                <strong>Matej Pavič</strong>
                <br />
                {t("controller.location")}
                <br />
                <a href="mailto:privacy@goldbridge-capital.com">
                  privacy@goldbridge-capital.com
                </a>
              </address>

              <p>{t("controller.formationNotice")}</p>
            </section>

            <section>
              <h2>{t("data.title")}</h2>

              <p>{t("data.introduction")}</p>

              <ul>
                <li>{t("data.items.name")}</li>
                <li>{t("data.items.company")}</li>
                <li>{t("data.items.email")}</li>
                <li>{t("data.items.phone")}</li>
                <li>{t("data.items.transaction")}</li>
                <li>{t("data.items.gold")}</li>
                <li>{t("data.items.message")}</li>
              </ul>
            </section>

            <section>
              <h2>{t("purpose.title")}</h2>

              <p>{t("purpose.introduction")}</p>

              <ul>
                <li>{t("purpose.items.review")}</li>
                <li>{t("purpose.items.response")}</li>
                <li>{t("purpose.items.communication")}</li>
                <li>{t("purpose.items.security")}</li>
                <li>{t("purpose.items.legal")}</li>
              </ul>
            </section>

            <section>
              <h2>{t("legalBasis.title")}</h2>

              <p>{t("legalBasis.text")}</p>
            </section>

            <section>
              <h2>{t("recipients.title")}</h2>

              <p>{t("recipients.introduction")}</p>

              <ul>
                <li>{t("recipients.items.email")}</li>
                <li>{t("recipients.items.railway")}</li>
                <li>{t("recipients.items.professionals")}</li>
                <li>{t("recipients.items.authorities")}</li>
              </ul>

              <p>{t("recipients.noSale")}</p>
            </section>

            <section>
              <h2>{t("transfers.title")}</h2>

              <p>{t("transfers.text")}</p>
            </section>

            <section>
              <h2>{t("retention.title")}</h2>

              <p>{t("retention.text")}</p>
            </section>

            <section>
              <h2>{t("rights.title")}</h2>

              <p>{t("rights.introduction")}</p>

              <ul>
                <li>{t("rights.items.access")}</li>
                <li>{t("rights.items.rectification")}</li>
                <li>{t("rights.items.erasure")}</li>
                <li>{t("rights.items.restriction")}</li>
                <li>{t("rights.items.objection")}</li>
                <li>{t("rights.items.portability")}</li>
                <li>{t("rights.items.complaint")}</li>
              </ul>

              <p>{t("rights.contact")}</p>
            </section>

            <section>
              <h2>{t("analytics.title")}</h2>

              <p>{t("analytics.text")}</p>
            </section>

            <section>
              <h2>{t("security.title")}</h2>

              <p>{t("security.text")}</p>
            </section>

            <section>
              <h2>{t("changes.title")}</h2>

              <p>{t("changes.text")}</p>
            </section>

            <section>
              <h2>{t("contact.title")}</h2>

              <p>
                {t("contact.text")}{" "}
                <a href="mailto:privacy@goldbridge-capital.com">
                  privacy@goldbridge-capital.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}