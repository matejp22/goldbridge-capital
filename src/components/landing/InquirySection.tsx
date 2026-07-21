"use client";

import { useTranslations } from "next-intl";

import ContactForm from "@/components/ContactForm";
import Icon, { type IconName } from "@/components/shared/Icon";

const inquiryPrinciples = [
  {
    key: "confidential",
    icon: "shield" as IconName,
  },
  {
    key: "assessment",
    icon: "review" as IconName,
  },
  {
    key: "structuring",
    icon: "structure" as IconName,
  },
] as const;

export default function InquirySection() {
  const t = useTranslations("Inquiry");

  return (
    <section id="inquiry" className="section inquiry-section">
      <div className="inquiry-background" aria-hidden="true">
        <div className="inquiry-glow inquiry-glow-one" />
        <div className="inquiry-glow inquiry-glow-two" />
        <div className="inquiry-grid-pattern" />
        <div className="inquiry-orbit inquiry-orbit-one" />
        <div className="inquiry-orbit inquiry-orbit-two" />
      </div>

      <div className="container inquiry-layout">
        <div className="inquiry-copy">
          <div className="section-kicker inquiry-kicker">
            <span className="kicker-line" />
            <span>{t("kicker")}</span>
          </div>

          <h2>
            {t("title.main")}
            <span>{t("title.highlight")}</span>
          </h2>

          <p className="inquiry-lead">{t("lead")}</p>

          <div className="inquiry-principles">
            {inquiryPrinciples.map((principle) => (
              <div className="inquiry-principle" key={principle.key}>
                <span className="inquiry-principle-icon">
                  <Icon name={principle.icon} />
                </span>

                <div>
                  <strong>
                    {t(`principles.${principle.key}.title`)}
                  </strong>

                  <p>{t(`principles.${principle.key}.text`)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="inquiry-contact-card">
            <span className="inquiry-contact-label">
              {t("contact.label")}
            </span>

            <a href={`mailto:${t("contact.email")}`}>
              {t("contact.email")}
            </a>

            <p>{t("contact.notice")}</p>
          </div>
        </div>

        <div className="inquiry-form-wrapper">
          <div className="inquiry-form-header">
            <div>
              <span className="inquiry-form-overline">
                {t("form.overline")}
              </span>

              <h3>{t("form.title")}</h3>
            </div>

            <span className="inquiry-form-security">
              <Icon name="shield" />
              {t("form.security")}
            </span>
          </div>

          <ContactForm />

          <div className="inquiry-form-notice">
            <span className="inquiry-form-notice-icon">
              <Icon name="shield" />
            </span>

            <p>{t("form.notice")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}