"use client";

import { useTranslations } from "next-intl";

import Icon from "@/components/shared/Icon";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section id="top" className="hero-section">
      <div className="hero-background" aria-hidden="true">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-grid-pattern" />
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
      </div>

      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="section-kicker hero-kicker">
            <span className="kicker-line" />
            <span>{t("kicker")}</span>
          </div>

          <h1>
            {t("title.main")}
            <span>{t("title.highlight")}</span>
          </h1>

          <p className="hero-lead">{t("lead")}</p>

          <div className="hero-actions">
            <a href="#inquiry" className="button button-primary">
              <span>{t("actions.discuss")}</span>
              <Icon name="arrow" className="button-icon" />
            </a>

            <a href="#structure" className="button button-secondary">
              {t("actions.explore")}
            </a>
          </div>

          <div className="hero-assurances">
            <div className="assurance-item">
              <span className="assurance-check">
                <Icon name="check" />
              </span>

              <span>{t("assurances.confidential")}</span>
            </div>

            <div className="assurance-item">
              <span className="assurance-check">
                <Icon name="check" />
              </span>

              <span>{t("assurances.term")}</span>
            </div>

            <div className="assurance-item">
              <span className="assurance-check">
                <Icon name="check" />
              </span>

              <span>{t("assurances.collateral")}</span>
            </div>
          </div>
        </div>

        <aside
          className="hero-transaction-card"
          aria-label={t("transaction.ariaLabel")}
        >
          <div className="transaction-card-shine" aria-hidden="true" />

          <div className="transaction-card-header">
            <div>
              <span className="transaction-card-overline">
                {t("transaction.overline")}
              </span>

              <h2>{t("transaction.title")}</h2>
            </div>

            <span className="privacy-badge">
              <span className="privacy-dot" />
              {t("transaction.confidential")}
            </span>
          </div>

          <div className="transaction-primary-value">
            <span>{t("transaction.goldValueLabel")}</span>
            <strong>{t("transaction.goldValue")}</strong>
          </div>

          <div className="transaction-divider" />

          <div className="transaction-metrics">
            <div className="transaction-metric">
              <span>{t("transaction.financingLabel")}</span>
              <strong>{t("transaction.financingValue")}</strong>
            </div>

            <div className="transaction-metric">
              <span>{t("transaction.maximumTermLabel")}</span>
              <strong>{t("transaction.maximumTermValue")}</strong>
            </div>
          </div>

          <div className="transaction-flow">
            <div className="transaction-flow-item">
              <span className="flow-icon">
                <Icon name="gold" />
              </span>

              <div>
                <span className="flow-step">
                  {t("transaction.steps.verification.number")}
                </span>

                <strong>
                  {t("transaction.steps.verification.title")}
                </strong>

                <p>
                  {t("transaction.steps.verification.description")}
                </p>
              </div>
            </div>

            <span className="transaction-flow-line" />

            <div className="transaction-flow-item">
              <span className="flow-icon">
                <Icon name="document" />
              </span>

              <div>
                <span className="flow-step">
                  {t("transaction.steps.structuring.number")}
                </span>

                <strong>
                  {t("transaction.steps.structuring.title")}
                </strong>

                <p>
                  {t("transaction.steps.structuring.description")}
                </p>
              </div>
            </div>

            <span className="transaction-flow-line" />

            <div className="transaction-flow-item">
              <span className="flow-icon">
                <Icon name="custody" />
              </span>

              <div>
                <span className="flow-step">
                  {t("transaction.steps.funding.number")}
                </span>

                <strong>
                  {t("transaction.steps.funding.title")}
                </strong>

                <p>
                  {t("transaction.steps.funding.description")}
                </p>
              </div>
            </div>
          </div>

          <p className="transaction-disclaimer">
            {t("transaction.disclaimer")}
          </p>
        </aside>
      </div>

      <div className="container hero-bottom">
        <div className="hero-bottom-line" />

        <a href="#approach" className="scroll-indicator">
          <span>{t("discover")}</span>
          <span className="scroll-line" />
        </a>
      </div>
    </section>
  );
}