import { ClockIcon, TickIcon } from "../../components/icons";
import { OWNER_JOIN } from "../../content/pharmacyOwner";
import { JoinForm } from "./JoinForm";

export function JoinSection() {
  return (
    <section
      className="nl-sec"
      id="demo"
      style={{
        background: "var(--surface)",
      }}
    >
      <div className="nl-wrap">
        <div className="nl-demo">
          <div className="nl-demo-copy">
            <span className="nl-eyebrow">{OWNER_JOIN.eyebrow}</span>
            <h2>{OWNER_JOIN.heading}</h2>
            <p>
              {OWNER_JOIN.introBefore}
              <b>{OWNER_JOIN.introBold}</b>
              {OWNER_JOIN.introAfter}
            </p>
            <ul className="nl-demo-points">
              {OWNER_JOIN.points.map((n) => (
                <li key={n.text}>
                  {n.icon === "clock" ? <ClockIcon /> : <TickIcon />} {n.text}
                </li>
              ))}
            </ul>
          </div>
          <JoinForm />
        </div>
      </div>
    </section>
  );
}
