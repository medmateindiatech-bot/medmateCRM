import { TickIcon } from "../../components/icons";
import { ContactForm } from "./ContactForm";

export function ContactFormSection() {
  return (
    <section
      className="nl-sec"
      style={{
        background: "var(--surface)",
      }}
    >
      <div className="nl-wrap">
        <div className="nl-demo">
          <div className="nl-demo-copy">
            <span className="nl-eyebrow">Send a message</span>
            <h2>We'll get back within a day</h2>
            <p>
              {"Tell us what you need and we'll route it to the right team. We reply within "}
              <b>1 business day</b>.
            </p>
            <ul className="nl-demo-points">
              <li>
                <TickIcon />
                {" Every email gets read and answered"}
              </li>
              <li>
                <TickIcon />
                {" Pharmacy demos are free, no lock-in"}
              </li>
              <li>
                <TickIcon />
                {" Prefer chat? WhatsApp us any time"}
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
