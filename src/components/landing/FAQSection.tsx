"use client";

import { useTranslations } from "next-intl";

import Icon from "@/components/shared/Icon";

const faqItems = [
  "collateral",
  "sale",
  "custody",
  "amount",
  "term",
  "pricing",
  "timing",
  "acceptance",
  "repayment",
] as const;

export default function FAQSection() {
  const t = useTranslations("FAQ");

  return (
    <section id="faq" className="section faq-section">
      <div className="faq-background" aria-hidden="true">
        <div className="faq-glow faq-glow-one" />
        <div className="faq-glow faq-glow-two" />
        <div className="faq-pattern" />
      </div>

      <div className="container">
        <div className="section-heading section-heading-split">
          <div>
            <div className="section-kicker">
              <span className="kicker-line" />
              <span>{t("kicker")}</span>
            </div>

            <h2>
              {t("title.main")}
              <span>{t("title.highlight")}</span>
            </h2>
          </div>

          <div className="section-introduction">
            <p>{t("introduction.first")}</p>
            <p>{t("introduction.second")}</p>
          </div>
        </div>

        <div className="faq-layout">
          <div className="faq-list">
            {faqItems.map((item) => (
              <details className="faq-item" key={item}>
                <summary>
                  <span className="faq-question-number">
                    {t(`items.${item}.number`)}
                  </span>

                  <span className="faq-question">
                    {t(`items.${item}.question`)}
                  </span>

                  <span className="faq-toggle" aria-hidden="true">
                    <span />
                    <span />
                  </span>
                </summary>

                <div className="faq-answer">
                  <p>{t(`items.${item}.answer`)}</p>
                </div>
              </details>
            ))}
          </div>

          <aside className="faq-sidebar">
            <div className="faq-sidebar-card">
              <span className="faq-sidebar-icon">
                <Icon name="shield" />
              </span>

              <span className="faq-sidebar-overline">
                {t("sidebar.overline")}
              </span>

              <h3>{t("sidebar.title")}</h3>

              <p>{t("sidebar.text")}</p>

              <a href="#inquiry" className="button button-primary">
                <span>{t("sidebar.button")}</span>
                <Icon name="arrow" className="button-icon" />
              </a>
            </div>

            <div className="faq-disclaimer-card">
              <span className="faq-disclaimer-label">
                {t("disclaimer.label")}
              </span>

              <p>{t("disclaimer.text")}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}