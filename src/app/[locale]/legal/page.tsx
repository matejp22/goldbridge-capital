import { getTranslations, setRequestLocale } from "next-intl/server";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

type LegalPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

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
            <span className="section-kicker">{t("kicker")}</span>
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