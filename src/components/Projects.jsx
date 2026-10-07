import { projects } from "../data/portfolio.js";
import ExternalLink from "./ExternalLink.jsx";
import Icon from "./Icon.jsx";
import Section from "./Section.jsx";
import TagList from "./TagList.jsx";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="project-grid">
        {projects.map((p) => (
          <li key={p.title} className="card">
            <p className="card-tag">{p.tag}</p>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="card-foot">
              <TagList items={p.tech} />
              {p.github && (
                <ExternalLink className="text-link" href={p.github}>
                  <Icon name="github" size={14} />
                  Code<span className="visually-hidden"> for {p.title} on GitHub</span>
                </ExternalLink>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
