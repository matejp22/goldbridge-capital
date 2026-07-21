import Icon, { type IconName } from "@/components/shared/Icon";

export default function ExampleSection() {
  return (
<section id="transaction" className="section example-section">
        <div className="example-decoration example-decoration-one" />
        <div className="example-decoration example-decoration-two" />

        <div className="container">
          <div className="section-heading section-heading-centred">
            <div className="section-kicker section-kicker-centred">
              <span className="kicker-line" />
              <span>Illustrative Transaction</span>
              <span className="kicker-line" />
            </div>

            <h2>
              An example of a potential
              <span> gold-backed financing structure.</span>
            </h2>

            <p>
              The following example is provided solely to explain the mechanics
              of a possible transaction. It is not an offer, commitment,
              quotation or guarantee of financing.
            </p>
          </div>

          <div className="example-layout">
            <div className="example-main-card">
              <div className="example-main-card-header">
                <div>
                  <span className="example-overline">
                    Illustrative client case
                  </span>

                  <h3>Short-Term Private Financing</h3>
                </div>

                <span className="example-status">
                  <span className="example-status-dot" />
                  Example only
                </span>
              </div>

              <div className="example-values">
                <div className="example-value example-value-primary">
                  <span>Indicative collateral value</span>
                  <strong>€3,000,000</strong>
                  <small>Physical investment gold</small>
                </div>

                <div className="example-value-arrow" aria-hidden="true">
                  <Icon name="arrow" />
                </div>

                <div className="example-value">
                  <span>Illustrative financing</span>
                  <strong>€2,000,000</strong>
                  <small>Subject to approval</small>
                </div>
              </div>

              <div className="example-detail-grid">
                <div className="example-detail">
                  <span className="example-detail-label">
                    Illustrative term
                  </span>

                  <strong>Up to 12 months</strong>
                </div>

                <div className="example-detail">
                  <span className="example-detail-label">
                    Indicative repayment
                  </span>

                  <strong>€2.2M–€2.3M</strong>
                </div>

                <div className="example-detail">
                  <span className="example-detail-label">
                    Collateral ownership
                  </span>

                  <strong>Retained by client</strong>
                </div>

                <div className="example-detail">
                  <span className="example-detail-label">
                    Custody
                  </span>

                  <strong>As contractually agreed</strong>
                </div>
              </div>

              <div className="example-main-card-footer">
                <span className="example-footer-icon">
                  <Icon name="shield" />
                </span>

                <p>
                  During the agreed financing period, the gold serves as
                  collateral under the executed transaction documents. The
                  precise legal and custody structure depends on the approved
                  counterparties and jurisdiction.
                </p>
              </div>
            </div>

            <aside className="example-summary-card">
              <div className="example-summary-header">
                <span className="example-summary-icon">
                  <Icon name="document" />
                </span>

                <div>
                  <span>Indicative overview</span>
                  <h3>Transaction Summary</h3>
                </div>
              </div>

              <div className="example-summary-list">
                <div className="example-summary-row">
                  <span>Gold value</span>
                  <strong>€3,000,000</strong>
                </div>

                <div className="example-summary-row">
                  <span>Financing amount</span>
                  <strong>€2,000,000</strong>
                </div>

                <div className="example-summary-row">
                  <span>Illustrative advance ratio</span>
                  <strong>Approx. 67%</strong>
                </div>

                <div className="example-summary-row">
                  <span>Maximum period</span>
                  <strong>12 months</strong>
                </div>

                <div className="example-summary-row">
                  <span>Illustrative total repayment</span>
                  <strong>€2.2M–€2.3M</strong>
                </div>
              </div>

              <div className="example-summary-note">
                <span className="example-summary-note-line" />

                <p>
                  Final pricing may include financing costs, professional fees,
                  custody costs, valuation costs and other transaction expenses.
                </p>
              </div>
            </aside>
          </div>

          <div className="example-caveat">
            <span className="example-caveat-index">Important</span>

            <p>
              Values shown above are hypothetical. Actual collateral eligibility,
              valuation, advance ratio, duration, pricing, custody arrangements
              and repayment obligations are determined only after full review
              and written approval by the relevant parties.
            </p>
          </div>
        </div>
      </section>
        );
}