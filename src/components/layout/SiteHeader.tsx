"use client";

import { useLocale, useTranslations } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import Icon from "@/components/shared/Icon";

type SupportedLocale = "en" | "de" | "it";

const locales: SupportedLocale[] = ["en", "de", "it"];

export default function SiteHeader() {
  const t = useTranslations("Header");
  const locale = useLocale() as SupportedLocale;

  const pathname = usePathname();
  const router = useRouter();

  const homeUrl = `/${locale}`;

  function changeLocale(nextLocale: SupportedLocale) {
    if (nextLocale === locale) {
      return;
    }

    router.replace(pathname, {
      locale: nextLocale,
    });
  }

  return (
    <header className="site-header">
      <div className="container nav">
        <a
          href={`${homeUrl}#top`}
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
          <a href={`${homeUrl}#approach`}>
            {t("navigation.approach")}
          </a>

          <a href={`${homeUrl}#structure`}>
            {t("navigation.structure")}
          </a>

          <a href={`${homeUrl}#transaction`}>
            {t("navigation.example")}
          </a>

          <a href={`${homeUrl}#process`}>
            {t("navigation.process")}
          </a>
        </nav>

        <div
          className="language-switcher"
          aria-label="Language selection"
        >
          {locales.map((language) => (
            <button
              key={language}
              type="button"
              className={
                locale === language
                  ? "language-button language-button-active"
                  : "language-button"
              }
              aria-current={
                locale === language ? "page" : undefined
              }
              onClick={() => changeLocale(language)}
            >
              {language.toUpperCase()}
            </button>
          ))}
        </div>

        <a
          href={`${homeUrl}#inquiry`}
          className="nav-cta"
        >
          <span>{t("cta")}</span>
          <Icon name="arrow" className="button-icon" />
        </a>
      </div>
    </header>
  );
}