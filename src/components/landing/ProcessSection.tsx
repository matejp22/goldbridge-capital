"use client";

import { useTranslations } from "next-intl";

import Icon, { type IconName } from "@/components/shared/Icon";

const processSteps = [
  {
    key: "inquiry",
    icon: "document" as IconName,
  },
  {
    key: "assessment",
    icon: "review" as IconName,
  },
  {
    key: "diligence",
    icon: "shield" as IconName,
  },
  {
    key: "structuring",
    icon: "structure" as IconName,
  },
  {
    key: "documentation",
    icon: "custody" as IconName,
  },
  {
    key: "funding",
    icon: "capital" as IconName,
  },
] as const;

const checklistItems = ["first", "second", "third"] as const;

export default function ProcessSection() {
  const t = useTranslations("Process");

  return (
    <section id="process" className="section process-section">
      <div className="process-background" aria-hidden="true">
        <div className="process-glow process-glow-one" />
        <div className="process-glow process-glow-two" />
        <div className="process-pattern" />
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

        <div className="process-timeline">
          {processSteps.map((step) => (
            <article className="process-item" key={step.key}>
              <div className="process-item-marker">
                <span>{t(`steps.${step.key}.number`)}</span>
              </div>

              <div className="process-item-card">
                <div className="process-item-header">
                  <span className="process-item-icon">
                    <Icon name={step.icon} />
                  </span>

                  <span className="process-item-stage">
                    {t(`steps.${step.key}.stage`)}
                  </span>
                </div>

                <h3>{t(`steps.${step.key}.title`)}</h3>

                <p>{t(`steps.${step.key}.text`)}</p>

                <ul className="process-checklist">
                  {checklistItems.map((item) => (
                    <li key={item}>
                      <Icon name="check" />
                      <span>{t(`steps.${step.key}.items.${item}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="process-timing-card">
          <div className="process-timing-icon">
            <Icon name="review" />
          </div>

          <div className="process-timing-copy">
            <span className="process-timing-label">
              {t("timing.label")}
            </span>

            <h3>{t("timing.title")}</h3>

            <p>{t("timing.text")}</p>
          </div>

          <div className="process-timing-stat">
            <span>{t("timing.statLabel")}</span>
            <strong>{t("timing.statValue")}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}