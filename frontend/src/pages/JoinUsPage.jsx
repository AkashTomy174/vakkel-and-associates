import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { requireSupabase } from "../api/supabaseClient";
import Seo from "../components/Seo/Seo.jsx";
import { breadcrumbSchema } from "../data/schema.js";
import "./join-us.css";

const PRACTICES = [
  "NRI All Legal Services",
  "Criminal Law",
  "Corporate, Commercial & Business Law",
  "Real Estate Law",
  "Family & Matrimonial",
  "Arbitration & Commercial Settlement",
  "Maritime & Admiralty Law",
  "Wealth Management, Succession & Inheritance Law",
  "Labour & Employment Law",
];

const WHY_ITEMS = [
  {
    num: "01",
    title: "Complex Matters",
    copy: "Engage with sophisticated legal matters across specialist practice areas.",
  },
  {
    num: "02",
    title: "Professional Network",
    copy: "Collaborate with advocates and legal professionals with complementary expertise.",
  },
  {
    num: "03",
    title: "Practice Development",
    copy: "Build your professional profile and expand your opportunities through a broader legal network.",
  },
  {
    num: "04",
    title: "Modern Legal Practice",
    copy: "Work within technology-enabled workflows designed to improve efficiency and client experience.",
  },
  {
    num: "05",
    title: "Long-Term Growth",
    copy: "Develop meaningful professional relationships and opportunities for sustained practice growth.",
  },
];

const ROLES = [
  "Associate Advocates",
  "Senior Associates",
  "Independent Practitioners",
  "Legal Consultants",
  "Specialist Lawyers",
  "Practice Partners",
  "Strategic Partners",
];

const ASSOC_TYPES = [
  {
    key: "associate",
    label: "Associate",
    desc: "For advocates building experience within a collaborative practice.",
  },
  {
    key: "senior-associate",
    label: "Senior Associate",
    desc: "For experienced practitioners seeking broader matters and collaboration.",
  },
  {
    key: "consultant",
    label: "Consultant",
    desc: "For specialists contributing expertise to selected matters.",
  },
  {
    key: "practice-partner",
    label: "Practice Partner",
    desc: "For established professionals developing a deeper relationship with the firm.",
  },
  {
    key: "strategic-partner",
    label: "Strategic Partner",
    desc: "For professionals or practices exploring long-term collaboration.",
  },
];

const TIMELINE = [
  {
    num: "01",
    title: "Application",
    copy: "Submit your professional profile and areas of expertise.",
  },
  {
    num: "02",
    title: "Profile Review",
    copy: "Our team reviews your experience, qualifications and practice alignment.",
  },
  {
    num: "03",
    title: "Initial Discussion",
    copy: "A conversation to understand your professional goals and potential fit.",
  },
  {
    num: "04",
    title: "Professional Assessment",
    copy: "Further discussion regarding expertise, practice and engagement.",
  },
  {
    num: "05",
    title: "Terms & Engagement",
    copy: "Discuss the appropriate association structure and terms.",
  },
  {
    num: "06",
    title: "Welcome",
    copy: "Begin your professional relationship with the firm.",
  },
];

const FAQS = [
  {
    q: "Who can apply?",
    a: "Any advocate enrolled with a Bar Council in India, or a qualified legal professional with relevant experience, may apply to join Vakkeel & Associates.",
  },
  {
    q: "What types of legal professionals are you looking for?",
    a: "We welcome advocates, senior counsel, independent practitioners, legal consultants and professionals with expertise across our specialist practice areas.",
  },
  {
    q: "Can independent advocates apply?",
    a: "Yes. Independent advocates may apply as Consultants or Strategic Partners, contributing expertise to selected matters without a full-time commitment.",
  },
  {
    q: 'What does "Practice Partner" mean?',
    a: "A Practice Partner is an established professional who develops a deeper, ongoing relationship with the firm — collaborating on matters, sharing resources and contributing to the firm's growth.",
  },
  {
    q: "Can I apply if my practice area is not currently listed?",
    a: "Yes. We review all applications on their merits. If your expertise is complementary to our work, we encourage you to apply and describe your practice area in your application.",
  },
  {
    q: "What happens after I submit my application?",
    a: "Your profile will be reviewed by our team. If your experience aligns with our current requirements, a member of the firm will contact you to arrange an initial conversation.",
  },
];

const STEPS = [
  "Personal",
  "Professional",
  "Expertise",
  "Association",
  "Documents",
  "Submit",
];

const EMPTY_FORM = {
  full_name: "",
  email: "",
  phone: "",
  whatsapp: "",
  location: "",
  designation: "",
  enrollment_number: "",
  enrollment_year: "",
  years_of_practice: "",
  current_organization: "",
  primary_practice_area: "",
  secondary_practice_area: "",
  jurisdictions: "",
  expertise: "",
  experience: "",
  linkedin_url: "",
  website_url: "",
  association_type: "",
  message: "",
  consent: false,
};

function Hero({ onApply }) {
  return (
    <section className="ju-hero">
      <div className="ju-hero-content">
        <span className="ju-kicker">
          <span className="ju-kicker-line" />
          JOIN VAKKEEL & ASSOCIATES
        </span>
        <h1>
          Build Your Practice.
          <br />
          <em>Grow With Purpose.</em>
        </h1>
        <p className="ju-hero-sub">
          Join a collaborative legal practice built around expertise, integrity
          and long-term professional growth. Vakkeel & Associates brings
          together legal professionals with complementary expertise to serve
          clients across complex matters.
        </p>
        <div className="ju-hero-actions">
          <button className="ju-btn-primary" type="button" onClick={onApply}>
            Apply to Join the Firm ↗
          </button>
          <Link className="ju-btn-secondary" to="/join#why-join">
            Explore Opportunities ↓
          </Link>
        </div>
      </div>
      <div className="ju-hero-image">
        <div className="ju-hero-image-inner" />
        <div className="ju-hero-image-lines" />
        <div className="ju-hero-panel">
          <span className="ju-hero-panel-label">PRACTICE AREAS</span>
          <ul className="ju-hero-panel-list">
            {PRACTICES.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <div className="ju-hero-image-accent">
            <strong>9</strong>
            <span>Specialist Areas</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="ju-intro">
      <div className="ju-intro-left">
        <span className="ju-kicker">
          <span className="ju-kicker-line" />A DIFFERENT KIND OF PRACTICE
        </span>
        <h2>
          Expertise Is Stronger
          <br />
          When It Is <em>Connected.</em>
        </h2>
      </div>
      <div className="ju-intro-divider" />
      <div className="ju-intro-right">
        <p>
          Legal practice increasingly demands collaboration across disciplines,
          jurisdictions and areas of expertise. Vakkeel & Associates provides a
          professional environment where advocates and legal professionals can
          collaborate, develop their practices and contribute to complex
          matters.
        </p>
      </div>
    </section>
  );
}

function WhyJoin() {
  return (
    <section className="ju-why" id="why-join">
      <div className="ju-why-header">
        <div>
          <span className="ju-kicker" style={{ color: "#e0c063" }}>
            <span className="ju-kicker-line" />
            WHY JOIN US
          </span>
          <h2>
            Why Vakkeel
            <br />& Associates
          </h2>
        </div>
        <p>
          Five reasons serious legal professionals choose to build their
          practice with us.
        </p>
      </div>
      <div className="ju-why-grid">
        {WHY_ITEMS.map((item) => (
          <div className="ju-why-item" key={item.num}>
            <span className="ju-why-num">{item.num}</span>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PracticeAreas() {
  return (
    <section className="ju-practices">
      <div className="ju-practices-header">
        <span className="ju-kicker">
          <span className="ju-kicker-line" />
          PRACTICE AREAS
        </span>
        <h2>
          Where Your Expertise
          <br />
          <em>Belongs.</em>
        </h2>
        <p>
          We are interested in professionals with expertise across our
          specialist practice areas.
        </p>
      </div>
      <div className="ju-practices-grid">
        {PRACTICES.map((name, i) => (
          <div className="ju-practice-item" key={name}>
            <span className="ju-practice-num">0{i + 1}</span>
            <h3>{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhoWeSeek() {
  return (
    <section className="ju-who">
      <div className="ju-who-inner">
        <div className="ju-who-left">
          <span className="ju-kicker">
            <span className="ju-kicker-line" />
            WHO WE ARE LOOKING FOR
          </span>
          <h2>
            Professionals
            <br />
            With <em>Perspective.</em>
          </h2>
          <p>
            We welcome applications from advocates and legal professionals who
            combine strong legal expertise with integrity, professionalism and a
            commitment to client service.
          </p>
        </div>
        <div className="ju-roles">
          {ROLES.map((role) => (
            <div className="ju-role-item" key={role}>
              <span>{role}</span>
              <span className="ju-role-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AssocTypes() {
  return (
    <section className="ju-assoc">
      <div className="ju-assoc-header">
        <span className="ju-kicker">
          <span className="ju-kicker-line" />
          ASSOCIATION TYPES
        </span>
        <h2>
          Find the Right Way
          <br />
          to <em>Work Together.</em>
        </h2>
      </div>
      <div className="ju-assoc-grid">
        {ASSOC_TYPES.map((type) => (
          <div className="ju-assoc-card" key={type.key}>
            <strong>{type.label}</strong>
            <h3>{type.label}</h3>
            <p>{type.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="ju-timeline">
      <div className="ju-timeline-header">
        <span className="ju-kicker">
          <span className="ju-kicker-line" />
          THE PROCESS
        </span>
        <h2>
          The Path
          <br />
          to <em>Joining.</em>
        </h2>
      </div>
      <div className="ju-timeline-track">
        {TIMELINE.map((step) => (
          <div className="ju-timeline-step" key={step.num}>
            <div className="ju-step-num">{step.num}</div>
            <h4>{step.title}</h4>
            <p>{step.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function UploadField({ label, name, file, onChange, onRemove, required }) {
  const ref = useRef();
  return (
    <label className="ju-label">
      {label}
      {required && " *"}
      {file ? (
        <div className="ju-upload-file">
          <span>{file.name}</span>
          <button
            className="ju-upload-remove"
            type="button"
            onClick={onRemove}
            aria-label="Remove file"
          >
            ×
          </button>
        </div>
      ) : (
        <div
          className="ju-upload-area"
          onClick={() => ref.current.click()}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && ref.current.click()}
        >
          <input
            ref={ref}
            type="file"
            name={name}
            accept=".pdf,.doc,.docx"
            onChange={onChange}
          />
          <span className="ju-upload-label">Click to upload</span>
          <span className="ju-upload-hint">PDF, DOC or DOCX · Max 5MB</span>
        </div>
      )}
    </label>
  );
}

function ApplicationForm({ formRef }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(EMPTY_FORM);
  const [files, setFiles] = useState({
    cv: null,
    enrollment: null,
    extra: null,
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);

  function set(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function validate(s) {
    const e = {};
    if (s === 0) {
      if (!form.full_name.trim()) e.full_name = "Required";
      if (!form.email.trim()) e.email = "Required";
      if (!form.phone.trim()) e.phone = "Required";
      if (!form.location.trim()) e.location = "Required";
    }
    if (s === 1) {
      if (!form.designation.trim()) e.designation = "Required";
      if (!form.enrollment_number.trim()) e.enrollment_number = "Required";
      if (!form.primary_practice_area) e.primary_practice_area = "Required";
    }
    if (s === 3) {
      if (!form.association_type)
        e.association_type = "Select an association type";
    }
    if (s === 5) {
      if (!form.consent) e.consent = "You must confirm before submitting";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (validate(step)) setStep((s) => s + 1);
  }

  function back() {
    setStep((s) => s - 1);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate(5)) return;
    setStatus("loading");
    setServerError(null);
    let error;
    try {
      ({ error } = await requireSupabase()
        .from("associate_applications")
        .insert({
          full_name: form.full_name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          whatsapp: form.whatsapp.trim() || null,
          location: form.location.trim(),
          designation: form.designation.trim(),
          enrollment_number: form.enrollment_number.trim(),
          enrollment_year: form.enrollment_year || null,
          years_of_practice: form.years_of_practice || null,
          current_organization: form.current_organization.trim() || null,
          primary_practice_area: form.primary_practice_area || null,
          secondary_practice_area: form.secondary_practice_area || null,
          jurisdictions: form.jurisdictions.trim() || null,
          expertise: form.expertise.trim() || null,
          experience: form.experience.trim() || null,
          linkedin_url: form.linkedin_url.trim() || null,
          website_url: form.website_url.trim() || null,
          association_type: form.association_type,
          message: form.message.trim() || null,
          created_at: new Date().toISOString(),
        }));
    } catch {
      error = true;
    }
    if (error) {
      setServerError(
        "Something went wrong. Please try again or contact us directly.",
      );
      setStatus("idle");
      return;
    }
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="ju-form">
        <div className="ju-success">
          <div className="ju-success-icon">✓</div>
          <span
            className="ju-kicker"
            style={{ justifyContent: "center", color: "#88701e" }}
          >
            APPLICATION RECEIVED
          </span>
          <h2>Thank you for your interest.</h2>
          <p>
            Your professional profile has been received and will be reviewed by
            our team. If your experience aligns with our current requirements, a
            member of the firm will contact you.
          </p>
          <Link className="ju-btn-primary" to="/">
            Return to Vakkeel & Associates ↗
          </Link>
        </div>
      </div>
    );
  }

  const stepContent = [
    /* 0 — Personal */
    <div key="personal">
      <div className="ju-form-group">
        <h3 className="ju-form-group-title">Personal Information</h3>
        <div className="ju-form-grid two">
          <label className="ju-label">
            Full Name *
            <input
              className="ju-input"
              value={form.full_name}
              onChange={set("full_name")}
              placeholder="Your full name"
            />
            {errors.full_name && (
              <span className="ju-field-error">{errors.full_name}</span>
            )}
          </label>
          <label className="ju-label">
            Email Address *
            <input
              className="ju-input"
              type="email"
              value={form.email}
              onChange={set("email")}
              placeholder="you@example.com"
            />
            {errors.email && (
              <span className="ju-field-error">{errors.email}</span>
            )}
          </label>
          <label className="ju-label">
            Phone Number *
            <input
              className="ju-input"
              type="tel"
              value={form.phone}
              onChange={set("phone")}
              placeholder="+91 98765 43210"
            />
            {errors.phone && (
              <span className="ju-field-error">{errors.phone}</span>
            )}
          </label>
          <label className="ju-label">
            WhatsApp Number
            <input
              className="ju-input"
              type="tel"
              value={form.whatsapp}
              onChange={set("whatsapp")}
              placeholder="+91 98765 43210"
            />
          </label>
          <label className="ju-label" style={{ gridColumn: "1 / -1" }}>
            City / Location *
            <input
              className="ju-input"
              value={form.location}
              onChange={set("location")}
              placeholder="e.g. New Delhi"
            />
            {errors.location && (
              <span className="ju-field-error">{errors.location}</span>
            )}
          </label>
        </div>
      </div>
    </div>,

    /* 1 — Professional */
    <div key="professional">
      <div className="ju-form-group">
        <h3 className="ju-form-group-title">Professional Information</h3>
        <div className="ju-form-grid two">
          <label className="ju-label">
            Professional Designation *
            <input
              className="ju-input"
              value={form.designation}
              onChange={set("designation")}
              placeholder="e.g. Advocate, Senior Counsel"
            />
            {errors.designation && (
              <span className="ju-field-error">{errors.designation}</span>
            )}
          </label>
          <label className="ju-label">
            Bar Council Enrollment Number *
            <input
              className="ju-input"
              value={form.enrollment_number}
              onChange={set("enrollment_number")}
              placeholder="State/Year/Number"
            />
            {errors.enrollment_number && (
              <span className="ju-field-error">{errors.enrollment_number}</span>
            )}
          </label>
          <label className="ju-label">
            Year of Enrollment
            <input
              className="ju-input"
              value={form.enrollment_year}
              onChange={set("enrollment_year")}
              placeholder="e.g. 2010"
            />
          </label>
          <label className="ju-label">
            Years of Practice
            <select
              className="ju-select"
              value={form.years_of_practice}
              onChange={set("years_of_practice")}
            >
              <option value="">Select</option>
              <option value="1-3">1–3 years</option>
              <option value="4-7">4–7 years</option>
              <option value="8-12">8–12 years</option>
              <option value="13-20">13–20 years</option>
              <option value="20+">20+ years</option>
            </select>
          </label>
          <label className="ju-label">
            Current Firm / Organization
            <input
              className="ju-input"
              value={form.current_organization}
              onChange={set("current_organization")}
              placeholder="Current employer or independent"
            />
          </label>
          <label className="ju-label">
            Primary Practice Area *
            <select
              className="ju-select"
              value={form.primary_practice_area}
              onChange={set("primary_practice_area")}
            >
              <option value="">Select</option>
              {PRACTICES.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
            {errors.primary_practice_area && (
              <span className="ju-field-error">
                {errors.primary_practice_area}
              </span>
            )}
          </label>
          <label className="ju-label">
            Secondary Practice Area
            <select
              className="ju-select"
              value={form.secondary_practice_area}
              onChange={set("secondary_practice_area")}
            >
              <option value="">Select</option>
              {PRACTICES.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </label>
          <label className="ju-label">
            Courts / Jurisdictions
            <input
              className="ju-input"
              value={form.jurisdictions}
              onChange={set("jurisdictions")}
              placeholder="e.g. Delhi HC, Supreme Court"
            />
          </label>
        </div>
      </div>
    </div>,

    /* 2 — Expertise */
    <div key="expertise">
      <div className="ju-form-group">
        <h3 className="ju-form-group-title">Professional Profile</h3>
        <div className="ju-form-grid">
          <label className="ju-label">
            Areas of Expertise
            <textarea
              className="ju-textarea"
              rows={3}
              value={form.expertise}
              onChange={set("expertise")}
              placeholder="Describe your key areas of legal expertise"
            />
          </label>
          <label className="ju-label">
            Notable Experience / Matters
            <textarea
              className="ju-textarea"
              rows={3}
              value={form.experience}
              onChange={set("experience")}
              placeholder="Significant matters, cases or achievements"
            />
          </label>
          <div className="ju-form-grid two">
            <label className="ju-label">
              LinkedIn / Professional Profile
              <input
                className="ju-input"
                value={form.linkedin_url}
                onChange={set("linkedin_url")}
                placeholder="https://linkedin.com/in/..."
              />
            </label>
            <label className="ju-label">
              Website / Portfolio
              <input
                className="ju-input"
                value={form.website_url}
                onChange={set("website_url")}
                placeholder="https://..."
              />
            </label>
          </div>
        </div>
      </div>
    </div>,

    /* 3 — Association */
    <div key="association">
      <div className="ju-form-group">
        <h3 className="ju-form-group-title">Association Preference</h3>
        <p style={{ color: "var(--muted)", fontSize: 13, marginBottom: 20 }}>
          How would you like to associate with Vakkeel & Associates?
        </p>
        <div className="ju-assoc-options">
          {ASSOC_TYPES.map((t) => (
            <div
              key={t.key}
              className={`ju-assoc-option${form.association_type === t.key ? " selected" : ""}`}
              onClick={() =>
                setForm((prev) => ({ ...prev, association_type: t.key }))
              }
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                setForm((prev) => ({ ...prev, association_type: t.key }))
              }
            >
              {t.label}
            </div>
          ))}
        </div>
        {errors.association_type && (
          <span
            className="ju-field-error"
            style={{ display: "block", marginTop: 10 }}
          >
            {errors.association_type}
          </span>
        )}
      </div>
    </div>,

    /* 4 — Documents */
    <div key="documents">
      <div className="ju-form-group">
        <h3 className="ju-form-group-title">Documents</h3>
        <div className="ju-form-grid">
          <UploadField
            label="CV / Resume"
            name="cv"
            required
            file={files.cv}
            onChange={(e) =>
              setFiles((f) => ({ ...f, cv: e.target.files[0] || null }))
            }
            onRemove={() => setFiles((f) => ({ ...f, cv: null }))}
          />
          <UploadField
            label="Enrollment Certificate"
            name="enrollment"
            file={files.enrollment}
            onChange={(e) =>
              setFiles((f) => ({ ...f, enrollment: e.target.files[0] || null }))
            }
            onRemove={() => setFiles((f) => ({ ...f, enrollment: null }))}
          />
          <UploadField
            label="Additional Documents"
            name="extra"
            file={files.extra}
            onChange={(e) =>
              setFiles((f) => ({ ...f, extra: e.target.files[0] || null }))
            }
            onRemove={() => setFiles((f) => ({ ...f, extra: null }))}
          />
        </div>
      </div>
    </div>,

    /* 5 — Submit */
    <div key="submit">
      <div className="ju-form-group">
        <h3 className="ju-form-group-title">Your Message</h3>
        <label className="ju-label">
          Tell us about your practice and why you are interested in joining
          Vakkeel & Associates.
          <textarea
            className="ju-textarea"
            rows={5}
            value={form.message}
            onChange={set("message")}
            placeholder="Describe your practice, professional goals and what you hope to contribute..."
          />
        </label>
      </div>
      <div className="ju-consent">
        <input
          type="checkbox"
          id="ju-consent"
          checked={form.consent}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, consent: e.target.checked }))
          }
        />
        <label htmlFor="ju-consent">
          I confirm that the information provided is accurate and authorise
          Vakkeel & Associates to contact me regarding my application.
        </label>
      </div>
      {errors.consent && (
        <span
          className="ju-field-error"
          style={{ display: "block", marginTop: 8 }}
        >
          {errors.consent}
        </span>
      )}
      {serverError && (
        <div className="ju-form-error" style={{ marginTop: 16 }}>
          {serverError}
        </div>
      )}
    </div>,
  ];

  return (
    <div className="ju-form" ref={formRef}>
      <div className="ju-form-step-bar">
        {STEPS.map((label, i) => (
          <div
            key={label}
            className={`ju-step-tab${i === step ? " active" : ""}`}
          >
            <span className="ju-step-tab-num">
              {String(i + 1).padStart(2, "0")}
            </span>
            {label}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <div className="ju-form-body">{stepContent[step]}</div>
        <div className="ju-form-nav">
          <span className="ju-form-progress">
            0{step + 1} / 0{STEPS.length}
          </span>
          <div style={{ display: "flex", gap: 10 }}>
            {step > 0 && (
              <button className="ju-btn-back" type="button" onClick={back}>
                ← Back
              </button>
            )}
            {step < STEPS.length - 1 ? (
              <button className="ju-btn-next" type="button" onClick={next}>
                Continue →
              </button>
            ) : (
              <button
                className="ju-submit-btn"
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Submitting…" : "Submit Application →"}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="ju-faq">
      <div className="ju-faq-header">
        <span className="ju-kicker">
          <span className="ju-kicker-line" />
          FREQUENTLY ASKED
        </span>
        <h2>
          Common
          <br />
          <em>Questions.</em>
        </h2>
      </div>
      <div className="ju-faq-list">
        {FAQS.map((item, i) => (
          <div
            className={`ju-faq-item${open === i ? " open" : ""}`}
            key={item.q}
          >
            <div
              className="ju-faq-q"
              onClick={() => setOpen(open === i ? null : i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && setOpen(open === i ? null : i)
              }
            >
              {item.q}
              <span className="ju-faq-icon">+</span>
            </div>
            <div className="ju-faq-a">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ClosingCTA({ onApply }) {
  return (
    <section className="ju-closing">
      <div
        className="ju-kicker"
        style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}
      >
        <span className="ju-kicker-line" />
        YOUR NEXT CHAPTER
        <span className="ju-kicker-line" />
      </div>
      <h2>
        Bring Your Expertise
        <br />
        to a <em>Larger Practice.</em>
      </h2>
      <p>
        Explore how your experience and expertise could contribute to the
        continued growth of Vakkeel & Associates.
      </p>
      <button className="ju-btn-primary" type="button" onClick={onApply}>
        Apply to Join the Firm →
      </button>
    </section>
  );
}

function JoinUsPage() {
  const formRef = useRef(null);

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="ju">
      <Seo
        title="Join Vakkeel & Associates | Careers for Advocates"
        description="Build your legal practice with Vakkeel & Associates. We welcome advocates, consultants and practice partners across specialist practice areas in India."
        path="/join"
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Join Us", path: "/join" },
          ]),
        ]}
      />
      <Hero onApply={scrollToForm} />
      <Intro />
      <WhyJoin />
      <PracticeAreas />
      <WhoWeSeek />
      <AssocTypes />
      <Timeline />
      <section className="ju-form-section" id="apply">
        <div className="ju-form-header">
          <span className="ju-kicker">
            <span className="ju-kicker-line" />
            START THE CONVERSATION
          </span>
          <h2>
            Begin Your
            <br />
            <em>Application.</em>
          </h2>
          <p>
            Tell us about your practice, experience and how you believe you
            could contribute to Vakkeel & Associates.
          </p>
        </div>
        <ApplicationForm formRef={formRef} />
      </section>
      <FAQ />
      <ClosingCTA onApply={scrollToForm} />
    </div>
  );
}

export default JoinUsPage;
