import Icon from "@/components/shared/Icon";

export default function ProcessSection() {
  return (
<section id="process" className="section process-section">
        <div className="process-background" aria-hidden="true">
          <div className="process-glow process-glow-one" />
          <div className="process-glow process-glow-two" />
          <div className="process-pattern" />
        </div>

        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <div className="section-kicker">
                <span className="kicker-line" />
                <span>Transaction Process</span>
              </div>

              <h2>
                A disciplined process from
                <span> inquiry to completion.</span>
              </h2>
            </div>

            <div className="section-introduction">
              <p>
                Gold-backed financing transactions require a structured and
                transparent review process. Each stage is designed to establish
                whether the proposed collateral, client profile and financing
                purpose meet the requirements of the relevant counterparties.
              </p>

              <p>
                Timelines depend on the quality of documentation, collateral
                location, legal structure, jurisdiction and responsiveness of
                all parties involved.
              </p>
            </div>
          </div>

          <div className="process-timeline">
            <article className="process-item">
              <div className="process-item-marker">
                <span>01</span>
              </div>

              <div className="process-item-card">
                <div className="process-item-header">
                  <span className="process-item-icon">
                    <Icon name="document" />
                  </span>

                  <span className="process-item-stage">
                    Initial submission
                  </span>
                </div>

                <h3>Confidential Inquiry</h3>

                <p>
                  The client submits an initial overview of the transaction,
                  including the requested financing amount, intended use of
                  funds and essential information about the proposed gold
                  collateral.
                </p>

                <ul className="process-checklist">
                  <li>
                    <Icon name="check" />
                    <span>Requested financing amount</span>
                  </li>

                  <li>
                    <Icon name="check" />
                    <span>Purpose and preferred duration</span>
                  </li>

                  <li>
                    <Icon name="check" />
                    <span>Initial collateral description</span>
                  </li>
                </ul>
              </div>
            </article>

            <article className="process-item">
              <div className="process-item-marker">
                <span>02</span>
              </div>

              <div className="process-item-card">
                <div className="process-item-header">
                  <span className="process-item-icon">
                    <Icon name="review" />
                  </span>

                  <span className="process-item-stage">
                    Preliminary review
                  </span>
                </div>

                <h3>Eligibility Assessment</h3>

                <p>
                  The opportunity is screened for basic eligibility. This
                  includes the client profile, beneficial ownership, collateral
                  form, location, documentation and commercial rationale.
                </p>

                <ul className="process-checklist">
                  <li>
                    <Icon name="check" />
                    <span>Client and beneficial-owner profile</span>
                  </li>

                  <li>
                    <Icon name="check" />
                    <span>Collateral form, purity and location</span>
                  </li>

                  <li>
                    <Icon name="check" />
                    <span>Initial compliance suitability</span>
                  </li>
                </ul>
              </div>
            </article>

            <article className="process-item">
              <div className="process-item-marker">
                <span>03</span>
              </div>

              <div className="process-item-card">
                <div className="process-item-header">
                  <span className="process-item-icon">
                    <Icon name="shield" />
                  </span>

                  <span className="process-item-stage">
                    Detailed verification
                  </span>
                </div>

                <h3>Due Diligence</h3>

                <p>
                  Suitable opportunities proceed to more detailed document,
                  ownership, provenance, sanctions, anti-money-laundering and
                  counterparty review.
                </p>

                <ul className="process-checklist">
                  <li>
                    <Icon name="check" />
                    <span>Identity and corporate documentation</span>
                  </li>

                  <li>
                    <Icon name="check" />
                    <span>Proof of ownership and provenance</span>
                  </li>

                  <li>
                    <Icon name="check" />
                    <span>Independent verification where required</span>
                  </li>
                </ul>
              </div>
            </article>

            <article className="process-item">
              <div className="process-item-marker">
                <span>04</span>
              </div>

              <div className="process-item-card">
                <div className="process-item-header">
                  <span className="process-item-icon">
                    <Icon name="structure" />
                  </span>

                  <span className="process-item-stage">
                    Commercial preparation
                  </span>
                </div>

                <h3>Indicative Structuring</h3>

                <p>
                  Based on the verified information, suitable parties may
                  prepare an indicative transaction structure covering
                  financing amount, term, pricing, collateral and conditions.
                </p>

                <ul className="process-checklist">
                  <li>
                    <Icon name="check" />
                    <span>Indicative advance ratio</span>
                  </li>

                  <li>
                    <Icon name="check" />
                    <span>Proposed duration and repayment profile</span>
                  </li>

                  <li>
                    <Icon name="check" />
                    <span>Custody and collateral mechanics</span>
                  </li>
                </ul>
              </div>
            </article>

            <article className="process-item">
              <div className="process-item-marker">
                <span>05</span>
              </div>

              <div className="process-item-card">
                <div className="process-item-header">
                  <span className="process-item-icon">
                    <Icon name="custody" />
                  </span>

                  <span className="process-item-stage">
                    Legal completion
                  </span>
                </div>

                <h3>Documentation &amp; Custody</h3>

                <p>
                  If the indicative structure is accepted, the relevant parties
                  prepare definitive agreements and establish the agreed custody
                  and collateral arrangements.
                </p>

                <ul className="process-checklist">
                  <li>
                    <Icon name="check" />
                    <span>Definitive transaction agreements</span>
                  </li>

                  <li>
                    <Icon name="check" />
                    <span>Custody and security documentation</span>
                  </li>

                  <li>
                    <Icon name="check" />
                    <span>Completion conditions confirmed</span>
                  </li>
                </ul>
              </div>
            </article>

            <article className="process-item">
              <div className="process-item-marker">
                <span>06</span>
              </div>

              <div className="process-item-card">
                <div className="process-item-header">
                  <span className="process-item-icon">
                    <Icon name="capital" />
                  </span>

                  <span className="process-item-stage">
                    Transaction completion
                  </span>
                </div>

                <h3>Funding &amp; Repayment</h3>

                <p>
                  Once all conditions have been satisfied, approved financing
                  may be released. The client then performs the agreed repayment
                  obligations according to the executed documents.
                </p>

                <ul className="process-checklist">
                  <li>
                    <Icon name="check" />
                    <span>Capital release after completion</span>
                  </li>

                  <li>
                    <Icon name="check" />
                    <span>Contractual monitoring during the term</span>
                  </li>

                  <li>
                    <Icon name="check" />
                    <span>Collateral release after full repayment</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>

          <div className="process-timing-card">
            <div className="process-timing-icon">
              <Icon name="review" />
            </div>

            <div className="process-timing-copy">
              <span className="process-timing-label">
                Indicative transaction timing
              </span>

              <h3>Preparation quality directly influences execution speed.</h3>

              <p>
                A well-documented transaction may progress materially faster
                than a case with incomplete ownership, provenance, valuation or
                custody information. No standard completion timeline can be
                guaranteed.
              </p>
            </div>

            <div className="process-timing-stat">
              <span>Primary factor</span>
              <strong>Complete documentation</strong>
            </div>
          </div>
        </div>
      </section>
        );
}