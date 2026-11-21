import { StoreIcon2, TickIcon } from "../../components/icons";
import { PRICING } from "../../content/site";

export function PriceCard({ plan, billing, openDemo }) {
  const l = billing === "yearly" ? plan.monthly - plan.yearlyOff : plan.monthly;
  return (
    <div className={`nl-price${plan.popular ? " pop" : ""}`}>
      {plan.popular ? <span className="nl-price-badge">Most popular</span> : null}
      <h3>{plan.name}</h3>
      <div className="nl-price-tag">
        <span className="amt">₹{l.toLocaleString("en-IN")}</span>
        <span className="per">/mo</span>
      </div>
      <span className="nl-price-sub">{billing === "yearly" ? "billed yearly" : "billed monthly"}</span>
      <span className="nl-price-free">✦ First 3 months free</span>
      <p className="nl-price-desc">{plan.desc}</p>
      <ul>
        {plan.feats.map((c) => (
          <li key={c}>
            <TickIcon />
            <span>{c}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={`nl-btn ${plan.popular ? "nl-btn-primary" : "nl-btn-ghost"}`}
        onClick={openDemo}
      >
        Get started
      </button>
    </div>
  );
}
export function PricingSection({ billing, setBilling, openDemo }) {
  return (
    <section
      className="nl-sec"
      id="pricing"
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
            Simple pricing
          </span>
          <h2>Plans that grow with your pharmacy</h2>
          <p>
            <b>First 3 months free on every plan.</b>
            {" No setup fee, no lock-in — upgrade or cancel any time, and your data always stays yours."}
          </p>
        </div>
        <div className="nl-bill-toggle" role="tablist" aria-label="Billing period">
          {["monthly", "yearly"].map((l) => (
            <button
              type="button"
              role="tab"
              aria-selected={billing === l}
              className={`nl-bill-opt${billing === l ? " active" : ""}`}
              onClick={() => setBilling(l)}
              key={l}
            >
              {l === "monthly" ? "Monthly" : "Yearly "}
              {l === "yearly" ? <span className="nl-bill-save">{PRICING.yearlySaveLabel}</span> : null}
            </button>
          ))}
        </div>
        <div className="nl-price-grid">
          {PRICING.plans.map((l) => (
            <PriceCard plan={l} billing={billing} openDemo={openDemo} key={l.name} />
          ))}
        </div>
        <div className="nl-price-custom">
          <div className="nl-price-custom-main">
            <span className="nl-price-custom-ic" aria-hidden>
              <StoreIcon2 />
            </span>
            <div>
              <h3>Running two or more branches?</h3>
              <p>
                Get a <b>custom plan built for multi-branch pharmacies and chains</b>
                {" — "}one dashboard across every location, stock transfers between shops, per-branch logins
                and pricing, consolidated reports and priority onboarding. Priced to your scale.
              </p>
            </div>
          </div>
          <button type="button" className="nl-btn nl-btn-primary" onClick={openDemo}>
            Get a custom quote
          </button>
        </div>
      </div>
    </section>
  );
}
