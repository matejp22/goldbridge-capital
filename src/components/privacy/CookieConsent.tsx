"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

type ConsentChoice = "accepted" | "rejected";

const STORAGE_KEY = "goldbridge-cookie-consent";

export default function CookieConsent() {
  const t = useTranslations("CookieConsent");
  const locale = useLocale();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const existingChoice = window.localStorage.getItem(STORAGE_KEY);

    if (!existingChoice) {
      setIsVisible(true);
    }
  }, []);

  function saveConsent(choice: ConsentChoice) {
    window.localStorage.setItem(STORAGE_KEY, choice);
    window.dispatchEvent(
      new CustomEvent("goldbridge-consent-change", {
        detail: choice,
      }),
    );

    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <aside
      className="cookie-consent"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="cookie-consent-inner">
        <div className="cookie-consent-copy">
          <span className="section-kicker">
            {t("kicker")}
          </span>

          <h2 id="cookie-consent-title">
            {t("title")}
          </h2>

          <p id="cookie-consent-description">
            {t("description")}{" "}
            <Link href={`/${locale}/privacy`}>
              {t("privacyLink")}
            </Link>
          </p>
        </div>

        <div className="cookie-consent-actions">
          <button
            type="button"
            className="cookie-button cookie-button-secondary"
            onClick={() => saveConsent("rejected")}
          >
            {t("reject")}
          </button>

          <button
            type="button"
            className="cookie-button cookie-button-primary"
            onClick={() => saveConsent("accepted")}
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </aside>
  );
}