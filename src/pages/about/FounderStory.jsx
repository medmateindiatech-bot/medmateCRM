import * as React from "react";
import { ChevronIcon } from "../../components/icons";
import { FOUNDER_STORY } from "../../content/about";

export function FounderStory() {
  const [n, s] = React.useState(false);
  return (
    <section
      className="nl-sec"
      style={{
        background: "#fff",
      }}
    >
      <div className="nl-wrap">
        <div className="nl-founder">
          <div className="nl-founder-media">
            <img
              src="/assets/landing/founder-roni.jpg"
              alt="Roni Paul, Founder and CEO of Namma MedMate, Bengaluru"
              width={820}
              height={880}
            />
            <div className="nl-founder-cap">
              <b>Roni Paul</b>
              <span>Founder & CEO · Namma MedMate</span>
            </div>
          </div>
          <div className="nl-prose nl-founder-story">
            <span className="nl-eyebrow">Our story</span>
            <h3>Why we started</h3>
            {FOUNDER_STORY.intro.map((i) => (
              <p key={i}>{i}</p>
            ))}
            {n ? (
              <div id="story-more" className="nl-more-inner">
                <p>{FOUNDER_STORY.details[0]}</p>
                <blockquote>{FOUNDER_STORY.quote}</blockquote>
                {FOUNDER_STORY.details.slice(1).map((i) => (
                  <p key={i}>{i}</p>
                ))}
              </div>
            ) : null}
            <button
              type="button"
              className={`nl-readmore${n ? " open" : ""}`}
              aria-expanded={n}
              aria-controls="story-more"
              onClick={() => s((i) => !i)}
            >
              {n ? "Read less" : "Read more"}
              <span className="chev" aria-hidden>
                <ChevronIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
