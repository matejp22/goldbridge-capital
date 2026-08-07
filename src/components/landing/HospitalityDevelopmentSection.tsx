"use client";

import { useTranslations } from "next-intl";

import Icon, { type IconName } from "@/components/shared/Icon";

const capitalAreas = [
  {
    key: "debt",
    icon: "capital" as IconName,
  },
  {
    key: "equity",
    icon: "investor" as IconName,
  },
  {
    key: "jointVenture",
    icon: "network" as IconName,
  },
  {
    key: "strategic",
    icon: "corporate" as IconName,
  },
] as const;

const projectKeys = [
  "newHotels",
  "resorts",
  "conversions",
  "redevelopments",
  "repositioning",
  "extensions",
  "mixedUse",
  "brandedResidences",
  "developmentLand",
] as const;

export default function HospitalityDevelopmentSection() {
  const t = useTranslations("HospitalityDevelopment");

  return (
    <section
      id="hospitality-development"
      className="section hospitality-development-section"
    >
      <div
        className="hospitality-development-background"
        aria-hidden="true"
      >
        <div className="hospitality-development-glow-one" />
        <div className="hospitality-development-glow-two" />
        <div className="hospitality-development-grid-pattern" />
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

        <div className="hospitality-development-layout">
          <aside className="development-project-card">
            <span className="development-project-overline">
              {t("projects.overline")}
            </span>

            <h3>{t("projects.title")}</h3>

            <p>{t("projects.text")}</p>

            <div className="development-project-list">
              {projectKeys.map((project) => (
                <div
                  className="development-project-item"
                  key={project}
                >
                  <span>
                    <Icon name="check" />
                  </span>

                  <p>{t(`projects.items.${project}`)}</p>
                </div>
              ))}
            </div>
          </aside>

          <div className="development-capital-grid">
            {capitalAreas.map((area) => (
              <article
                className="development-capital-card"
                key={area.key}
              >
                <div className="development-capital-card-top">
                  <span className="development-capital-icon">
                    <Icon name={area.icon} />
                  </span>

                  <span className="development-capital-number">
                    {t(`capital.${area.key}.number`)}
                  </span>
                </div>

                <h3>{t(`capital.${area.key}.title`)}</h3>

                <p>{t(`capital.${area.key}.text`)}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="development-bottom">
          <div>
            <span className="development-bottom-label">
              {t("bottom.label")}
            </span>

            <h3>{t("bottom.title")}</h3>

            <p>{t("bottom.text")}</p>
          </div>

          <a
            href="#inquiry"
            className="button button-primary"
          >
            <span>{t("bottom.button")}</span>
            <Icon name="arrow" className="button-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}