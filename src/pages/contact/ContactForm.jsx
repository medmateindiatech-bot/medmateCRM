import * as React from "react";
import { Honeypot } from "../../components/Honeypot";
import { CONTACT_SUBJECTS } from "../../content/contact";
import { SITE_CONTACT, buildLead, submitLead } from "../../lib/api";

export function ContactForm() {
  const [n, s] = React.useState(""),
    [i, l] = React.useState(""),
    [c, d] = React.useState(""),
    [h, p] = React.useState(""),
    [m, v] = React.useState(""),
    [w, x] = React.useState("idle");
  async function j(S) {
    S.preventDefault();
    x("sending");
    try {
      await submitLead(
        buildLead("contact", {
          name: n,
          email: i,
          subject: c,
          message: h,
          source: "CONTACT",
          notes: h.trim(),
          companyWebsite: m,
        }),
      );
      x("sent");
      s("");
      l("");
      d("");
      p("");
      v("");
    } catch {
      x("error");
    }
  }
  return (
    <div className="nl-form-card">
      <form onSubmit={j}>
        <Honeypot value={m} onChange={v} />
        <div className="nl-field">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            required
            placeholder="Your name"
            value={n}
            onChange={(S) => s(S.target.value)}
            autoComplete="name"
          />
        </div>
        <div className="nl-field">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            required
            type="email"
            placeholder="you@email.com"
            value={i}
            onChange={(S) => l(S.target.value)}
            autoComplete="email"
          />
        </div>
        <div className="nl-field">
          <label htmlFor="contact-subject">Subject</label>
          <select id="contact-subject" required value={c} onChange={(S) => d(S.target.value)}>
            <option value="">Choose a topic</option>
            {CONTACT_SUBJECTS.map((S) => (
              <option value={S} key={S}>
                {S}
              </option>
            ))}
          </select>
        </div>
        <div className="nl-field">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            required
            rows={4}
            placeholder="How can we help?"
            value={h}
            onChange={(S) => p(S.target.value)}
          />
        </div>
        {w === "sent" ? (
          <p className="nl-form-status" role="status">
            Thanks — your message was sent. We'll get back within 1 business day.
          </p>
        ) : null}
        {w === "error" ? (
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
          disabled={w === "sending"}
        >
          {w === "sending" ? "Sending…" : "Send message"}
        </button>
        <a
          className="nl-form-wa"
          href="https://wa.me/919999999999?text=I%20want%20a%20free%20Namma%20MedMate%20demo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span aria-hidden>◔</span>
          {" Or message us on WhatsApp"}
        </a>
      </form>
    </div>
  );
}
