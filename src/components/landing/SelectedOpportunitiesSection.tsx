"use client";

import { useTranslations } from "next-intl";

import Icon from "@/components/shared/Icon";

const opportunities = [
  {
    key: "ambient",
    country: "SI",
    status: "confidential",
    image: "/images/opportunities/ambient-hotel.jpg",
  },
  {
    key: "boskinac",
    country: "HR",
    status: "selected",
    image: "/images/opportunities/boskinac-hotel.jpg",
  },
  {
    key: "milna",
    country: "HR",
    status: "sale",
    image: "/images/opportunities/milna-hotel.jpg",
  },
] as const;

export default function SelectedOpportunitiesSection() {
  const t = useTranslations("SelectedOpportunities");

  return (
    <section
      id="selected-opportunities"
      className="section selected-opportunities-section"
    >
      <div
        className="selected-opportunities-background"
        aria-hidden="true"
      >
        <div className="selected-opportunities-glow" />
        <div className="selected-opportunities-grid-pattern" />
      </div>

      <div className="container">
        <div className="section-heading">
          <div className="section-kicker">
            <span className="kicker-line" />
            <span>{t("kicker")}</span>
          </div>

          <h2>
            {t("title.main")}
            <span>{t("title.highlight")}</span>
          </h2>

          <div className="selected-opportunities-introduction">
            <p>{t("introduction.first")}</p>
            <p>{t("introduction.second")}</p>
          </div>
        </div>

        <div className="selected-opportunities-grid">
          {opportunities.map((opportunity) => (
            <article
              key={opportunity.key}
              className="selected-opportunity-card"
            >
              <div className="selected-opportunity-media">
                <div
                 <div
  className={`selected-opportunity-image selected-opportunity-image-${opportunity.key}`}
  style={{
    backgroundImage: `linear-gradient(
      180deg,
      rgba(6, 16, 30, 0.02),
      rgba(6, 16, 30, 0.62)
    ), url("${opportunity.image}")`,
  }}
  aria-hidden="true"
/>

                <div className="selected-opportunity-media-top">
                  <span className="selected-opportunity-country">
                    {opportunity.country}
                  </span>

                  <span
                    className={`selected-opportunity-status selected-opportunity-status-${opportunity.status}`}
                  >
                    {t(
                      `opportunities.${opportunity.key}.status`
                    )}
                  </span>
                </div>
              </div>

              <div className="selected-opportunity-content">
                <span className="selected-opportunity-location">
                  {t(
                    `opportunities.${opportunity.key}.location`
                  )}
                </span>

                <h3>
                  {t(
                    `opportunities.${opportunity.key}.title`
                  )}
                </h3>

                <p className="selected-opportunity-description">
                  {t(
                    `opportunities.${opportunity.key}.description`
                  )}
                </p>

                <div className="selected-opportunity-metrics">
                  <div>
                    <span>
                      {t("labels.assetType")}
                    </span>
                    <strong>
                      {t(
                        `opportunities.${opportunity.key}.assetType`
                      )}
                    </strong>
                  </div>

                  <div>
                    <span>
                      {t("labels.keys")}
                    </span>
                    <strong>
                      {t(
                        `opportunities.${opportunity.key}.keys`
                      )}
                    </strong>
                  </div>

                  <div>
                    <span>
                      {t("labels.pricing")}
                    </span>
                    <strong>
                      {t(
                        `opportunities.${opportunity.key}.pricing`
                      )}
                    </strong>
                  </div>
                </div>

                <div className="selected-opportunity-highlights">
                  <span>
                    {t(
                      `opportunities.${opportunity.key}.highlights.first`
                    )}
                  </span>

                  <span>
                    {t(
                      `opportunities.${opportunity.key}.highlights.second`
                    )}
                  </span>

                  <span>
                    {t(
                      `opportunities.${opportunity.key}.highlights.third`
                    )}
                  </span>
                </div>

                <a
                  href="#inquiry"
                  className="selected-opportunity-link"
                >
                  <span>
                    {t("actions.details")}
                  </span>

                  <Icon name="arrow" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="selected-opportunities-bottom">
          <div>
            <span className="selected-opportunities-bottom-label">
              {t("bottom.label")}
            </span>

            <h3>{t("bottom.title")}</h3>

            <p>{t("bottom.text")}</p>
          </div>

          <a href="#inquiry" className="button button-secondary">
            {t("actions.criteria")}
          </a>
        </div>

        <div className="selected-opportunities-disclaimer">
          <span>
            <Icon name="shield" />
          </span>

          <p>{t("disclaimer")}</p>
        </div>
      </div>
    </section>
  );
}