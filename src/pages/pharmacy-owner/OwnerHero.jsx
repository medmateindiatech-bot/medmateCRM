import { ArrowRightIcon, ClockIcon, StoreIcon } from "../../components/icons";
import { OWNER_HERO } from "../../content/pharmacyOwner";

export function OwnerHero() {
  return (
    <section className="nl-hero">
      <div className="nl-wrap nl-hero-grid">
        <div>
          <span className="nl-eyebrow">{OWNER_HERO.eyebrow}</span>
          <h1>
            {OWNER_HERO.headlineBefore}
            <em>{OWNER_HERO.headlineEm}</em>
          </h1>
          <p className="nl-hero-sub">
            {OWNER_HERO.subBefore}
            <b>{OWNER_HERO.subBold1}</b>
            {OWNER_HERO.subMid}
            <b>{OWNER_HERO.subBold2}</b>
            {OWNER_HERO.subAfter}
          </p>
          <div className="nl-hero-status">
            <ClockIcon />
            <span>
              <b>{OWNER_HERO.statusBold}</b>
              {OWNER_HERO.statusRest}
            </span>
          </div>
          <div className="nl-hero-stats">
            {OWNER_HERO.stats.map((n) => (
              <div className="nl-hstat" key={n.label}>
                <b className={n.gold ? "g" : ""}>{n.value}</b>
                <span>{n.label}</span>
              </div>
            ))}
          </div>
          <div className="nl-hero-cta">
            <a className="nl-btn nl-btn-primary nl-btn-lg" href="#demo">
              {OWNER_HERO.primaryCta} <ArrowRightIcon />
            </a>
            <a className="nl-btn nl-btn-ghost nl-btn-lg" href="#whatyouget">
              {OWNER_HERO.secondaryCta} <ArrowRightIcon />
            </a>
          </div>
        </div>
        <div className="nl-hero-visual nl-photo-hero">
          <img
            className="nl-photo-hero-img"
            src="/assets/landing/pharmacy-hero.jpg"
            alt={OWNER_HERO.imageAlt}
          />
          <div className="nl-hero-badge">
            <span className="ic">
              <StoreIcon />
            </span>
            <span>
              <b>{OWNER_HERO.badgeTitle}</b>
              <span>{OWNER_HERO.badgeSub}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
