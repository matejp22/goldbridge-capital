  import Icon from "@/components/shared/Icon";
  
  export default function StructureSection() {
  return (
  <section id="structure" className="section structure-section">
        <div className="structure-background" aria-hidden="true">
          <div className="structure-glow structure-glow-left" />
          <div className="structure-glow structure-glow-right" />
          <div className="structure-grid" />
        </div>

        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <div className="section-kicker">
                <span className="kicker-line" />
                <span>How Structured Financing Works</span>
              </div>

              <h2>
                A clear path from physical gold
                <span> to available liquidity.</span>
              </h2>
            </div>

            <div className="section-introduction">
              <p>
                Each proposed transaction is reviewed individually. The
                structure depends on the nature and location of the gold, the
                requested financing amount, the intended use of funds and the
                requirements of the relevant financing and custody partners.
              </p>

              <p>
                The outline below presents a typical transaction pathway. It
                does not represent a guaranteed offer or a standardised lending
                product.
              </p>
            </div>
          </div>

          <div className="structure-flow">
            <article className="structure-step">
              <div className="structure-step-top">
                <span className="structure-step-number">01</span>

                <span className="structure-step-icon">
                  <Icon name="gold" />
                </span>
              </div>

              <div className="structure-step-content">
                <span className="structure-step-label">
                  Eligible collateral
                </span>

                <h3>Physical Investment Gold</h3>

                <p>
                  The client presents eligible physical gold together with
                  supporting ownership, product, custody and provenance
                  documentation.
                </p>
              </div>

              <span className="structure-step-arrow" aria-hidden="true">
                <Icon name="arrow" />
              </span>
            </article>

            <article className="structure-step">
              <div className="structure-step-top">
                <span className="structure-step-number">02</span>

                <span className="structure-step-icon">
                  <Icon name="review" />
                </span>
              </div>

              <div className="structure-step-content">
                <span className="structure-step-label">
                  Preliminary assessment
                </span>

                <h3>Verification &amp; Review</h3>

                <p>
                  Documentation, ownership, purity, form, storage location,
                  beneficial ownership and intended use of funds are reviewed.
                </p>
              </div>

              <span className="structure-step-arrow" aria-hidden="true">
                <Icon name="arrow" />
              </span>
            </article>

            <article className="structure-step">
              <div className="structure-step-top">
                <span className="structure-step-number">03</span>

                <span className="structure-step-icon">
                  <Icon name="structure" />
                </span>
              </div>

              <div className="structure-step-content">
                <span className="structure-step-label">
                  Individual terms
                </span>

                <h3>Financing Structure</h3>

                <p>
                  Indicative terms may be prepared based on the verified
                  collateral value, requested capital, term and counterparty
                  requirements.
                </p>
              </div>

              <span className="structure-step-arrow" aria-hidden="true">
                <Icon name="arrow" />
              </span>
            </article>

            <article className="structure-step">
              <div className="structure-step-top">
                <span className="structure-step-number">04</span>

                <span className="structure-step-icon">
                  <Icon name="custody" />
                </span>
              </div>

              <div className="structure-step-content">
                <span className="structure-step-label">
                  Agreed arrangements
                </span>

                <h3>Secure Custody</h3>

                <p>
                  The gold is held under agreed custody and collateral
                  arrangements with suitable independent service providers.
                </p>
              </div>

              <span className="structure-step-arrow" aria-hidden="true">
                <Icon name="arrow" />
              </span>
            </article>

            <article className="structure-step">
              <div className="structure-step-top">
                <span className="structure-step-number">05</span>

                <span className="structure-step-icon">
                  <Icon name="capital" />
                </span>
              </div>

              <div className="structure-step-content">
                <span className="structure-step-label">
                  Completion
                </span>

                <h3>Capital Release</h3>

                <p>
                  Following execution of the required agreements and
                  satisfaction of conditions, approved financing may be
                  released.
                </p>
              </div>
            </article>
          </div>

          <div className="structure-principles">
            <div className="structure-principle">
              <span className="structure-principle-icon">
                <Icon name="check" />
              </span>

              <div>
                <strong>Client ownership</strong>
                <p>
                  The commercial objective is to unlock liquidity without an
                  outright sale of the gold.
                </p>
              </div>
            </div>

            <div className="structure-principle">
              <span className="structure-principle-icon">
                <Icon name="check" />
              </span>

              <div>
                <strong>Independent counterparties</strong>
                <p>
                  Custody, valuation, legal, compliance and financing functions
                  may be performed by separate professional parties.
                </p>
              </div>
            </div>

            <div className="structure-principle">
              <span className="structure-principle-icon">
                <Icon name="check" />
              </span>

              <div>
                <strong>Case-by-case assessment</strong>
                <p>
                  No transaction proceeds without satisfactory documentation,
                  due diligence and final approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
       );
}