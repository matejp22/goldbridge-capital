import ContactForm from "@/components/ContactForm";
import Icon from "@/components/shared/Icon";

  export default function InquirySection() {
  return (
 <section id="inquiry" className="section inquiry-section">
        <div className="inquiry-background" aria-hidden="true">
          <div className="inquiry-glow inquiry-glow-one" />
          <div className="inquiry-glow inquiry-glow-two" />
          <div className="inquiry-grid-pattern" />
          <div className="inquiry-orbit inquiry-orbit-one" />
          <div className="inquiry-orbit inquiry-orbit-two" />
        </div>

        <div className="container inquiry-layout">
          <div className="inquiry-copy">
            <div className="section-kicker inquiry-kicker">
              <span className="kicker-line" />
              <span>Confidential Inquiry</span>
            </div>

            <h2>
              Discuss your proposed
              <span> gold-backed transaction.</span>
            </h2>

            <p className="inquiry-lead">
              Submit a concise overview of your financing requirement and
              proposed gold collateral. The information will be used solely for
              an initial assessment of whether the opportunity may be suitable
              for further review.
            </p>

            <div className="inquiry-principles">
              <div className="inquiry-principle">
                <span className="inquiry-principle-icon">
                  <Icon name="shield" />
                </span>

                <div>
                  <strong>Confidential handling</strong>
                  <p>
                    Information is reviewed discreetly and shared only where
                    required for assessment.
                  </p>
                </div>
              </div>

              <div className="inquiry-principle">
                <span className="inquiry-principle-icon">
                  <Icon name="review" />
                </span>

                <div>
                  <strong>Preliminary assessment</strong>
                  <p>
                    The submission helps determine whether a detailed review is
                    appropriate.
                  </p>
                </div>
              </div>

              <div className="inquiry-principle">
                <span className="inquiry-principle-icon">
                  <Icon name="structure" />
                </span>

                <div>
                  <strong>Individual structuring</strong>
                  <p>
                    Potential terms are developed according to the specific
                    collateral and transaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="inquiry-contact-card">
              <span className="inquiry-contact-label">
                Direct correspondence
              </span>

              <a href="mailto:inquiries@goldbridge-capital.com">
                inquiries@goldbridge-capital.com
              </a>

              <p>
                Please avoid sending original documents or highly sensitive
                personal information by unencrypted email.
              </p>
            </div>
          </div>

          <div className="inquiry-form-wrapper">
            <div className="inquiry-form-header">
              <div>
                <span className="inquiry-form-overline">
                  Initial transaction overview
                </span>

                <h3>Submit Your Inquiry</h3>
              </div>

              <span className="inquiry-form-security">
                <Icon name="shield" />
                Confidential
              </span>
            </div>

            <ContactForm />

            <div className="inquiry-form-notice">
              <span className="inquiry-form-notice-icon">
                <Icon name="shield" />
              </span>

              <p>
                By submitting this form, you confirm that the information
                provided is accurate to the best of your knowledge. Submission
                does not create a client relationship, financing commitment or
                obligation on any party.
              </p>
            </div>
          </div>
        </div>
      </section>
       );
}