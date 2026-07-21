 import Icon from "@/components/shared/Icon";
 
 export default function FAQSection() {
  return (
 <section id="faq" className="section faq-section">
        <div className="faq-background" aria-hidden="true">
          <div className="faq-glow faq-glow-one" />
          <div className="faq-glow faq-glow-two" />
          <div className="faq-pattern" />
        </div>

        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <div className="section-kicker">
                <span className="kicker-line" />
                <span>Frequently Asked Questions</span>
              </div>

              <h2>
                Essential information before
                <span> submitting an inquiry.</span>
              </h2>
            </div>

            <div className="section-introduction">
              <p>
                The answers below provide a general overview of the potential
                transaction process. Each case remains subject to individual
                review, documentation, legal structuring and approval.
              </p>

              <p>
                No information on this website should be interpreted as a
                binding offer, investment recommendation or commitment to
                provide financing.
              </p>
            </div>
          </div>

          <div className="faq-layout">
            <div className="faq-list">
              <details className="faq-item">
                <summary>
                  <span className="faq-question-number">01</span>

                  <span className="faq-question">
                    What type of gold may be considered as collateral?
                  </span>

                  <span className="faq-toggle" aria-hidden="true">
                    <span />
                    <span />
                  </span>
                </summary>

                <div className="faq-answer">
                  <p>
                    Transactions are generally expected to involve clearly
                    identifiable physical investment gold with verifiable
                    purity, ownership, provenance and supporting documentation.
                    The accepted form, refinery, bar size, location and custody
                    conditions depend on the requirements of the relevant
                    transaction parties.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary>
                  <span className="faq-question-number">02</span>

                  <span className="faq-question">
                    Does the client sell the gold?
                  </span>

                  <span className="faq-toggle" aria-hidden="true">
                    <span />
                    <span />
                  </span>
                </summary>

                <div className="faq-answer">
                  <p>
                    The intended structure is financing secured by physical
                    gold rather than an outright sale. The client is expected
                    to retain legal ownership, subject to the contractual
                    security, custody and enforcement rights established in the
                    final transaction documents.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary>
                  <span className="faq-question-number">03</span>

                  <span className="faq-question">
                    Where is the gold held during the financing period?
                  </span>

                  <span className="faq-toggle" aria-hidden="true">
                    <span />
                    <span />
                  </span>
                </summary>

                <div className="faq-answer">
                  <p>
                    The gold is held under custody arrangements accepted by the
                    relevant parties. Depending on the transaction, this may
                    involve an approved bank, vault operator, custodian or other
                    professional storage provider in an agreed jurisdiction.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary>
                  <span className="faq-question-number">04</span>

                  <span className="faq-question">
                    How much financing may be available?
                  </span>

                  <span className="faq-toggle" aria-hidden="true">
                    <span />
                    <span />
                  </span>
                </summary>

                <div className="faq-answer">
                  <p>
                    The potential financing amount depends on the independently
                    assessed collateral value, form and location of the gold,
                    market conditions, requested term, client profile and risk
                    requirements of the financing party. No fixed advance ratio
                    can be guaranteed before full review.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary>
                  <span className="faq-question-number">05</span>

                  <span className="faq-question">
                    What is the maximum financing term?
                  </span>

                  <span className="faq-toggle" aria-hidden="true">
                    <span />
                    <span />
                  </span>
                </summary>

                <div className="faq-answer">
                  <p>
                    The intended focus is short-term financing with a duration
                    of up to 12 months. The precise term is determined
                    individually and depends on the proposed use of funds,
                    repayment strategy and approval of the relevant parties.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary>
                  <span className="faq-question-number">06</span>

                  <span className="faq-question">
                    How are pricing and transaction costs determined?
                  </span>

                  <span className="faq-toggle" aria-hidden="true">
                    <span />
                    <span />
                  </span>
                </summary>

                <div className="faq-answer">
                  <p>
                    Pricing is established individually after review of the
                    collateral and transaction. Total costs may include
                    financing charges, arrangement fees, legal costs, custody,
                    transportation, insurance, assay, valuation, compliance and
                    other professional expenses.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary>
                  <span className="faq-question-number">07</span>

                  <span className="faq-question">
                    How quickly can a transaction be completed?
                  </span>

                  <span className="faq-toggle" aria-hidden="true">
                    <span />
                    <span />
                  </span>
                </summary>

                <div className="faq-answer">
                  <p>
                    Completion time depends heavily on document quality,
                    collateral location, ownership verification, compliance
                    review, valuation, legal preparation and custody
                    arrangements. A specific completion date cannot be promised
                    before all required information has been reviewed.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary>
                  <span className="faq-question-number">08</span>

                  <span className="faq-question">
                    Is every submitted transaction accepted?
                  </span>

                  <span className="faq-toggle" aria-hidden="true">
                    <span />
                    <span />
                  </span>
                </summary>

                <div className="faq-answer">
                  <p>
                    No. Every inquiry is assessed individually. Gold Bridge
                    Capital and the relevant independent parties may decline a
                    transaction at any stage where documentation, compliance,
                    collateral eligibility, commercial terms or risk
                    requirements are not satisfactory.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary>
                  <span className="faq-question-number">09</span>

                  <span className="faq-question">
                    What happens after the financing has been repaid?
                  </span>

                  <span className="faq-toggle" aria-hidden="true">
                    <span />
                    <span />
                  </span>
                </summary>

                <div className="faq-answer">
                  <p>
                    Once all repayment obligations, fees and other contractual
                    conditions have been fully satisfied, the collateral is
                    released in accordance with the definitive transaction and
                    custody documents.
                  </p>
                </div>
              </details>
            </div>

            <aside className="faq-sidebar">
              <div className="faq-sidebar-card">
                <span className="faq-sidebar-icon">
                  <Icon name="shield" />
                </span>

                <span className="faq-sidebar-overline">
                  Confidential discussion
                </span>

                <h3>Your transaction may require a more specific assessment.</h3>

                <p>
                  Provide a concise overview of your gold collateral, financing
                  requirement and intended use of funds. The initial submission
                  will be reviewed confidentially.
                </p>

                <a href="#inquiry" className="button button-primary">
                  <span>Start a Confidential Inquiry</span>
                  <Icon name="arrow" className="button-icon" />
                </a>
              </div>

              <div className="faq-disclaimer-card">
                <span className="faq-disclaimer-label">
                  Important information
                </span>

                <p>
                  Gold Bridge Capital does not represent that financing will be
                  available for every applicant or transaction. Any potential
                  transaction remains subject to satisfactory due diligence,
                  definitive documentation and approval.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
       );
}