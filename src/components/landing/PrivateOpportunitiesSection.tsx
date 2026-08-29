"use client";

import { useTranslations } from "next-intl";

import Icon, { type IconName } from "@/components/shared/Icon";

const categories = [
  {
    key: "hotels",
    icon: "corporate" as IconName,
  },
  {
    key: "resorts",
    icon: "structure" as IconName,
  },
  {
    key: "boutique",
    icon: "star" as IconName,
  },
  {
    key: "valueAdd",
    icon: "capital" as IconName,
  },
  {
    key: "development",
    icon: "building" as IconName,
  },
  {
    key: "land",
    icon: "location" as IconName,
  },
] as const;

export default function PrivateOpportunitiesSection() {
  const t = useTranslations("PrivateOpportunities");

  return (
    <section
      id="private-opportunities"
      className="section private-opportunities-section"
    >
      <div className="private-opportunities-background" aria-hidden="true">
        <div className="private-opportunities-glow" />
        <div className="private-opportunities-pattern" />
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

        <div className="private-opportunities-grid">
          {categories.map((category) => (
            <article
              key={category.key}
              className="private-opportunity-card"
            >
              <span className="private-opportunity-icon">
                <Icon name={category.icon} />
              </span>

              <h3>{t(`categories.${category.key}.title`)}</h3>

              <p>{t(`categories.${category.key}.text`)}</p>
            </article>
          ))}
        </div>

        <div className="private-opportunities-bottom">
          <div>
            <span className="private-opportunities-bottom-label">
              {t("bottom.label")}
            </span>

            <h3>{t("bottom.title")}</h3>

            <p>{t("bottom.text")}</p>
          </div>

          <a href="#inquiry" className="button button-secondary">
            {t("bottom.button")}
          </a>
        </div>

        <div className="private-opportunities-note">
          <span>
            <Icon name="shield" />
          </span>

          <p>{t("note")}</p>
        </div>
      </div>
    </section>
  );
}