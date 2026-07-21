import { getTranslations, setRequestLocale } from "next-intl/server";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

type PrivacyPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

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
            <span className="section-kicker">{t("kicker")}</span>

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