import { ValueIcon } from "../../components/icons";
import { VALUES } from "../../content/about";

export function ValuesSection() {
  return (
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
            What we stand for
          </span>
          <h2>Our values</h2>
        </div>
        <div className="nl-feat-grid nl-grid-4">
          {VALUES.map((n) => (
            <div className="nl-feat" key={n.title}>
              <div className="nl-feat-ic">
                <ValueIcon icon={n.icon} />
              </div>
              <h3>{n.title}</h3>
              <p>{n.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
