"use client";

import { useTranslations } from "next-intl";

import Icon, { type IconName } from "@/components/shared/Icon";

const advantages = [
  {
    key: "confidential",
    icon: "shield" as IconName,
  },
  {
    key: "international",
    icon: "network" as IconName,
  },
  {
    key: "tailored",
    icon: "structure" as IconName,
  },
  {
    key: "review",
    icon: "review" as IconName,
  },
] as const;

export default function ApproachSection() {
  const t = useTranslations("Approach");

  return (
    <section id="approach" className="section approach-section">
      <div className="section-decoration section-decoration-left" />

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

        <div className="advantage-grid">
          {advantages.map((advantage) => (
            <article className="advantage-card" key={advantage.key}>
              <div className="advantage-card-top">
                <span className="advantage-icon">
                  <Icon name={advantage.icon} />
                </span>

                <span className="advantage-number">
                  {t(`advantages.${advantage.key}.number`)}
                </span>
              </div>

              <h3>{t(`advantages.${advantage.key}.title`)}</h3>
              <p>{t(`advantages.${advantage.key}.text`)}</p>

              <span className="advantage-card-line" aria-hidden="true" />
            </article>
          ))}
        </div>

        <div className="approach-statement">
          <span className="statement-mark" aria-hidden="true">
            “
          </span>

          <p>{t("statement")}</p>

          <span className="statement-signature">
            {t("signature")}
          </span>
        </div>
      </div>
    </section>
  );
}