 import Icon, { type IconName } from "@/components/shared/Icon";
 
 export default function RequirementsSection() {
  return (
 <section id="requirements" className="section requirements-section">
        <div className="requirements-decoration" aria-hidden="true">
          <div className="requirements-circle requirements-circle-one" />
          <div className="requirements-circle requirements-circle-two" />
        </div>

        <div className="container">
          <div className="section-heading section-heading-centred">
            <div className="section-kicker section-kicker-centred">
              <span className="kicker-line" />
              <span>Transaction Requirements</span>
              <span className="kicker-line" />
            </div>

            <h2>
              What is required for an
              <span> initial assessment.</span>
            </h2>

            <p>
              Complete documentation helps establish whether a proposed
              transaction is suitable for further review. Additional
              information may be requested depending on the parties,
              jurisdiction and collateral structure.
            </p>
          </div>

          <div className="requirements-layout">
            <div className="requirements-main">
              <article className="requirement-card">
                <div className="requirement-card-header">
                  <span className="requirement-card-icon">
                    <Icon name="gold" />
                  </span>

                  <div>
                    <span className="requirement-card-index">01</span>
                    <h3>Gold Collateral Information</h3>
                  </div>
                </div>

                <p>
                  Clear and verifiable information about the proposed physical
                  investment gold.
                </p>

                <ul className="requirement-list">
                  <li>
                    <span className="requirement-check">
                      <Icon name="check" />
                    </span>

                    <div>
                      <strong>Form and quantity</strong>
                      <span>
                        Bars, ingots or other accepted investment-gold format.
                      </span>
                    </div>
                  </li>

                  <li>
                    <span className="requirement-check">
                      <Icon name="check" />
                    </span>

                    <div>
                      <strong>Purity and identification</strong>
                      <span>
                        Refinery, serial numbers, assay details and available
                        certificates.
                      </span>
                    </div>
                  </li>

                  <li>
                    <span className="requirement-check">
                      <Icon name="check" />
                    </span>

                    <div>
                      <strong>Current location</strong>
                      <span>
                        Vault, custodian, bank, logistics provider or other
                        existing storage arrangement.
                      </span>
                    </div>
                  </li>

                  <li>
                    <span className="requirement-check">
                      <Icon name="check" />
                    </span>

                    <div>
                      <strong>Indicative market value</strong>
                      <span>
                        Recent valuation, inventory statement or equivalent
                        supporting information.
                      </span>
                    </div>
                  </li>
                </ul>
              </article>

              <article className="requirement-card">
                <div className="requirement-card-header">
                  <span className="requirement-card-icon">
                    <Icon name="document" />
                  </span>

                  <div>
                    <span className="requirement-card-index">02</span>
                    <h3>Ownership &amp; Provenance</h3>
                  </div>
                </div>

                <p>
                  Evidence showing who legally owns the gold and how it was
                  acquired.
                </p>

                <ul className="requirement-list">
                  <li>
                    <span className="requirement-check">
                      <Icon name="check" />
                    </span>

                    <div>
                      <strong>Proof of legal ownership</strong>
                      <span>
                        Purchase invoices, custody records, title documents or
                        equivalent evidence.
                      </span>
                    </div>
                  </li>

                  <li>
                    <span className="requirement-check">
                      <Icon name="check" />
                    </span>

                    <div>
                      <strong>Source and provenance</strong>
                      <span>
                        Documentation explaining acquisition history and lawful
                        origin.
                      </span>
                    </div>
                  </li>

                  <li>
                    <span className="requirement-check">
                      <Icon name="check" />
                    </span>

                    <div>
                      <strong>Existing encumbrances</strong>
                      <span>
                        Disclosure of any pledge, lien, financing arrangement or
                        third-party claim.
                      </span>
                    </div>
                  </li>

                  <li>
                    <span className="requirement-check">
                      <Icon name="check" />
                    </span>

                    <div>
                      <strong>Authority to transact</strong>
                      <span>
                        Evidence that the applicant is authorised to offer the
                        gold as collateral.
                      </span>
                    </div>
                  </li>
                </ul>
              </article>

              <article className="requirement-card">
                <div className="requirement-card-header">
                  <span className="requirement-card-icon">
                    <Icon name="shield" />
                  </span>

                  <div>
                    <span className="requirement-card-index">03</span>
                    <h3>Client &amp; Compliance Documents</h3>
                  </div>
                </div>

                <p>
                  Identification and corporate information required for
                  applicable compliance review.
                </p>

                <ul className="requirement-list">
                  <li>
                    <span className="requirement-check">
                      <Icon name="check" />
                    </span>

                    <div>
                      <strong>Personal identification</strong>
                      <span>
                        Valid identification and address documentation for
                        relevant individuals.
                      </span>
                    </div>
                  </li>

                  <li>
                    <span className="requirement-check">
                      <Icon name="check" />
                    </span>

                    <div>
                      <strong>Corporate documents</strong>
                      <span>
                        Registry extract, constitutional documents and signing
                        authority where applicable.
                      </span>
                    </div>
                  </li>

                  <li>
                    <span className="requirement-check">
                      <Icon name="check" />
                    </span>

                    <div>
                      <strong>Beneficial ownership</strong>
                      <span>
                        Complete disclosure of the ultimate beneficial owners
                        and controlling parties.
                      </span>
                    </div>
                  </li>

                  <li>
                    <span className="requirement-check">
                      <Icon name="check" />
                    </span>

                    <div>
                      <strong>Source of wealth and funds</strong>
                      <span>
                        Supporting information proportionate to the transaction
                        and applicable requirements.
                      </span>
                    </div>
                  </li>
                </ul>
              </article>

              <article className="requirement-card">
                <div className="requirement-card-header">
                  <span className="requirement-card-icon">
                    <Icon name="capital" />
                  </span>

                  <div>
                    <span className="requirement-card-index">04</span>
                    <h3>Financing Request</h3>
                  </div>
                </div>

                <p>
                  A clear explanation of the requested capital and proposed
                  repayment plan.
                </p>

                <ul className="requirement-list">
                  <li>
                    <span className="requirement-check">
                      <Icon name="check" />
                    </span>

                    <div>
                      <strong>Requested amount</strong>
                      <span>
                        Exact or indicative financing amount required by the
                        client.
                      </span>
                    </div>
                  </li>

                  <li>
                    <span className="requirement-check">
                      <Icon name="check" />
                    </span>

                    <div>
                      <strong>Intended use of funds</strong>
                      <span>
                        Legitimate and sufficiently detailed commercial or
                        private financing purpose.
                      </span>
                    </div>
                  </li>

                  <li>
                    <span className="requirement-check">
                      <Icon name="check" />
                    </span>

                    <div>
                      <strong>Preferred term</strong>
                      <span>
                        Required duration, normally within a maximum period of
                        12 months.
                      </span>
                    </div>
                  </li>

                  <li>
                    <span className="requirement-check">
                      <Icon name="check" />
                    </span>

                    <div>
                      <strong>Repayment strategy</strong>
                      <span>
                        Credible explanation of how all obligations are expected
                        to be repaid.
                      </span>
                    </div>
                  </li>
                </ul>
              </article>
            </div>

            <aside className="requirements-sidebar">
              <div className="requirements-sidebar-card">
                <span className="requirements-sidebar-overline">
                  Initial review
                </span>

                <h3>Prepare the essential documents before submitting.</h3>

                <p>
                  An initial inquiry does not require every definitive document,
                  but it should include enough information to determine whether
                  further assessment is commercially and legally appropriate.
                </p>

                <div className="requirements-sidebar-divider" />

                <div className="requirements-sidebar-items">
                  <div className="requirements-sidebar-item">
                    <span>
                      <Icon name="check" />
                    </span>

                    <p>Clear ownership evidence</p>
                  </div>

                  <div className="requirements-sidebar-item">
                    <span>
                      <Icon name="check" />
                    </span>

                    <p>Verifiable gold documentation</p>
                  </div>

                  <div className="requirements-sidebar-item">
                    <span>
                      <Icon name="check" />
                    </span>

                    <p>Defined financing purpose</p>
                  </div>

                  <div className="requirements-sidebar-item">
                    <span>
                      <Icon name="check" />
                    </span>

                    <p>Credible repayment strategy</p>
                  </div>
                </div>

                <a href="#inquiry" className="button button-primary">
                  <span>Submit an Inquiry</span>
                  <Icon name="arrow" className="button-icon" />
                </a>
              </div>

              <div className="requirements-warning-card">
                <span className="requirements-warning-icon">
                  <Icon name="shield" />
                </span>

                <div>
                  <strong>Documents are subject to verification</strong>

                  <p>
                    Submission of information does not create an obligation to
                    arrange, provide or approve financing.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <div className="requirements-bottom-note">
            <span className="requirements-bottom-note-label">
              Please note
            </span>

            <p>
              Depending on the transaction, additional legal opinions, assay
              reports, independent valuations, tax information, financial
              statements, custody confirmations or other specialist documents
              may be required.
            </p>
          </div>
        </div>
      </section>
       );
}