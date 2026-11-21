import { OWNER_CITIES } from "../../content/pharmacyOwner";
import { NETWORK_STATS } from "../../content/site";

export function OwnerCitiesSection() {
  return (
    <section
      className="nl-sec"
      id="coverage"
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
            {OWNER_CITIES.eyebrow}
          </span>
          <h2>{OWNER_CITIES.heading}</h2>
          <p>
            {OWNER_CITIES.introBefore}
            <b>
              {NETWORK_STATS.pinCodes}
              {" Bengaluru pin codes"}
            </b>
            {OWNER_CITIES.introAfter}
          </p>
        </div>
        <div className="nl-soon">
          <span className="nl-soon-label">{OWNER_CITIES.soonLabel}</span>
          {OWNER_CITIES.cities.map((n) => (
            <span className="nl-soon-chip" key={n}>
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
