import Icon from "@/components/shared/Icon";

export default function HeroSection() {
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
              <span>Private Structured Finance</span>
            </div>

            <h1>
              Unlock liquidity
              <span> without selling your gold.</span>
            </h1>

            <p className="hero-lead">
              Gold Bridge Capital facilitates tailored short-term financing
              solutions secured by eligible physical investment gold for
              qualified private and corporate clients.
            </p>

            <div className="hero-actions">
              <a href="#inquiry" className="button button-primary">
                <span>Discuss Your Transaction</span>
                <Icon name="arrow" className="button-icon" />
              </a>

              <a href="#structure" className="button button-secondary">
                Explore the Structure
              </a>
            </div>

            <div className="hero-assurances">
              <div className="assurance-item">
                <span className="assurance-check">
                  <Icon name="check" />
                </span>

                <span>Confidential assessment</span>
              </div>

              <div className="assurance-item">
                <span className="assurance-check">
                  <Icon name="check" />
                </span>

                <span>Terms up to 12 months</span>
              </div>

              <div className="assurance-item">
                <span className="assurance-check">
                  <Icon name="check" />
                </span>

                <span>Physical gold collateral</span>
              </div>
            </div>
          </div>

          <aside
            className="hero-transaction-card"
            aria-label="Illustrative financing structure"
          >
            <div className="transaction-card-shine" aria-hidden="true" />

            <div className="transaction-card-header">
              <div>
                <span className="transaction-card-overline">
                  Illustrative Structure
                </span>

                <h2>Private Transaction</h2>
              </div>

              <span className="privacy-badge">
                <span className="privacy-dot" />
                Confidential
              </span>
            </div>

            <div className="transaction-primary-value">
              <span>Indicative gold value</span>
              <strong>€3,000,000</strong>
            </div>

            <div className="transaction-divider" />

            <div className="transaction-metrics">
              <div className="transaction-metric">
                <span>Illustrative financing</span>
                <strong>€2,000,000</strong>
              </div>

              <div className="transaction-metric">
                <span>Maximum term</span>
                <strong>Up to 12 months</strong>
              </div>
            </div>

            <div className="transaction-flow">
              <div className="transaction-flow-item">
                <span className="flow-icon">
                  <Icon name="gold" />
                </span>

                <div>
                  <span className="flow-step">01</span>
                  <strong>Gold Verification</strong>
                  <p>
                    Ownership, form, purity, provenance and documentation.
                  </p>
                </div>
              </div>

              <span className="transaction-flow-line" />

              <div className="transaction-flow-item">
                <span className="flow-icon">
                  <Icon name="document" />
                </span>

                <div>
                  <span className="flow-step">02</span>
                  <strong>Transaction Structuring</strong>
                  <p>
                    Indicative terms, due diligence and contractual framework.
                  </p>
                </div>
              </div>

              <span className="transaction-flow-line" />

              <div className="transaction-flow-item">
                <span className="flow-icon">
                  <Icon name="custody" />
                </span>

                <div>
                  <span className="flow-step">03</span>
                  <strong>Custody &amp; Funding</strong>
                  <p>
                    Agreed custody arrangements followed by capital release.
                  </p>
                </div>
              </div>
            </div>

            <p className="transaction-disclaimer">
              Illustrative information only. Final availability and terms are
              subject to due diligence, documentation and approval.
            </p>
          </aside>
        </div>

        <div className="container hero-bottom">
          <div className="hero-bottom-line" />

          <a href="#approach" className="scroll-indicator">
            <span>Discover our approach</span>
            <span className="scroll-line" />
          </a>
        </div>
      </section>
  );
}