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

export default function ApproachSection() {
  return (
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
        );
}