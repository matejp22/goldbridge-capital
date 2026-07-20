 export default function SiteFooter() {
  return (
   <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand-column">
            <a
              href="#top"
              className="brand footer-brand"
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

            <p className="footer-brand-description">
              Gold Bridge Capital facilitates the assessment and coordination
              of potential short-term financing transactions secured by
              eligible physical investment gold.
            </p>

            <a
              href="mailto:inquiries@goldbridge-capital.com"
              className="footer-email"
            >
              inquiries@goldbridge-capital.com
            </a>
          </div>

          <div className="footer-navigation">
            <div className="footer-column">
              <span className="footer-column-title">Navigation</span>

              <a href="#approach">Our Approach</a>
              <a href="#structure">How It Works</a>
              <a href="#transaction">Illustrative Transaction</a>
              <a href="#process">Transaction Process</a>
              <a href="#requirements">Requirements</a>
            </div>

            <div className="footer-column">
              <span className="footer-column-title">Information</span>

              <a href="#faq">Frequently Asked Questions</a>
              <a href="#inquiry">Confidential Inquiry</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Use</a>
              <a href="/legal">Legal Notice</a>
            </div>
          </div>
        </div>

        <div className="container footer-disclaimer">
          <span className="footer-disclaimer-label">
            Important legal information
          </span>

          <p>
            The content of this website is provided for general informational
            purposes only. It does not constitute financial, legal, tax or
            investment advice, an offer to lend, an offer of securities or a
            commitment to arrange or provide financing. Any potential
            transaction is subject to client and collateral due diligence,
            compliance review, independent verification, definitive legal
            documentation and approval by the relevant parties. Gold Bridge
            Capital does not guarantee that financing will be available or that
            any transaction will be completed.
          </p>
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <p>
              © {new Date().getFullYear()} Gold Bridge Capital. All rights
              reserved.
            </p>

            <div className="footer-bottom-links">
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/legal">Legal</a>
            </div>
          </div>
        </div>
      </footer>
      </footer>
  );
}