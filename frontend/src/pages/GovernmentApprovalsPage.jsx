import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useConsultation } from "../components/layout/ConsultationContext.jsx";
import "./government-approvals.css";

// No SEO library is used project-wide; set page-level metadata directly.
function usePageMetadata() {
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionTag?.getAttribute("content");
    document.title = "Government Approvals & Compliance | Vakkeel & Associates";
    if (descriptionTag) {
      descriptionTag.setAttribute(
        "content",
        "Vakkeel & Associates provides legal and procedural assistance with government approvals, licences, registrations, documentation and compliance requirements.",
      );
    }
    return () => {
      document.title = previousTitle;
      if (descriptionTag && previousDescription !== undefined)
        descriptionTag.setAttribute("content", previousDescription);
    };
  }, []);
}

const ASSIST_POINTS = [
  "Which approval, permission or NOC may apply to your activity",
  "Which authority is responsible for the requirement",
  "What documents and information are typically required",
  "Where an application needs to be submitted",
  "Whether additional permissions or clearances are relevant",
  "How to respond to procedural objections or queries",
  "How to track and follow up on a pending application",
  "What ongoing compliance obligations may apply",
];

const CATEGORIES = [
  {
    title: "Government Approvals",
    copy: "Assistance with identifying applicable permissions, approvals, NOCs and government requirements for a proposed activity, property, project or business.",
  },
  {
    title: "Licences & Registrations",
    copy: "Assistance with applications and documentation for relevant government licences, registrations and permissions.",
  },
  {
    title: "Local Authority Approvals",
    copy: "Assistance with procedures involving local self-government institutions, municipalities, corporations, panchayats and other applicable authorities.",
  },
  {
    title: "Property & Land Related Approvals",
    copy: "Assistance with government procedures relating to land and property documentation, permissions, certificates and related approvals.",
  },
  {
    title: "Business & Commercial Compliance",
    copy: "Assistance with government registrations, procedural requirements and ongoing compliance considerations for businesses and commercial activities.",
  },
  {
    title: "Documentation & Application Support",
    copy: "Assistance with preparing, reviewing and organising documents required for government applications and procedural submissions.",
  },
  {
    title: "Follow-up & Procedural Assistance",
    copy: "Assistance with tracking applications, responding to procedural requirements and coordinating necessary follow-ups with the relevant authorities.",
  },
  {
    title: "Compliance Review",
    copy: "Initial review of applicable government and regulatory requirements to identify procedural or documentation gaps.",
  },
];

const CLIENT_TYPES = [
  {
    title: "Property Owners",
    copy: "Clients dealing with property-related government permissions, certificates, documentation or procedural requirements.",
  },
  {
    title: "Businesses",
    copy: "Businesses dealing with registrations, licences, permissions and government compliance procedures.",
  },
  {
    title: "Developers & Project Owners",
    copy: "Clients navigating multiple approvals and authority requirements for projects.",
  },
  {
    title: "NRIs",
    copy: "NRIs who require assistance navigating government procedures in India while managing matters remotely.",
  },
  {
    title: "Individuals & Families",
    copy: "Individuals who need assistance with documentation, permissions, certificates or other government procedures.",
  },
  {
    title: "Entrepreneurs",
    copy: "New businesses requiring assistance understanding applicable registrations and procedural requirements.",
  },
];

const PROCESS = [
  {
    num: "01",
    title: "Understand",
    copy: "We review the client's requirement and identify the relevant authorities, approvals and procedural requirements.",
  },
  {
    num: "02",
    title: "Assess",
    copy: "We identify required documents, potential procedural issues and applicable compliance requirements.",
  },
  {
    num: "03",
    title: "Prepare",
    copy: "We assist with organising and preparing the necessary documentation and applications.",
  },
  {
    num: "04",
    title: "Navigate",
    copy: "We assist with procedural submissions, communications and required follow-ups.",
  },
  {
    num: "05",
    title: "Monitor",
    copy: "We help track the matter and identify additional requirements or responses where applicable.",
  },
];

const FAQS = [
  {
    q: "Does this service guarantee approval?",
    a: "No. Government approvals, licences and permissions are decided solely by the relevant authority. Vakkel & Associates provides assistance, guidance and procedural support through the process — the final decision always rests with the authority concerned.",
  },
  {
    q: "How is this different from the firm’s legal practice areas?",
    a: "This is a professional assistance offering that focuses on government-facing procedures, documentation and compliance. It complements the firm’s legal practice areas rather than replacing them.",
  },
  {
    q: "Can you help if I do not know which approval I need?",
    a: "Yes. A significant part of this service is reviewing your requirement, identifying the relevant authorities and requirements, and clarifying what may apply before you proceed.",
  },
  {
    q: "Can NRIs use this service?",
    a: "Yes. NRIs frequently require assistance navigating government procedures in India from overseas, and the service is structured to support remote coordination and documentation.",
  },
  {
    q: "Do you handle the application on my behalf?",
    a: "Vakkel & Associates assists with preparation, procedural submissions, coordination and follow-ups, subject to applicable laws and authority requirements. We do not act as a government authority or guarantee any outcome.",
  },
  {
    q: "What information should I share to begin?",
    a: "A short description of your requirement, the location and nature of the activity, property or business, and any documents or correspondence you already have. A consultation helps clarify the appropriate next steps.",
  },
];

function GovernmentApprovalsPage() {
  usePageMetadata();
  const { openConsultation } = useConsultation();
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="ga-page">
      <section className="ga-hero">
        <div className="ga-hero-glow" />
        <div className="ga-hero-content">
          <span className="section-kicker">
            <span className="eyebrow-line" />
            SERVICE OFFERING
          </span>
          <h1>
            Government Approvals
            <br />
            <em>&amp; Compliance.</em>
          </h1>
          <p className="ga-hero-tag">
            Professional assistance for navigating government procedures,
            approvals, registrations and compliance requirements.
          </p>
          <p>
            From approvals and registrations to documentation and procedural
            compliance, Vakkel &amp; Associates provides structured assistance
            in navigating government-facing processes.
          </p>
          <div className="ga-hero-actions">
            <button
              className="gold-glass-button large"
              type="button"
              onClick={openConsultation}
            >
              Book a Consultation <span>↗</span>
            </button>
            <a className="clear-glass-button" href="#service-categories">
              Explore Services <span>↓</span>
            </a>
          </div>
        </div>
        <div className="ga-hero-panel">
          <span className="footer-label-glass">Focus areas</span>
          <span>Approvals</span>
          <span>Licences</span>
          <span>Registrations</span>
          <span>Documentation</span>
          <span>Compliance</span>
        </div>
      </section>

      <section className="ga-section ga-assist">
        <div className="glass-section-heading">
          <div>
            <span className="section-kicker">WHAT WE ASSIST WITH</span>
            <h2>
              Government procedures
              <br />
              should not become <em>a roadblock.</em>
            </h2>
          </div>
          <p>
            Clients often face uncertainty about where to begin, which authority
            to approach and what is required. We help clarify the process and
            support you through it.
          </p>
        </div>
        <div className="ga-assist-grid">
          <div className="ga-assist-list">
            <span className="footer-label-glass">Clients commonly ask</span>
            <ul>
              {ASSIST_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="ga-assist-note">
            <p>
              We provide assistance, guidance and procedural support so that
              government-facing requirements are understood and handled in an
              organised way, subject to applicable laws and authority
              requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="ga-section ga-categories" id="service-categories">
        <div className="glass-section-heading">
          <div>
            <span className="section-kicker">SERVICE CATEGORIES</span>
            <h2>
              Where we can
              <br />
              assist you.
            </h2>
          </div>
          <p>
            A focused set of assistance areas covering the government-facing
            procedures clients most often need support with.
          </p>
        </div>
        <div className="ga-card-grid">
          {CATEGORIES.map((item, i) => (
            <article className="ga-card" key={item.title}>
              <span className="ga-card-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ga-section ga-who">
        <div className="glass-section-heading">
          <div>
            <span className="section-kicker">WHO THIS IS FOR</span>
            <h2>
              Built for clients
              <br />
              facing <em>procedural requirements.</em>
            </h2>
          </div>
          <p>
            This offering is intended for individuals, businesses and
            professionals who need clarity and support around government
            procedures.
          </p>
        </div>
        <div className="ga-card-grid ga-who-grid">
          {CLIENT_TYPES.map((item) => (
            <article className="ga-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ga-section ga-process">
        <div className="glass-section-heading">
          <div>
            <span className="section-kicker">HOW WE HELP</span>
            <h2>
              A structured
              <br />
              <em>way forward.</em>
            </h2>
          </div>
          <p>
            Our role is assistance, guidance and procedural support. The
            relevant government authority makes the final decision on any
            approval or permission.
          </p>
        </div>
        <div className="ga-process-track">
          {PROCESS.map((step) => (
            <div className="ga-process-step" key={step.num}>
              <span className="ga-step-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </div>
          ))}
        </div>
        <p className="ga-process-note">
          Vakkel &amp; Associates does not guarantee any approval, licence or
          clearance. All assistance is provided subject to applicable laws and
          authority requirements.
        </p>
      </section>

      <section className="ga-section ga-why">
        <div className="glass-section-heading">
          <div>
            <span className="section-kicker">
              WHY PROFESSIONAL ASSISTANCE MATTERS
            </span>
            <h2>
              Clarity before
              <br />
              <em>you commit.</em>
            </h2>
          </div>
          <p>
            Procedural requirements are easier to manage when identified early.
          </p>
        </div>
        <div className="ga-why-grid">
          <article className="ga-why-item">
            <h3>Reduce avoidable delays</h3>
            <p>
              Identifying the correct authority, requirement and documentation
              reduces the likelihood of avoidable procedural setbacks.
            </p>
          </article>
          <article className="ga-why-item">
            <h3>Organised documentation</h3>
            <p>
              Structured preparation and review of documents supports smoother
              submissions and clearer communication with authorities.
            </p>
          </article>
          <article className="ga-why-item">
            <h3>Informed decisions</h3>
            <p>
              Understanding what applies before you proceed helps you plan your
              matter with greater confidence.
            </p>
          </article>
        </div>
      </section>

      <section className="ga-section ga-faq">
        <div className="glass-section-heading">
          <div>
            <span className="section-kicker">FREQUENTLY ASKED</span>
            <h2>
              Common
              <br />
              <em>questions.</em>
            </h2>
          </div>
        </div>
        <div className="ga-faq-list">
          {FAQS.map((item, i) => (
            <div
              className={`ga-faq-item${openFaq === i ? " open" : ""}`}
              key={item.q}
            >
              <button
                className="ga-faq-q"
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                {item.q}
                <span className="ga-faq-icon">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && (
                <div className="ga-faq-a">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="ga-closing">
        <div className="ga-closing-glow" />
        <div className="ga-closing-panel">
          <span className="section-kicker">START A CONVERSATION</span>
          <h2>
            Understand the process
            <br />
            before you <em>proceed.</em>
          </h2>
          <p>
            Share your requirement and our chamber will help clarify the
            relevant authorities, requirements and next steps.
          </p>
          <div>
            <button
              className="gold-glass-button large"
              type="button"
              onClick={openConsultation}
            >
              Book a Consultation <span>↗</span>
            </button>
            <Link className="clear-glass-button" to="/#practice">
              View legal practice areas <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GovernmentApprovalsPage;
