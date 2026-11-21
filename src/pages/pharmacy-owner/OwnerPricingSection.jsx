import * as React from "react";
import { ArrowRightIcon, StoreIcon, TickIcon } from "../../components/icons";
import { OWNER_PRICING } from "../../content/pharmacyOwner";
import { PRICING } from "../../content/site";

export function OwnerPriceCard({ plan, billing }) {
  const i = billing === "yearly" ? plan.monthly - plan.yearlyOff : plan.monthly;
  return (
    <div className={`nl-price${plan.popular ? " pop" : ""}`}>
      {plan.popular ? <span className="nl-price-badge">Most popular</span> : null}
      <h3>{plan.name}</h3>
      <div className="nl-price-tag">
        <span className="amt">₹{i.toLocaleString("en-IN")}</span>
        <span className="per">/mo</span>
      </div>
      <span className="nl-price-sub">{billing === "yearly" ? "billed yearly" : "billed monthly"}</span>
      <span className="nl-price-free">✦ First 3 months free</span>
      <p className="nl-price-desc">{plan.desc}</p>
      <ul>
        {plan.feats.map((l) => (
          <li key={l}>
            <TickIcon />
            <span>{l}</span>
          </li>
        ))}
      </ul>
      <a className={`nl-btn ${plan.popular ? "nl-btn-primary" : "nl-btn-ghost"}`} href="#demo">
        {OWNER_PRICING.cta}
      </a>
    </div>
  );
}
export function OwnerPricingSection() {
  const [n, s] = React.useState("monthly");
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
            {OWNER_PRICING.eyebrow}
          </span>
          <h2>{OWNER_PRICING.heading}</h2>
          <p>
            {OWNER_PRICING.introBefore}
            <b>{OWNER_PRICING.introMark}</b>
            {OWNER_PRICING.introAfter}
          </p>
        </div>
        <div className="nl-bill-toggle" role="tablist" aria-label="Billing period">
          {["monthly", "yearly"].map((i) => (
            <button
              type="button"
              role="tab"
              aria-selected={n === i}
              className={`nl-bill-opt${n === i ? " active" : ""}`}
              onClick={() => s(i)}
              key={i}
            >
              {i === "monthly" ? "Monthly" : "Yearly "}
              {i === "yearly" ? <span className="nl-bill-save">{PRICING.yearlySaveLabel}</span> : null}
            </button>
          ))}
        </div>
        <div className="nl-price-grid">
          {PRICING.plans.map((i) => (
            <OwnerPriceCard plan={i} billing={n} key={i.name} />
          ))}
        </div>
        <div className="nl-price-custom">
          <div className="nl-price-custom-main">
            <span className="nl-price-custom-ic" aria-hidden>
              <StoreIcon />
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
          <a className="nl-btn nl-btn-primary" href="#demo">
            {OWNER_PRICING.customCta} <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
