"use client";

import { useTranslations } from "next-intl";

import Icon from "@/components/shared/Icon";

const detailKeys = [
  "term",
  "repayment",
  "ownership",
  "custody",
] as const;

const summaryKeys = [
  "goldValue",
  "financingAmount",
  "advanceRatio",
  "maximumPeriod",
  "totalRepayment",
] as const;

export default function ExampleSection() {
  const t = useTranslations("Example");

  return (
    <section id="transaction" className="section example-section">
      <div className="example-decoration example-decoration-one" />
      <div className="example-decoration example-decoration-two" />

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

        <div className="example-layout">
          <div className="example-main-card">
            <div className="example-main-card-header">
              <div>
                <span className="example-overline">
                  {t("case.overline")}
                </span>

                <h3>{t("case.title")}</h3>
              </div>

              <span className="example-status">
                <span className="example-status-dot" />
                {t("case.status")}
              </span>
            </div>

            <div className="example-values">
              <div className="example-value example-value-primary">
                <span>{t("values.collateral.label")}</span>
                <strong>{t("values.collateral.value")}</strong>
                <small>{t("values.collateral.note")}</small>
              </div>

              <div className="example-value-arrow" aria-hidden="true">
                <Icon name="arrow" />
              </div>

              <div className="example-value">
                <span>{t("values.financing.label")}</span>
                <strong>{t("values.financing.value")}</strong>
                <small>{t("values.financing.note")}</small>
              </div>
            </div>

            <div className="example-detail-grid">
              {detailKeys.map((detail) => (
                <div className="example-detail" key={detail}>
                  <span className="example-detail-label">
                    {t(`details.${detail}.label`)}
                  </span>

                  <strong>{t(`details.${detail}.value`)}</strong>
                </div>
              ))}
            </div>

            <div className="example-main-card-footer">
              <span className="example-footer-icon">
                <Icon name="shield" />
              </span>

              <p>{t("footer")}</p>
            </div>
          </div>

          <aside className="example-summary-card">
            <div className="example-summary-header">
              <span className="example-summary-icon">
                <Icon name="document" />
              </span>

              <div>
                <span>{t("summary.overline")}</span>
                <h3>{t("summary.title")}</h3>
              </div>
            </div>

            <div className="example-summary-list">
              {summaryKeys.map((row) => (
                <div className="example-summary-row" key={row}>
                  <span>{t(`summary.rows.${row}.label`)}</span>
                  <strong>{t(`summary.rows.${row}.value`)}</strong>
                </div>
              ))}
            </div>

            <div className="example-summary-note">
              <span className="example-summary-note-line" />

              <p>{t("summary.note")}</p>
            </div>
          </aside>
        </div>

        <div className="example-caveat">
          <span className="example-caveat-index">
            {t("caveat.label")}
          </span>

          <p>{t("caveat.text")}</p>
        </div>
      </div>
    </section>
  );
}