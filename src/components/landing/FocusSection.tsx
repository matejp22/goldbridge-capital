"use client";

import { useTranslations } from "next-intl";

import Icon, { type IconName } from "@/components/shared/Icon";

const focusAreas = [
  {
    key: "financing",
    icon: "capital" as IconName,
    href: "#asset-backed-financing",
  },
  {
    key: "realEstate",
    icon: "corporate" as IconName,
    href: "#hospitality-real-estate",
  },
  {
    key: "development",
    icon: "structure" as IconName,
    href: "#hospitality-development",
  },
] as const;

export default function FocusSection() {
  const t = useTranslations("Focus");

  return (
    <section id="focus" className="section focus-section">
      <div className="focus-background" aria-hidden="true">
        <div className="focus-glow" />
        <div className="focus-grid-pattern" />
      </div>

      <div className="container">
        <div className="section-heading section-heading-centred">
          <div className="section-kicker section-kicker-centred">
            <span className="kicker-line" />
            <span>{t("kicker")}</span>
            <span className="kicker-line" />
          </div>

          <h2>
            {t("title.main")}
            <span>{t("title.highlight")}</span>
          </h2>

          <p>{t("introduction")}</p>
        </div>

        <div className="focus-grid">
          {focusAreas.map((area) => (
            <article className="focus-card" key={area.key}>
              <div className="focus-card-top">
                <span className="focus-card-icon">
                  <Icon name={area.icon} />
                </span>

                <span className="focus-card-number">
                  {t(`areas.${area.key}.number`)}
                </span>
              </div>

              <span className="focus-card-overline">
                {t(`areas.${area.key}.overline`)}
              </span>

              <h3>{t(`areas.${area.key}.title`)}</h3>

              <p>{t(`areas.${area.key}.text`)}</p>

              <a href={area.href} className="focus-card-link">
                <span>{t(`areas.${area.key}.button`)}</span>
                <Icon name="arrow" />
              </a>

              <span
                className="focus-card-decoration"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>

        <div className="focus-note">
          <span className="focus-note-icon">
            <Icon name="shield" />
          </span>

          <p>{t("note")}</p>
        </div>
      </div>
    </section>
  );
}