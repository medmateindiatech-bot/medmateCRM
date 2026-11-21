import { OWNER_CONSOLE, OWNER_CONSOLE_ICONS } from "../../content/pharmacyOwner";

export function OwnerConsoleSection() {
  return (
    <section
      className="nl-sec"
      id="console"
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
            {OWNER_CONSOLE.eyebrow}
          </span>
          <h2>{OWNER_CONSOLE.heading}</h2>
          <p>{OWNER_CONSOLE.intro}</p>
        </div>
        <div className="nl-feat-grid">
          {OWNER_CONSOLE.features.map((n) => {
            const Icon = OWNER_CONSOLE_ICONS[n.icon];
            return (
              <div className="nl-feat" key={n.title}>
                <div className="nl-feat-ic">
                  <Icon />
                </div>
                <h3>{n.title}</h3>
                <p>{n.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
