import * as React from "react";
import { Link } from "react-router";
import { BRAND, NAV_LINKS } from "../content/site";
import { BrandMark, MenuIcon, PinIcon } from "./icons";

export function SiteHeader({ fragmentPrefix, onBookDemo }) {
  const [i, l] = React.useState(false);
  function c() {
    l(false);
  }
  return (
    <header className="nl-header">
      <div className="nl-wrap nl-nav">
        <Link className="nl-brand" to="/" aria-label={`${BRAND.name} home`}>
          <span className="nl-mark">
            <BrandMark />
          </span>
          <span>
            <span className="nl-wordmark">
              <span className="nm">Namma</span>
              {" MedMate"}
            </span>
            <span
              className="nl-brand-tag"
              style={{
                display: "block",
              }}
            >
              {BRAND.tagline}
            </span>
          </span>
        </Link>
        <nav className="nl-navlinks">
          {NAV_LINKS.map((d) =>
            d.href.startsWith("/#") ? (
              <a href={`${fragmentPrefix}${d.href.slice(1)}`} key={d.label}>
                {d.label}
              </a>
            ) : (
              <Link to={d.href} key={d.label}>
                {d.label}
              </Link>
            ),
          )}
        </nav>
        <div className="nl-nav-right">
          <span className="nl-loc">
            <PinIcon />
            {" Bengaluru"}
          </span>
          <button type="button" className="nl-btn nl-btn-primary" onClick={onBookDemo}>
            Book a free demo
          </button>
          <button
            type="button"
            className="nl-burger"
            aria-label="Menu"
            aria-expanded={i}
            onClick={() => l((d) => !d)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
      <div className={`nl-mobilemenu${i ? " open" : ""}`}>
        {NAV_LINKS.map((d) =>
          d.href.startsWith("/#") ? (
            <a href={`${fragmentPrefix}${d.href.slice(1)}`} onClick={c} key={d.label}>
              {d.label}
            </a>
          ) : (
            <Link to={d.href} onClick={c} key={d.label}>
              {d.label}
            </Link>
          ),
        )}
        <button
          type="button"
          className="nl-btn nl-btn-primary"
          onClick={() => {
            c();
            onBookDemo();
          }}
        >
          Book a free demo
        </button>
      </div>
    </header>
  );
}
