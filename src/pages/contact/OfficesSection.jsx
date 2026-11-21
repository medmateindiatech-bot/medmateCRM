import { PinIcon } from "../../components/icons";
import { OFFICES } from "../../content/contact";

export function OfficesSection() {
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
            Where we are
          </span>
          <h2>Our offices</h2>
        </div>
        <div className="nl-cov-grid">
          {OFFICES.map((n) => (
            <div className="nl-office" key={n.city}>
              <h4>
                <PinIcon /> {n.city} <span className="tag">{n.tag}</span>
              </h4>
              <p>{n.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
