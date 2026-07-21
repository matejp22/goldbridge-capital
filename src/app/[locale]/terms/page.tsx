import { getTranslations, setRequestLocale } from "next-intl/server";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

type TermsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function TermsPage({
  params,
}: TermsPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "Terms",
  });

  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="legal-page">
        <div className="container legal-page-container">
          <header className="legal-page-header">
            <span className="section-kicker">{t("kicker")}</span>

            <h1>{t("title")}</h1>

            <p>{t("updated")}</p>
          </header>

          <div className="legal-content">
            <section>
              <h2>{t("operator.title")}</h2>

              <p>{t("operator.text")}</p>

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
              <h2>{t("acceptance.title")}</h2>
              <p>{t("acceptance.text")}</p>
            </section>

            <section>
              <h2>{t("information.title")}</h2>
              <p>{t("information.text")}</p>
            </section>

            <section>
              <h2>{t("noOffer.title")}</h2>
              <p>{t("noOffer.text")}</p>
            </section>

            <section>
              <h2>{t("eligibility.title")}</h2>
              <p>{t("eligibility.text")}</p>
            </section>

            <section>
              <h2>{t("inquiries.title")}</h2>

              <p>{t("inquiries.introduction")}</p>

              <ul>
                <li>{t("inquiries.items.accuracy")}</li>
                <li>{t("inquiries.items.authority")}</li>
                <li>{t("inquiries.items.lawful")}</li>
                <li>{t("inquiries.items.noCommitment")}</li>
              </ul>
            </section>

            <section>
              <h2>{t("thirdParties.title")}</h2>
              <p>{t("thirdParties.text")}</p>
            </section>

            <section>
              <h2>{t("intellectualProperty.title")}</h2>
              <p>{t("intellectualProperty.text")}</p>
            </section>

            <section>
              <h2>{t("prohibitedUse.title")}</h2>

              <p>{t("prohibitedUse.introduction")}</p>

              <ul>
                <li>{t("prohibitedUse.items.unlawful")}</li>
                <li>{t("prohibitedUse.items.falseInformation")}</li>
                <li>{t("prohibitedUse.items.security")}</li>
                <li>{t("prohibitedUse.items.copying")}</li>
                <li>{t("prohibitedUse.items.impersonation")}</li>
              </ul>
            </section>

            <section>
              <h2>{t("availability.title")}</h2>
              <p>{t("availability.text")}</p>
            </section>

            <section>
              <h2>{t("liability.title")}</h2>
              <p>{t("liability.text")}</p>
            </section>

            <section>
              <h2>{t("indemnity.title")}</h2>
              <p>{t("indemnity.text")}</p>
            </section>

            <section>
              <h2>{t("privacy.title")}</h2>

              <p>
                {t("privacy.text")}{" "}
                <a href={`/${locale}/privacy`}>
                  {t("privacy.link")}
                </a>
              </p>
            </section>

            <section>
              <h2>{t("changes.title")}</h2>
              <p>{t("changes.text")}</p>
            </section>

            <section>
              <h2>{t("law.title")}</h2>
              <p>{t("law.text")}</p>
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