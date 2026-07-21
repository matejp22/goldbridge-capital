"use client";

import { useTranslations } from "next-intl";

export default function InstitutionalStrip() {
  const t = useTranslations("InstitutionalStrip");

  return (
    <section
      className="institutional-strip"
      aria-label={t("ariaLabel")}
    >
      <div className="container institutional-strip-grid">
        <div className="institutional-strip-item">
          <span className="strip-index">01</span>

          <div>
            <strong>{t("items.collateral.title")}</strong>
            <span>{t("items.collateral.description")}</span>
          </div>
        </div>

        <div className="institutional-strip-item">
          <span className="strip-index">02</span>

          <div>
            <strong>{t("items.structuring.title")}</strong>
            <span>{t("items.structuring.description")}</span>
          </div>
        </div>

        <div className="institutional-strip-item">
          <span className="strip-index">03</span>

          <div>
            <strong>{t("items.term.title")}</strong>
            <span>{t("items.term.description")}</span>
          </div>
        </div>

        <div className="institutional-strip-item">
          <span className="strip-index">04</span>

          <div>
            <strong>{t("items.approval.title")}</strong>
            <span>{t("items.approval.description")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}