"use client";

import { useTranslations } from "next-intl";

import Icon, { type IconName } from "@/components/shared/Icon";

const structureSteps = [
  {
    key: "collateral",
    icon: "gold" as IconName,
    showArrow: true,
  },
  {
    key: "review",
    icon: "review" as IconName,
    showArrow: true,
  },
  {
    key: "financing",
    icon: "structure" as IconName,
    showArrow: true,
  },
  {
    key: "custody",
    icon: "custody" as IconName,
    showArrow: true,
  },
  {
    key: "release",
    icon: "capital" as IconName,
    showArrow: false,
  },
] as const;

const structurePrinciples = [
  "ownership",
  "counterparties",
  "assessment",
] as const;

export default function StructureSection() {
  const t = useTranslations("Structure");

  return (
    <section id="structure" className="section structure-section">
      <div className="structure-background" aria-hidden="true">
        <div className="structure-glow structure-glow-left" />
        <div className="structure-glow structure-glow-right" />
        <div className="structure-grid" />
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

        <div className="structure-flow">
          {structureSteps.map((step) => (
            <article className="structure-step" key={step.key}>
              <div className="structure-step-top">
                <span className="structure-step-number">
                  {t(`steps.${step.key}.number`)}
                </span>

                <span className="structure-step-icon">
                  <Icon name={step.icon} />
                </span>
              </div>

              <div className="structure-step-content">
                <span className="structure-step-label">
                  {t(`steps.${step.key}.label`)}
                </span>

                <h3>{t(`steps.${step.key}.title`)}</h3>

                <p>{t(`steps.${step.key}.text`)}</p>
              </div>

              {step.showArrow && (
                <span className="structure-step-arrow" aria-hidden="true">
                  <Icon name="arrow" />
                </span>
              )}
            </article>
          ))}
        </div>

        <div className="structure-principles">
          {structurePrinciples.map((principle) => (
            <div className="structure-principle" key={principle}>
              <span className="structure-principle-icon">
                <Icon name="check" />
              </span>

              <div>
                <strong>{t(`principles.${principle}.title`)}</strong>
                <p>{t(`principles.${principle}.text`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}