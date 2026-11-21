import { ShieldCheckIcon2, StoreIcon, ZapIcon } from "../../components/icons";
import { OWNER_WHY_EARLY } from "../../content/pharmacyOwner";

export const WHY_EARLY_ICONS = {
  zap: ZapIcon,
  shield: ShieldCheckIcon2,
  store: StoreIcon,
};
export function WhyEarlySection() {
  return (
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
            {OWNER_WHY_EARLY.eyebrow}
          </span>
          <h2>{OWNER_WHY_EARLY.heading}</h2>
        </div>
        <div className="nl-feat-grid">
          {OWNER_WHY_EARLY.items.map((n) => {
            const Icon = WHY_EARLY_ICONS[n.icon];
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
