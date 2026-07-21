import type { Metadata } from "next";
import {
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

type SupportedLocale = "en" | "de" | "it";

type LegalPageProps = {
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
    title: "Legal Notice | Gold Bridge Capital",
    description:
      "Legal information about the operator, project status, website use, liability and contact details for Gold Bridge Capital.",
    ogLocale: "en_US",
  },
  de: {
    title: "Rechtliche Hinweise | Gold Bridge Capital",
    description:
      "Rechtliche Informationen zum Betreiber, Projektstatus, zur Nutzung der Website, Haftung und zu den Kontaktdaten von Gold Bridge Capital.",
    ogLocale: "de_DE",
  },
  it: {
    title: "Note legali | Gold Bridge Capital",
    description:
      "Informazioni legali sul gestore, sullo stato del progetto, sull’utilizzo del sito, sulla responsabilità e sui contatti di Gold Bridge Capital.",
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
}: LegalPageProps): Promise<Metadata> {
  const { locale } = await params;
  const supportedLocale = getSupportedLocale(locale);

  const metadata = metadataByLocale[supportedLocale];
  const canonicalUrl = `${baseUrl}/${supportedLocale}/legal`;

  return {
    title: metadata.title,
    description: metadata.description,

    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en/legal`,
        de: `${baseUrl}/de/legal`,
        it: `${baseUrl}/it/legal`,
        "x-default": `${baseUrl}/en/legal`,
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

export default async function LegalPage({
  params,
}: LegalPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "Legal",
  });

  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="legal-page">
        <div className="container legal-page-container">
          <header className="legal-page-header">
            <span className="section-kicker">
              {t("kicker")}
            </span>

            <h1>{t("title")}</h1>

            <p>{t("updated")}</p>
          </header>

          <div className="legal-content">
            <section>
              <h2>{t("operator.title")}</h2>

              <address>
                <strong>Matej Pavič</strong>
                <br />
                {t("operator.location")}
                <br />
                <a href="mailto:inquiries@goldbridge-capital.com">
                  inquiries@goldbridge-capital.com
                </a>
              </address>

              <p>{t("operator.formationNotice")}</p>
            </section>

            <section>
              <h2>{t("project.title")}</h2>
              <p>{t("project.text")}</p>
            </section>

            <section>
              <h2>{t("services.title")}</h2>
              <p>{t("services.text")}</p>
            </section>

            <section>
              <h2>{t("noRegulatedService.title")}</h2>
              <p>{t("noRegulatedService.text")}</p>
            </section>

            <section>
              <h2>{t("thirdParties.title")}</h2>
              <p>{t("thirdParties.text")}</p>
            </section>

            <section>
              <h2>{t("accuracy.title")}</h2>
              <p>{t("accuracy.text")}</p>
            </section>

            <section>
              <h2>{t("liability.title")}</h2>
              <p>{t("liability.text")}</p>
            </section>

            <section>
              <h2>{t("links.title")}</h2>
              <p>{t("links.text")}</p>
            </section>

            <section>
              <h2>{t("copyright.title")}</h2>
              <p>{t("copyright.text")}</p>
            </section>

            <section>
              <h2>{t("privacy.title")}</h2>

              <p>
                <a href={`/${locale}/privacy`}>
                  {t("privacy.link")}
                </a>
              </p>
            </section>

            <section>
              <h2>{t("terms.title")}</h2>

              <p>
                <a href={`/${locale}/terms`}>
                  {t("terms.link")}
                </a>
              </p>
            </section>

            <section>
              <h2>{t("contact.title")}</h2>

              <p>
                {t("contact.text")}{" "}
                <a href="mailto:inquiries@goldbridge-capital.com">
                  inquiries@goldbridge-capital.com
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