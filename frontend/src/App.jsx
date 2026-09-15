﻿import { useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdvocatesPage from "./AdvocatesPage.jsx";
// import OnboardingPage from './OnboardingPage.jsx'
import GlassLandingPage from "./GlassLandingPage.jsx";
import Insights from "./pages/Insights.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import JoinUsPage from "./pages/JoinUsPage.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";

const practiceAreas = [
  {
    icon: "public",
    title: "NRI & Cross-Border Affairs",
    copy: "Remote advocacy for ancestral partitions, land disputes, powers of attorney, custody and OCI matters.",
    tag: "Global desk",
  },
  {
    icon: "account_balance",
    title: "Constitutional & Appellate",
    copy: "Strategic representation before the Supreme Court, High Courts and appellate tribunals across India.",
    tag: "Apex practice",
  },
  {
    icon: "corporate_fare",
    title: "Corporate Governance & Arbitration",
    copy: "Commercial counsel for complex transactions, shareholder disputes, insolvency and institutional arbitration.",
    tag: "Enterprise counsel",
  },
  {
    icon: "home_work",
    title: "Property & Succession",
    copy: "Title diligence, possession, partition, probate and inheritance solutions with local court precision.",
    tag: "Property desk",
  },
  {
    icon: "gavel",
    title: "Criminal Defence & Bail",
    copy: "Discreet, swift defence for high-stakes investigations, anticipatory bail and appellate criminal matters.",
    tag: "Urgent response",
  },
  {
    icon: "family_restroom",
    title: "Family & Matrimonial",
    copy: "Confidential counsel for divorce, custody, maintenance and cross-border family disputes.",
    tag: "Private chambers",
  },
];

function HomePage() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const visibleAreas = useMemo(() => {
    const term = query.trim().toLowerCase();
    return term
      ? practiceAreas.filter((area) =>
          `${area.title} ${area.copy} ${area.tag}`.toLowerCase().includes(term),
        )
      : practiceAreas;
  }, [query]);

  return (
    <main>
      <div className="announcement">
        <span className="pulse-dot" /> 24/7 GLOBAL NRI LEGAL DESK ACTIVE{" "}
        <span className="announcement-detail">
          Immediate chamber response time under 45 minutes
        </span>
        <a href="#intake">
          Prioritize case intake{" "}
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
      <header className="site-header">
        <a
          className="brand"
          href="#top"
          aria-label="Vakkeel and Associates home"
        >
          <span className="brand-mark">⚖</span>
          <span>
            <strong>VAKKEEL</strong>
            <small>& ASSOCIATES</small>
          </span>
        </a>
        <nav>
          <a href="#about">The Firm</a>
          <a href="#practice">Practice Areas</a>
          <a href="/advocates">Our Advocates</a>
          <a href="#insights">Legal Insights</a>
          <a href="/join">Join the Collegium</a>
        </nav>
        <button
          className="header-cta"
          type="button"
          onClick={() => setModalOpen(true)}
        >
          <span className="material-symbols-outlined">calendar_month</span>{" "}
          Request counsel
        </button>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="material-symbols-outlined">balance</span> JUSTICE
            WITHOUT BORDERS
          </div>
          <h1>
            Every case demands a <em>defense strategy.</em>
          </h1>
          <p className="hero-quote">
            “Complex cases require more than legal knowledge. They require a
            defense strategy.”
          </p>
          <p>
            We build the defense around your case because we are experts in it.
            Vakkeel & Associates brings focused legal strategy to high-stakes
            litigation, complex commercial matters and the global Indian
            diaspora.
          </p>
          <div className="hero-actions">
            <button
              className="button urgent"
              type="button"
              onClick={() => setModalOpen(true)}
            >
              <span className="material-symbols-outlined">phone_in_talk</span>{" "}
              Book a confidential consultation
            </button>
            <a className="button ghost" href="#practice">
              Explore our practice{" "}
              <span className="material-symbols-outlined">arrow_downward</span>
            </a>
          </div>
          <div className="trust-row">
            <div>
              <strong>500+</strong>
              <span>Verified advocates</span>
            </div>
            <div>
              <strong>28</strong>
              <span>States & UTs</span>
            </div>
            <div>
              <strong>15,000+</strong>
              <span>NRI matters resolved</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="court-image">
            <div className="image-placeholder">
              <span className="material-symbols-outlined">account_balance</span>
              <span>THE SUPREME COURT OF INDIA</span>
            </div>
            <div className="visual-caption">
              <span>HIGH COURT & APEX ROSTER</span>
              <small>Delhi · Mumbai · Chandigarh</small>
            </div>
          </div>
          <div className="seal">
            <span>V&A</span>
            <small>
              EST.
              <br />
              1998
            </small>
          </div>
        </div>
      </section>

      <section className="intake-panel" id="intake">
        <div>
          <span className="eyebrow dark">DIRECT DOCKET ROUTING</span>
          <h2>Find the right counsel for your matter.</h2>
          <p>
            Tell us where the matter sits and our chamber will route it to
            verified senior counsel.
          </p>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <label>
            Jurisdiction
            <select defaultValue="Delhi">
              <option>Delhi (NCT & NCR)</option>
              <option>Maharashtra</option>
              <option>Punjab & Haryana</option>
              <option>All-India Federal Courts</option>
            </select>
          </label>
          <label>
            Legal domain
            <select defaultValue="NRI Property & Title">
              <option>NRI Property & Title</option>
              <option>Commercial Arbitration</option>
              <option>Criminal Defence</option>
              <option>Family & Matrimonial</option>
            </select>
          </label>
          <button className="button dark-button" type="submit">
            <span className="material-symbols-outlined">search</span> Find
            counsel
          </button>
        </form>
        {submitted && (
          <div className="success-message">
            <span className="material-symbols-outlined">check_circle</span> 24
            advocates available for your selected matter.{" "}
            <button type="button" onClick={() => setSubmitted(false)}>
              Reset
            </button>
          </div>
        )}
      </section>

      <section className="section light-section" id="about">
        <div className="section-heading">
          <span className="eyebrow dark">THE VAKKEEL STANDARD</span>
          <h2>
            Institutional strength.
            <br />
            <em>Individual attention.</em>
          </h2>
          <p>
            We bring the depth of a premier institution to every brief, pairing
            rigorous legal strategy with the discretion and care your matter
            deserves.
          </p>
        </div>
        <div className="principles">
          <article>
            <span className="material-symbols-outlined">verified_user</span>
            <h3>Uncompromising integrity</h3>
            <p>
              Clear advice, protected privilege and a commitment to the facts
              that matter.
            </p>
          </article>
          <article>
            <span className="material-symbols-outlined">public</span>
            <h3>Connected across borders</h3>
            <p>
              One coordinated team for clients, families and businesses spanning
              jurisdictions.
            </p>
          </article>
          <article>
            <span className="material-symbols-outlined">bolt</span>
            <h3>Deliberate action</h3>
            <p>
              Decisive litigation strategy built for moments where timing
              changes everything.
            </p>
          </article>
        </div>
      </section>

      <section className="section practice-section" id="practice">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow dark">OUR PRACTICE AREAS</span>
            <h2>Depth where it matters.</h2>
          </div>
          <div>
            <p>
              From the first consultation to final judgment, our specialist
              teams bring clarity to the most consequential legal challenges.
            </p>
            <div className="search-field">
              <span className="material-symbols-outlined">search</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Filter practice areas"
              />
            </div>
          </div>
        </div>
        <div className="practice-grid">
          {visibleAreas.map((area) => (
            <article className="practice-card" key={area.title}>
              <div className="card-icon">
                <span className="material-symbols-outlined">{area.icon}</span>
              </div>
              <span className="card-tag">{area.tag}</span>
              <h3>{area.title}</h3>
              <p>{area.copy}</p>
              <button type="button" onClick={() => setModalOpen(true)}>
                Discuss your matter{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </article>
          ))}
        </div>
        {visibleAreas.length === 0 && (
          <p className="empty-state">
            No practice area matches “{query}”. Try a broader search.
          </p>
        )}
      </section>

      <section className="roster-banner" id="roster">
        <div>
          <span className="eyebrow">THE COLLEGIUM</span>
          <h2>Trusted counsel, wherever you are.</h2>
          <p>
            Meet the senior advocates and specialist practitioners who make up
            our pan-India and global network.
          </p>
        </div>
        <a className="button gold-button" href="/advocates">
          Meet our advocates{" "}
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </section>

      <footer id="insights">
        <div className="footer-brand">
          <a className="brand" href="#top">
            <span className="brand-mark">⚖</span>
            <span>
              <strong>VAKKEEL</strong>
              <small>& ASSOCIATES</small>
            </span>
          </a>
          <p>Premier legal counsel for India and the world.</p>
        </div>
        <div>
          <span className="footer-label">Chambers</span>
          <p>
            New Delhi · Mumbai · Kerala
            <br />
            Chandigarh · Bengaluru · Chennai
          </p>
        </div>
        <div>
          <span className="footer-label">Contact</span>
          <p>
            +91 6369717520
            <br />
            Vakkeelandassociates@gmail.com
          </p>
        </div>
        <div>
          <span className="footer-label">Navigate</span>
          <p>
            <a href="#practice">Practice areas</a>
            <br />
            <a href="#intake">Book a consultation</a>
          </p>
        </div>
      </footer>
      <div className="floating-help">
        <span className="material-symbols-outlined floating-help-icon">
          emergency
        </span>
        <span className="floating-help-copy">
          <strong>Need urgent counsel?</strong>
          <small>Reach our chamber directly</small>
        </span>
        <a
          className="floating-action call-action"
          href="tel:+916369717520"
          aria-label="Call urgent counsel"
        >
          <span className="material-symbols-outlined">call</span>
          <span>Call now</span>
        </a>
        <a
          className="floating-action whatsapp-action"
          href="https://wa.me/916369717520?text=Hello%20Vakkeel%20%26%20Associates%2C%20I%20need%20urgent%20legal%20counsel."
          target="_blank"
          rel="noreferrer"
          aria-label="Open WhatsApp for urgent counsel"
        >
          <span className="material-symbols-outlined">chat</span>
          <span>WhatsApp</span>
        </a>
      </div>
      {modalOpen && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={(event) =>
            event.target === event.currentTarget && setModalOpen(false)
          }
        >
          <div
            className="consult-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="consult-title"
          >
            <button
              className="modal-close"
              type="button"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <span className="eyebrow dark">PRIVATE CHAMBER INTAKE</span>
            <h2 id="consult-title">Start with a confidential conversation.</h2>
            <p>
              Leave your details and a member of our chamber will respond within
              45 minutes.
            </p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setModalOpen(false);
                setSubmitted(true);
              }}
            >
              <input required placeholder="Your name" />
              <input required type="email" placeholder="Email address" />
              <textarea
                required
                placeholder="Briefly describe your matter"
                rows="3"
              />
              <button className="button urgent" type="submit">
                Request a callback{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<GlassLandingPage />} />
        <Route path="/advocates" element={<AdvocatesPage />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<BlogPost />} />
        <Route path="/join" element={<JoinUsPage />} />
        <Route path="*" element={<GlassLandingPage />} />
      </Routes>
    </>
  );
}
export default App;
