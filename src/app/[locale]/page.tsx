import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { setRequestLocale } from "next-intl/server";
import ContactForm from "@/components/ContactForm";
import Icon, { type IconName } from "@/components/shared/Icon";

const advantages = [
  {
    number: "01",
    icon: "shield" as IconName,
    title: "Confidential by Design",
    text: "Each inquiry is handled discreetly and shared only with the professionals required to assess and structure the proposed transaction.",
  },
  {
    number: "02",
    icon: "network" as IconName,
    title: "International Access",
    text: "We coordinate opportunities with suitable financing, custody, legal and transaction partners according to the requirements of each case.",
  },
  {
    number: "03",
    icon: "structure" as IconName,
    title: "Tailored Structures",
    text: "Financing terms are developed individually around the collateral, requested capital, intended use of funds and agreed repayment profile.",
  },
  {
    number: "04",
    icon: "review" as IconName,
    title: "Disciplined Review",
    text: "Every opportunity is subject to verification of ownership, provenance, purity, documentation, counterparties and regulatory acceptability.",
  },
];

const clientProfiles = [
  {
    icon: "family" as IconName,
    title: "Family Offices",
    text: "Private capital structures for families seeking liquidity while preserving ownership of eligible physical gold.",
  },
  {
    icon: "entrepreneur" as IconName,
    title: "Entrepreneurs",
    text: "Short-term capital for qualified business, acquisition, expansion or bridge-financing requirements.",
  },
  {
    icon: "investor" as IconName,
    title: "Private Investors",
    text: "Individually reviewed financing opportunities secured by documented investment-grade gold.",
  },
  {
    icon: "corporate" as IconName,
    title: "Corporations",
    text: "Structured liquidity solutions for companies with a clearly defined commercial purpose and acceptable collateral.",
  },
];

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

      <section className="institutional-strip" aria-label="Key principles">
        <div className="container institutional-strip-grid">
          <div className="institutional-strip-item">
            <span className="strip-index">01</span>
            <div>
              <strong>Physical Collateral</strong>
              <span>Eligible investment-grade gold</span>
            </div>
          </div>

          <div className="institutional-strip-item">
            <span className="strip-index">02</span>
            <div>
              <strong>Individual Structuring</strong>
              <span>No standardised retail product</span>
            </div>
          </div>

          <div className="institutional-strip-item">
            <span className="strip-index">03</span>
            <div>
              <strong>Defined Term</strong>
              <span>Short-term financing up to 12 months</span>
            </div>
          </div>

          <div className="institutional-strip-item">
            <span className="strip-index">04</span>
            <div>
              <strong>Subject to Approval</strong>
              <span>Full due diligence and documentation</span>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="section approach-section">
        <div className="section-decoration section-decoration-left" />

        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <div className="section-kicker">
                <span className="kicker-line" />
                <span>Why Gold Bridge Capital</span>
              </div>

              <h2>
                A considered approach to
                <span> gold-backed liquidity.</span>
              </h2>
            </div>

            <div className="section-introduction">
              <p>
                Significant private transactions require more than access to
                capital. They require discretion, credible documentation,
                suitable counterparties and a structure aligned with the
                collateral and commercial objective.
              </p>

              <p>
                Gold Bridge Capital acts as a transaction facilitator. We
                support the preparation, assessment and coordination of
                potential financing opportunities with relevant independent
                parties.
              </p>
            </div>
          </div>

          <div className="advantage-grid">
            {advantages.map((advantage) => (
              <article className="advantage-card" key={advantage.title}>
                <div className="advantage-card-top">
                  <span className="advantage-icon">
                    <Icon name={advantage.icon} />
                  </span>

                  <span className="advantage-number">
                    {advantage.number}
                  </span>
                </div>

                <h3>{advantage.title}</h3>
                <p>{advantage.text}</p>

                <span className="advantage-card-line" aria-hidden="true" />
              </article>
            ))}
          </div>

          <div className="approach-statement">
            <span className="statement-mark" aria-hidden="true">
              “
            </span>

            <p>
              Our role is to bring clarity, structure and disciplined
              coordination to complex transactions secured by physical gold.
            </p>

            <span className="statement-signature">
              Gold Bridge Capital
            </span>
          </div>
        </div>
      </section>

      <section className="section clients-section">
        <div className="clients-background" aria-hidden="true">
          <div className="clients-glow" />
          <div className="clients-line-pattern" />
        </div>

        <div className="container">
          <div className="section-heading section-heading-centred">
            <div className="section-kicker section-kicker-centred">
              <span className="kicker-line" />
              <span>Who We Work With</span>
              <span className="kicker-line" />
            </div>

            <h2>
              Designed for qualified private
              <span> and corporate clients.</span>
            </h2>

            <p>
              We consider transactions with a legitimate financing purpose,
              suitable physical gold collateral and complete, verifiable
              documentation.
            </p>
          </div>

          <div className="client-grid">
            {clientProfiles.map((profile) => (
              <article className="client-card" key={profile.title}>
                <span className="client-card-icon">
                  <Icon name={profile.icon} />
                </span>

                <div>
                  <h3>{profile.title}</h3>
                  <p>{profile.text}</p>
                </div>

                <span className="client-card-corner" aria-hidden="true" />
              </article>
            ))}
          </div>

          <div className="qualification-note">
            <span className="qualification-note-icon">
              <Icon name="shield" />
            </span>

            <div>
              <strong>Qualification and compliance</strong>
              <p>
                All potential clients, beneficial owners, collateral and uses
                of funds are subject to applicable identification, ownership,
                provenance, sanctions, anti-money-laundering and counterparty
                review requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

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