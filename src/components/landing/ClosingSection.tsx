import Icon from "@/components/shared/Icon";

export default function ClosingSection() {
  return (
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
        );
}