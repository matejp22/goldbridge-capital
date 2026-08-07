"use client";

import { useTranslations } from "next-intl";

import Icon, { type IconName } from "@/components/shared/Icon";

const serviceKeys = [
  {
    key: "sellSide",
    icon: "corporate" as IconName,
  },
  {
    key: "buySide",
    icon: "investor" as IconName,
  },
  {
    key: "offMarket",
    icon: "shield" as IconName,
  },
  {
    key: "coordination",
    icon: "network" as IconName,
  },
] as const;

const assetKeys = [
  "hotels",
  "resorts",
  "boutique",
  "aparthotels",
  "serviced",
  "portfolios",
  "valueAdd",
  "developmentLand",
] as const;

export default function HospitalityRealEstateSection() {
  const t = useTranslations("HospitalityRealEstate");

  return (
    <section
      id="hospitality-real-estate"
      className="section hospitality-real-estate-section"
    >
      <div
        className="hospitality-real-estate-background"
        aria-hidden="true"
      >
        <div className="hospitality-real-estate-glow" />
        <div className="hospitality-real-estate-orbit" />
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

        <div className="hospitality-real-estate-layout">
          <div className="hospitality-services-grid">
            {serviceKeys.map((service) => (
              <article
                className="hospitality-service-card"
                key={service.key}
              >
                <span className="hospitality-service-icon">
                  <Icon name={service.icon} />
                </span>

                <span className="hospitality-service-number">
                  {t(`services.${service.key}.number`)}
                </span>

                <h3>{t(`services.${service.key}.title`)}</h3>

                <p>{t(`services.${service.key}.text`)}</p>
              </article>
            ))}
          </div>

          <aside className="hospitality-assets-card">
            <span className="hospitality-assets-overline">
              {t("assets.overline")}
            </span>

            <h3>{t("assets.title")}</h3>

            <p>{t("assets.text")}</p>

            <div className="hospitality-assets-list">
              {assetKeys.map((asset) => (
                <div
                  className="hospitality-asset-item"
                  key={asset}
                >
                  <span>
                    <Icon name="check" />
                  </span>

                  <p>{t(`assets.items.${asset}`)}</p>
                </div>
              ))}
            </div>

            <a
              href="#inquiry"
              className="button button-primary"
            >
              <span>{t("assets.button")}</span>
              <Icon name="arrow" className="button-icon" />
            </a>
          </aside>
        </div>

        <div className="hospitality-legal-note">
          <span>{t("notice.label")}</span>
          <p>{t("notice.text")}</p>
        </div>
      </div>
    </section>
  );
}