import { team } from "../../data/team.js";

// Static two-person leadership section. Not a directory: no tabs, no filtering.
// Both founders are shown side by side in deliberately large, premium cards.

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function Founders() {
  return (
    <section className="founders-section" id="founders">
      <div className="glass-section-heading">
        <div>
          <span className="section-kicker">LEADERSHIP</span>
          <h2>
            The people behind
            <br />
            <em>the practice.</em>
          </h2>
        </div>
        <p>
          Vakkeel &amp; Associates and Indian Law School are led by founders who
          bring a shared commitment to legal education, professional standards
          and client service.
        </p>
      </div>

      <div className="founders-grid">
        {team.map((person) => (
          <article className="founder-card" key={person.id}>
            <div className="founder-photo">
              {person.photo ? (
                <img
                  src={person.photo}
                  alt={`${person.name}, ${person.role} of Vakkeel & Associates and Indian Law School`}
                  width="600"
                  height="750"
                  loading="lazy"
                />
              ) : (
                <span className="founder-initials" aria-hidden="true">
                  {initials(person.name)}
                </span>
              )}
            </div>
            <div className="founder-body">
              <h3>{person.name}</h3>
              <span className="founder-role">{person.role}</span>
              <span className="founder-orgs">
                {person.organizations.join(" · ")}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Founders;
