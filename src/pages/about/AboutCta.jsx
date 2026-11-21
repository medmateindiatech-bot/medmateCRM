import { Link } from "react-router";
import { ArrowRightIcon } from "../../components/icons";

export function AboutCta({ onBookDemo }) {
  return (
    <section
      className="nl-sec"
      style={{
        background: "#fff",
        paddingTop: 0,
      }}
    >
      <div className="nl-wrap">
        <div className="nl-cta">
          <h2>Run a pharmacy? Let's talk.</h2>
          <p>
            Get your whole shop on one console in about a week — billing, inventory, CRM and hospital credit
            today, with an online store and delivery launching soon. Free to start.
          </p>
          <div className="nl-cta-btns">
            <button type="button" className="nl-btn nl-btn-gold nl-btn-lg" onClick={onBookDemo}>
              Book a free demo
            </button>
            <Link className="nl-btn nl-btn-ghost nl-btn-lg" to="/contact">
              {"Contact us "}
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
