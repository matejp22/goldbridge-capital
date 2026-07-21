import Icon, { type IconName } from "@/components/shared/Icon";

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

export default function ClientsSection() {
  return (
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
       );
}