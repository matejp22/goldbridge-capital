"use client";

import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export default function SiteFooter() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const homeUrl = `/${locale}`;

  function openCookieSettings() {
    window.dispatchEvent(
      new CustomEvent("goldbridge-open-cookie-settings")
    );
  }

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-column">
          <a
            href={`${homeUrl}#top`}
            className="brand footer-brand"
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

          <p className="footer-brand-description">
            {t("description")}
          </p>

          <a
            href={`mailto:${t("email")}`}
            className="footer-email"
          >
            {t("email")}
          </a>
        </div>

        <div className="footer-navigation">
          <div className="footer-column">
            <span className="footer-column-title">
              {t("navigation.title")}
            </span>

            <a href={`${homeUrl}#approach`}>
              {t("navigation.approach")}
            </a>

            <a href={`${homeUrl}#structure`}>
              {t("navigation.structure")}
            </a>

            <a href={`${homeUrl}#transaction`}>
              {t("navigation.transaction")}
            </a>

            <a href={`${homeUrl}#process`}>
              {t("navigation.process")}
            </a>

            <a href={`${homeUrl}#requirements`}>
              {t("navigation.requirements")}
            </a>
          </div>

          <div className="footer-column">
            <span className="footer-column-title">
              {t("information.title")}
            </span>

            <a href={`${homeUrl}#faq`}>
              {t("information.faq")}
            </a>

            <a href={`${homeUrl}#inquiry`}>
              {t("information.inquiry")}
            </a>

            <Link href="/privacy">
              {t("information.privacyPolicy")}
            </Link>

            <Link href="/terms">
              {t("information.termsOfUse")}
            </Link>

            <Link href="/legal">
              {t("information.legalNotice")}
            </Link>
          </div>
        </div>
      </div>

      <div className="container footer-disclaimer">
        <span className="footer-disclaimer-label">
          {t("disclaimer.label")}
        </span>

        <p>{t("disclaimer.text")}</p>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>{t("copyright", { year: currentYear })}</p>

          <div className="footer-bottom-links">
            <Link href="/privacy">
              {t("bottomLinks.privacy")}
            </Link>

            <Link href="/terms">
              {t("bottomLinks.terms")}
            </Link>

            <Link href="/legal">
              {t("bottomLinks.legal")}
            </Link>

            <button
              type="button"
              className="footer-cookie-settings-button"
              onClick={openCookieSettings}
            >
              {t("bottomLinks.cookieSettings")}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}