import { ClockIcon, TickIcon } from "../../components/icons";
import { OWNER_STATUS } from "../../content/pharmacyOwner";

export function OwnerStatusSection() {
  const { now, soon } = OWNER_STATUS;
  return (
    <section
      className="nl-sec"
      id="whatyouget"
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
            {OWNER_STATUS.eyebrow}
          </span>
          <h2>{OWNER_STATUS.heading}</h2>
          <p>{OWNER_STATUS.intro}</p>
        </div>
        <div className="nl-status-grid">
          <div className="nl-status-card now">
            <div className="nl-status-head">
              <h3>{now.title}</h3>
              <span className="nl-status-badge live">{now.badge}</span>
            </div>
            <p className="nl-status-sub">{now.sub}</p>
            <ul className="nl-status-list">
              {now.items.map((i) => (
                <li key={i.title}>
                  <TickIcon />
                  <span>
                    <b>{i.title}</b>
                    {" — "}
                    {i.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="nl-status-card soon">
            <div className="nl-status-head">
              <h3>{soon.title}</h3>
              <span className="nl-status-badge soon">{soon.badge}</span>
            </div>
            <p className="nl-status-sub">{soon.sub}</p>
            <ul className="nl-status-list">
              {soon.items.map((i) => (
                <li key={i.title}>
                  <ClockIcon />
                  <span>
                    <b>{i.title}</b>
                    {" — "}
                    {i.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
