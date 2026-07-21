import SiteHeader from "@/components/layout/SiteHeader";
import HeroSection from "@/components/landing/HeroSection";
import SiteFooter from "@/components/layout/SiteFooter";
import { setRequestLocale } from "next-intl/server";
import ContactForm from "@/components/ContactForm";
import Icon, { type IconName } from "@/components/shared/Icon";
import InstitutionalStrip from "@/components/landing/InstitutionalStrip";
import ApproachSection from "@/components/landing/ApproachSection";
import ClientsSection from "@/components/landing/ClientsSection";
import StructureSection from "@/components/landing/StructureSection";
import ExampleSection from "@/components/landing/ExampleSection";
import ProcessSection from "@/components/landing/ProcessSection";
import RequirementsSection from "@/components/landing/RequirementsSection";

type HomeProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  setRequestLocale(locale);
  
  return (
    <main className="site-shell">
      <SiteHeader />
      <HeroSection />
      <InstitutionalStrip />
      <ApproachSection />
      <ClientsSection />
      <StructureSection />
      <ExampleSection />
      <ProcessSection />  
      <RequirementsSection />
     

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

      <section className="closing-section">
        <div className="closing-background" aria-hidden="true">
          <div className="closing-line closing-line-one" />
          <div className="closing-line closing-line-two" />
          <div className="closing-glow" />
        </div>

        <div className="container closing-content">
          <span className="closing-overline">
            Gold Bridge Capital
          </span>

          <h2>
            Structured liquidity.
            <span> Preserved ownership.</span>
          </h2>

          <p>
            A discreet and disciplined approach to financing secured by
            eligible physical investment gold.
          </p>

          <a href="#inquiry" className="button button-primary">
            <span>Discuss a Transaction</span>
            <Icon name="arrow" className="button-icon" />
          </a>
        </div>
      </section>

     <SiteFooter />
    </main>
  );
}