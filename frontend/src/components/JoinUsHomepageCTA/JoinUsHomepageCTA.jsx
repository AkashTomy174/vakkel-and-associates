import { Link } from "react-router-dom";

// Homepage CTA promoting associate opportunities. Extracted from JoinUsPage so
// the homepage does not statically import the whole join page (keeps /join
// lazy-loadable and the homepage bundle small).
function JoinUsHomepageCTA() {
  return (
    <section className="ju-homepage-cta">
      <div className="ju-homepage-cta-inner">
        <div>
          <span className="ju-homepage-eyebrow">FOR LEGAL PROFESSIONALS</span>
          <h2>
            Build Your Practice With
            <br />
            Vakkeel &amp; Associates.
          </h2>
          <p>
            We welcome experienced advocates and legal professionals interested
            in building their practice within a collaborative and professionally
            driven legal environment.
          </p>
        </div>
        <Link className="ju-homepage-cta-link" to="/join">
          Explore Associate Opportunities <span>↗</span>
        </Link>
      </div>
    </section>
  );
}

export default JoinUsHomepageCTA;
