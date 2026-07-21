"use client";

import { useTranslations } from "next-intl";

import Icon from "@/components/shared/Icon";

export default function SiteHeader() {
  const t = useTranslations("Header");

  return (
    <header className="site-header">
      <div className="container nav">
        <a
          href="#top"
          className="brand"
          aria-label={t("homeAriaLabel")}
        >
          <span className="brand-mark" aria-hidden="true">
            <span>G</span>
            <i />
            <span>B</span>
          </span>

          <span className="brand-copy">
            <strong>{t("brand.main")}</strong>
            <small>{t("brand.sub")}</small>
          </span>
        </a>

        <nav
          className="nav-links"
          aria-label={t("navigationAriaLabel")}
        >
          <a href="#approach">{t("navigation.approach")}</a>
          <a href="#structure">{t("navigation.structure")}</a>
          <a href="#transaction">{t("navigation.example")}</a>
          <a href="#process">{t("navigation.process")}</a>
        </nav>

        <a href="#inquiry" className="nav-cta">
          <span>{t("cta")}</span>
          <Icon name="arrow" className="button-icon" />
        </a>
      </div>
    </header>
  );
}