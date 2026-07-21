"use client";

import { useTranslations } from "next-intl";

import Icon, { type IconName } from "@/components/shared/Icon";

const requirementCards = [
  {
    key: "collateral",
    icon: "gold" as IconName,
    items: ["form", "purity", "location", "value"],
  },
  {
    key: "ownership",
    icon: "document" as IconName,
    items: ["proof", "provenance", "encumbrances", "authority"],
  },
  {
    key: "compliance",
    icon: "shield" as IconName,
    items: ["identification", "corporate", "beneficialOwnership", "wealth"],
  },
  {
    key: "financing",
    icon: "capital" as IconName,
    items: ["amount", "purpose", "term", "repayment"],
  },
] as const;

const sidebarItems = [
  "ownership",
  "gold",
  "purpose",
  "repayment",
] as const;

export default function RequirementsSection() {
  const t = useTranslations("Requirements");

  return (
    <section id="requirements" className="section requirements-section">
      <div className="requirements-decoration" aria-hidden="true">
        <div className="requirements-circle requirements-circle-one" />
        <div className="requirements-circle requirements-circle-two" />
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

        <div className="requirements-layout">
          <div className="requirements-main">
            {requirementCards.map((card) => (
              <article className="requirement-card" key={card.key}>
                <div className="requirement-card-header">
                  <span className="requirement-card-icon">
                    <Icon name={card.icon} />
                  </span>

                  <div>
                    <span className="requirement-card-index">
                      {t(`cards.${card.key}.number`)}
                    </span>

                    <h3>{t(`cards.${card.key}.title`)}</h3>
                  </div>
                </div>

                <p>{t(`cards.${card.key}.text`)}</p>

                <ul className="requirement-list">
                  {card.items.map((item) => (
                    <li key={item}>
                      <span className="requirement-check">
                        <Icon name="check" />
                      </span>

                      <div>
                        <strong>
                          {t(`cards.${card.key}.items.${item}.title`)}
                        </strong>

                        <span>
                          {t(`cards.${card.key}.items.${item}.text`)}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <aside className="requirements-sidebar">
            <div className="requirements-sidebar-card">
              <span className="requirements-sidebar-overline">
                {t("sidebar.overline")}
              </span>

              <h3>{t("sidebar.title")}</h3>

              <p>{t("sidebar.text")}</p>

              <div className="requirements-sidebar-divider" />

              <div className="requirements-sidebar-items">
                {sidebarItems.map((item) => (
                  <div className="requirements-sidebar-item" key={item}>
                    <span>
                      <Icon name="check" />
                    </span>

                    <p>{t(`sidebar.items.${item}`)}</p>
                  </div>
                ))}
              </div>

              <a href="#inquiry" className="button button-primary">
                <span>{t("sidebar.button")}</span>
                <Icon name="arrow" className="button-icon" />
              </a>
            </div>

            <div className="requirements-warning-card">
              <span className="requirements-warning-icon">
                <Icon name="shield" />
              </span>

              <div>
                <strong>{t("warning.title")}</strong>
                <p>{t("warning.text")}</p>
              </div>
            </div>
          </aside>
        </div>

        <div className="requirements-bottom-note">
          <span className="requirements-bottom-note-label">
            {t("note.label")}
          </span>

          <p>{t("note.text")}</p>
        </div>
      </div>
    </section>
  );
}