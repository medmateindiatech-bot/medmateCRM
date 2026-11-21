import { ClockIcon, TickIcon } from "../../components/icons";
import { OWNER_ONLINE } from "../../content/pharmacyOwner";

export function OwnerOnlineSection() {
  return (
    <section className="nl-sec nl-showcase" id="online">
      <div className="nl-wrap">
        <div className="nl-sec-head">
          <span
            className="nl-eyebrow"
            style={{
              justifyContent: "center",
            }}
          >
            {OWNER_ONLINE.eyebrow}
          </span>
          <h2>{OWNER_ONLINE.heading}</h2>
          <p>{OWNER_ONLINE.intro}</p>
        </div>
        <div className="nl-steps">
          {OWNER_ONLINE.steps.map((n) => (
            <div className="nl-step" key={n.num}>
              <div className="nl-step-num">{n.num}</div>
              <h3>{n.title}</h3>
              <p>{n.body}</p>
            </div>
          ))}
        </div>
        <div className="nl-showcase-tags">
          {OWNER_ONLINE.tags.map((n) => (
            <span className="nl-dtag" key={n.label}>
              {n.icon === "clock" ? <ClockIcon /> : <TickIcon />} {n.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
