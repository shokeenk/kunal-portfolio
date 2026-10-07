import { hero, person } from "../data/portfolio.js";
import CodeCard from "./CodeCard.jsx";
import ExternalLink from "./ExternalLink.jsx";
import Icon from "./Icon.jsx";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="badge">
            <span className="pulse" aria-hidden="true" />
            {hero.badge}
          </p>
          <h1 id="hero-title">{hero.headline}</h1>
          <p className="hero-intro">{hero.intro}</p>
          <div className="cta-row">
            <a className="btn btn-primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            <ExternalLink className="btn btn-outline" href={person.resume}>
              <Icon name="download" size={16} />
              {hero.resumeCta.label}
            </ExternalLink>
          </div>
          <ul className="social-row" aria-label="Profiles">
            {person.links.map((l) => (
              <li key={l.label}>
                <ExternalLink href={l.href}>
                  <Icon name={l.icon} size={16} />
                  {l.label}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>
        <CodeCard />
      </div>
    </section>
  );
}
