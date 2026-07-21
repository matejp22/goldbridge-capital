"use client";

import { useTranslations } from "next-intl";

import Icon from "@/components/shared/Icon";

export default function ClosingSection() {
  const t = useTranslations("Closing");

  return (
    <section className="closing-section">
      <div className="closing-background" aria-hidden="true">
        <div className="closing-line closing-line-one" />
        <div className="closing-line closing-line-two" />
        <div className="closing-glow" />
      </div>

      <div className="container closing-content">
        <span className="closing-overline">
          {t("overline")}
        </span>

        <h2>
          {t("title.main")}
          <span>{t("title.highlight")}</span>
        </h2>

        <p>{t("text")}</p>

        <a href="#inquiry" className="button button-primary">
          <span>{t("button")}</span>
          <Icon name="arrow" className="button-icon" />
        </a>
      </div>
    </section>
  );
}