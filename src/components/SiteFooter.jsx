import { Link } from "react-router";
import { BRAND, COVERAGE_REGIONS, FOOTER, NETWORK_STATS } from "../content/site";
import { BrandMark, PinIcon } from "./icons";

export function FooterLink({ href, label, fragmentPrefix, onBookDemo }) {
  return href === "/#book-demo" ? (
    <a
      href={`${fragmentPrefix}#book-demo`}
      onClick={(c) => {
        c.preventDefault();
        onBookDemo();
      }}
    >
      {label}
    </a>
  ) : href.startsWith("/#") ? (
    <a href={`${fragmentPrefix}${href.slice(1)}`}>{label}</a>
  ) : href.startsWith("http") ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  ) : (
    <Link to={href}>{label}</Link>
  );
}
export function SiteFooter({ fragmentPrefix, onBookDemo }) {
  return (
    <footer className="nl-footer">
      <div className="nl-wrap">
        <div className="nl-foot-cov" id="coverage">
          <h4>
            <PinIcon />
            {" Across Bengaluru"}{" "}
            <span className="nl-foot-cov-total">
              {NETWORK_STATS.pinCodes}
              {" pin codes"}
            </span>
          </h4>
          <div className="nl-foot-cov-grid">
            {COVERAGE_REGIONS.map((i) => (
              <div className="nl-foot-cov-col" key={i.region}>
                <b>
                  {i.region} <em>{i.pinCodes}</em>
                </b>
                <span>{i.neighborhoods}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="nl-foot-grid">
          <div className="nl-foot-brand">
            <Link className="nl-brand" to="/" aria-label={`${BRAND.name} home`}>
              <span className="nl-mark">
                <BrandMark />
              </span>
              <span className="nl-wordmark">
                <span className="nm">Namma</span>
                {" MedMate"}
              </span>
            </Link>
            <p>{FOOTER.blurb}</p>
          </div>
          {FOOTER.columns.map((i) => (
            <div className="nl-foot-col" key={i.title}>
              <h4>{i.title}</h4>
              {i.links.map((l) => (
                <FooterLink {...l} fragmentPrefix={fragmentPrefix} onBookDemo={onBookDemo} key={l.label} />
              ))}
            </div>
          ))}
        </div>
        <div className="nl-foot-bottom">
          <span>
            {"© 2026 "}
            {BRAND.legal}
            {" · "}
            {BRAND.location}
          </span>
          <span>
            <Link to="/terms">Terms</Link>
            {" · "}
            <Link to="/privacy">Privacy</Link>
            {" · "}
            <Link to="/refund">Refund policy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
