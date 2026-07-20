import Icon from "@/components/shared/Icon";

export default function InstitutionalStrip() {
  return (
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
      );
}