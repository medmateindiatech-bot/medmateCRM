import * as React from "react";
import { Honeypot } from "../../components/Honeypot";
import { OWNER_JOIN } from "../../content/pharmacyOwner";
import { SITE_CONTACT, buildLead, submitLead } from "../../lib/api";

export function JoinForm() {
  const [n, s] = React.useState(""),
    [i, l] = React.useState(""),
    [c, d] = React.useState(""),
    [h, p] = React.useState(""),
    [m, v] = React.useState(""),
    [w, x] = React.useState(""),
    [j, S] = React.useState("idle"),
    { fields } = OWNER_JOIN;
  async function k(b) {
    b.preventDefault();
    S("sending");
    try {
      await submitLead(
        buildLead("early-access", {
          name: n,
          phone: c,
          pharmacyName: i,
          cityPincode: h,
          preferredTime: "Early access",
          source: "ORGANIC",
          monthlySales: m,
          notes: "Early access · pharmacy-owner page",
          companyWebsite: w,
        }),
      );
      S("sent");
      s("");
      l("");
      d("");
      p("");
      v("");
      x("");
    } catch {
      S("error");
    }
  }
  return (
    <div className="nl-form-card">
      <form onSubmit={k}>
        <Honeypot value={w} onChange={x} />
        <div className="nl-field">
          <label htmlFor="ea-name">{fields.name.label}</label>
          <input
            id="ea-name"
            required
            placeholder={fields.name.placeholder}
            value={n}
            onChange={(b) => s(b.target.value)}
            autoComplete="name"
          />
        </div>
        <div className="nl-field">
          <label htmlFor="ea-pharmacy">{fields.pharmacy.label}</label>
          <input
            id="ea-pharmacy"
            required
            placeholder={fields.pharmacy.placeholder}
            value={i}
            onChange={(b) => l(b.target.value)}
          />
        </div>
        <div className="nl-form-row">
          <div className="nl-field">
            <label htmlFor="ea-phone">{fields.phone.label}</label>
            <input
              id="ea-phone"
              required
              type="tel"
              placeholder={fields.phone.placeholder}
              value={c}
              onChange={(b) => d(b.target.value)}
              autoComplete="tel"
            />
          </div>
          <div className="nl-field">
            <label htmlFor="ea-pincode">{fields.pincode.label}</label>
            <input
              id="ea-pincode"
              required
              placeholder={fields.pincode.placeholder}
              value={h}
              onChange={(b) => p(b.target.value)}
              autoComplete="postal-code"
            />
          </div>
        </div>
        <div className="nl-field">
          <label htmlFor="ea-sales">{fields.sales.label}</label>
          <select id="ea-sales" required value={m} onChange={(b) => v(b.target.value)}>
            <option value="">{fields.sales.placeholder}</option>
            {OWNER_JOIN.salesRanges.map((b) => (
              <option value={b} key={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        {j === "sent" ? (
          <p className="nl-form-status" role="status">
            {OWNER_JOIN.success}
          </p>
        ) : null}
        {j === "error" ? (
          <p className="nl-form-status is-error" role="alert">
            {"Something went wrong. Try again or email "}
            {SITE_CONTACT.supportEmail}.
          </p>
        ) : null}
        <button
          className="nl-btn nl-btn-primary"
          type="submit"
          style={{
            width: "100%",
          }}
          disabled={j === "sending"}
        >
          {j === "sending" ? OWNER_JOIN.sending : OWNER_JOIN.submit}
        </button>
      </form>
    </div>
  );
}
