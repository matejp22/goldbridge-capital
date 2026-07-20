import Icon from "@/components/shared/Icon";

export default function SiteHeader() {
  return (
   <header className="site-header">
        <div className="container nav">
          <a
            href="#top"
            className="brand"
            aria-label="Gold Bridge Capital home"
          >
            <span className="brand-mark" aria-hidden="true">
              <span>G</span>
              <i />
              <span>B</span>
            </span>

            <span className="brand-copy">
              <strong>Gold Bridge</strong>
              <small>Capital</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#approach">Our Approach</a>
            <a href="#structure">How It Works</a>
            <a href="#transaction">Example</a>
            <a href="#process">Process</a>
          </nav>

          <a href="#inquiry" className="nav-cta">
            <span>Confidential Inquiry</span>
            <Icon name="arrow" className="button-icon" />
          </a>
        </div>
      </header>
    );
}