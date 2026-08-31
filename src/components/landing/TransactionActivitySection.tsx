"use client";

import { useTranslations } from "next-intl";

import Icon, { type IconName } from "@/components/shared/Icon";

const activityItems = [
  {
    key: "opportunities",
    number: "01",
    icon: "building" as IconName,
  },
  {
    key: "acquisitionCriteria",
    number: "02",
    icon: "search" as IconName,
  },
  {
    key: "newSubmissions",
    number: "03",
    icon: "document" as IconName,
  },
] as const;

export default function TransactionActivitySection() {
  const t = useTranslations("TransactionActivity");

  return (
    <section
      id="transaction-activity"
      className="section transaction-activity-section"
    >
      <div
        className="transaction-activity-background"
        aria-hidden="true"
      >
        <div className="transaction-activity-glow" />
        <div className="transaction-activity-pattern" />
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

        <div className="transaction-activity-grid">
          {activityItems.map((item) => (
            <article
              key={item.key}
              className="transaction-activity-card"
            >
              <div className="transaction-activity-card-top">
                <span className="transaction-activity-icon">
                  <Icon name={item.icon} />
                </span>

                <span className="transaction-activity-number">
                  {item.number}
                </span>
              </div>

              <span className="transaction-activity-status">
                {t(`items.${item.key}.status`)}
              </span>

              <h3>{t(`items.${item.key}.title`)}</h3>

              <p>{t(`items.${item.key}.text`)}</p>

              <div className="transaction-activity-detail">
                <span>
                  {t(`items.${item.key}.detailLabel`)}
                </span>

                <strong>
                  {t(`items.${item.key}.detailValue`)}
                </strong>
              </div>
            </article>
          ))}
        </div>

        <div className="transaction-activity-principle">
          <span className="transaction-activity-principle-icon">
            <Icon name="shield" />
          </span>

          <div>
            <span className="transaction-activity-principle-label">
              {t("principle.label")}
            </span>

            <p>{t("principle.text")}</p>
          </div>
        </div>

        <div className="transaction-activity-actions">
          <a href="#inquiry" className="button button-primary">
            {t("actions.submit")}
            <Icon name="arrow" />
          </a>

          <a
            href="#selected-opportunities"
            className="button transaction-activity-secondary-button"
          >
            {t("actions.view")}
          </a>
        </div>
      </div>
    </section>
  );
}