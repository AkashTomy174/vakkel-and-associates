import { Link } from "react-router-dom";

// Global public footer — extracted from the homepage glass footer.
// Anchor links point to "/#..." so they work from any public page.
function SiteFooter() {
  return (
    <footer className="glass-footer">
      <Link className="va-logo" to="/#top">
        <span>VA</span>
        <strong>
          VAKKEEL <small>& ASSOCIATES</small>
        </strong>
      </Link>
      <div>
        <span className="footer-label-glass">Explore</span>
        <Link to="/#about">About</Link>
        <Link to="/#practice">Practice areas</Link>
        <Link to="/government-approvals-compliance">
          Government Approvals &amp; Compliance
        </Link>
        <Link to="/insights">News</Link>
      </div>
      <div>
        <span className="footer-label-glass">Connect</span>
        <a href="mailto:Vakkeelandassociates@gmail.com">
          Vakkeelandassociates@gmail.com
        </a>
        <a href="tel:+916369717520">+91 6369717520</a>
        <a href="https://wa.me/916369717520">WhatsApp chamber</a>
      </div>
      <div>
        <span className="footer-label-glass">Chambers</span>
        <span>New Delhi · Mumbai · Kerala</span>
        <span>Chandigarh · Bengaluru · Chennai</span>
        <span>© 2026 Vakkeel & Associates</span>
      </div>
      <div>
        <span className="footer-label-glass">For Legal Professionals</span>
        <Link to="/join">Join Vakkeel & Associates</Link>
        <Link to="/join">Become an Associate Partner</Link>
      </div>
      <div className="footer-disclaimer">
        <strong>
          IMPORTANT NOTICE — LEGAL TECH PLATFORM &amp; MEDIATION SERVICE
        </strong>
        <p>
          Vakkeel &amp; Associates operates as a legal tech startup and
          mediation service that connects clients with empanelled advocates
          enrolled with their respective Bar Councils across India. We are not a
          traditional law firm and do not directly provide legal representation.
        </p>
        <p>
          As per the Bar Council of India Rules, advocates are not permitted to
          advertise or solicit work. The content on this website is published
          for informational purposes only and does not constitute legal advice,
          nor does it create an attorney-client relationship. For specific legal
          advice, please consult a qualified advocate.
        </p>
        <span>
          © 2026 Vakkeel &amp; Associates — Legal Tech Startup &amp; Mediation
          Service. Nilambur, Kerala. Sister Brand of Indian Law School.
        </span>
      </div>
    </footer>
  );
}

export default SiteFooter;
