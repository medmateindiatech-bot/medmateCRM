import { OWNER_STEPS } from "../../content/pharmacyOwner";

export function OwnerStepsSection() {
  return (
    <section
      className="nl-sec"
      id="onboard"
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
            {OWNER_STEPS.eyebrow}
          </span>
          <h2>{OWNER_STEPS.heading}</h2>
          <p>{OWNER_STEPS.intro}</p>
        </div>
        <div className="nl-steps">
          {OWNER_STEPS.steps.map((n) => (
            <div className="nl-step" key={n.num}>
              <div className="nl-step-num">{n.num}</div>
              <h3>{n.title}</h3>
              <p>{n.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
