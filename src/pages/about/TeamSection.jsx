import { COMPANY_FACTS, TEAM } from "../../content/about";

export function TeamSection() {
  return (
    <>
      <section
        className="nl-sec"
        style={{
          background: "#fff",
        }}
      >
        <div className="nl-wrap">
          <div className="nl-sec-head">
            <span
              className="nl-eyebrow"
              style={{
                justifyContent: "center",
              }}
            >
              The team
            </span>
            <h2>Meet the team</h2>
            <p>Founders, doctors, engineers and pharmacists building for the corner chemist.</p>
          </div>
          <div className="nl-team-grid">
            {TEAM.map((n) => (
              <div className="nl-team" key={n.initials}>
                <span className="nl-avatar">{n.initials}</span>
                <b>{n.name}</b>
                <span>{n.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="nl-sec"
        style={{
          background: "var(--surface)",
        }}
      >
        <div className="nl-wrap">
          <div className="nl-sec-head">
            <span
              className="nl-eyebrow"
              style={{
                justifyContent: "center",
              }}
            >
              The fine print
            </span>
            <h2>Company information</h2>
          </div>
          <div className="nl-legal">
            {COMPANY_FACTS.map((n) => (
              <div className="nl-legal-row" key={n.label}>
                <b>{n.label}</b>
                <span>{n.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
