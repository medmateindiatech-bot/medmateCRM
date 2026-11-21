import * as React from "react";
import { ScooterIcon } from "../../components/icons";

export function PromoPill() {
  const [n, s] = React.useState(false);
  return (
    <div className={`nl-promo${n ? " open" : ""}`}>
      <div className="nl-promo-card" role="status" aria-hidden>
        <div className="nl-promo-head">
          <span className="nl-promo-badge">
            <ScooterIcon />
          </span>
          <span className="nl-promo-soon">
            <span className="nl-promo-dot" />
            Launching soon
          </span>
        </div>
        <h4 className="nl-promo-title">Start selling online</h4>
        <p className="nl-promo-text">
          Your online store & delivery network go live soon in Bengaluru. Get set up now — you’ll be ready
          from day one.
        </p>
      </div>
      <button
        type="button"
        className="nl-promo-pill"
        aria-expanded={n}
        aria-label="Sell online — coming soon"
        onClick={() => s((i) => !i)}
      >
        <span className="nl-promo-pill-ic">
          <ScooterIcon />
        </span>
        <span>Sell online</span>
        <span className="nl-promo-pill-dot" aria-hidden />
      </button>
    </div>
  );
}
