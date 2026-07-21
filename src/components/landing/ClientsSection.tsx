"use client";

import { useTranslations } from "next-intl";

import Icon, { type IconName } from "@/components/shared/Icon";

const clientProfiles = [
  {
    key: "familyOffices",
    icon: "family" as IconName,
  },
  {
    key: "entrepreneurs",
    icon: "entrepreneur" as IconName,
  },
  {
    key: "privateInvestors",
    icon: "investor" as IconName,
  },
  {
    key: "corporations",
    icon: "corporate" as IconName,
  },
] as const;

export default function ClientsSection() {
  const t = useTranslations("Clients");

  return (
    <section className="section clients-section">
      <div className="clients-background" aria-hidden="true">
        <div className="clients-glow" />
        <div className="clients-line-pattern" />
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

        <div className="client-grid">
          {clientProfiles.map((profile) => (
            <article className="client-card" key={profile.key}>
              <span className="client-card-icon">
                <Icon name={profile.icon} />
              </span>

              <div>
                <h3>{t(`profiles.${profile.key}.title`)}</h3>
                <p>{t(`profiles.${profile.key}.text`)}</p>
              </div>

              <span className="client-card-corner" aria-hidden="true" />
            </article>
          ))}
        </div>

        <div className="qualification-note">
          <span className="qualification-note-icon">
            <Icon name="shield" />
          </span>

          <div>
            <strong>{t("qualification.title")}</strong>
            <p>{t("qualification.text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}