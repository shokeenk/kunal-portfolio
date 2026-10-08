import { useState } from "react";
import { useHighlightState } from "../context/skillHighlight.js";
import { projectFilters, projects } from "../data/portfolio.js";
import ExternalLink from "./ExternalLink.jsx";
import Icon from "./Icon.jsx";
import Section from "./Section.jsx";
import TagList from "./TagList.jsx";

const ALL = "All";

function ProjectCard({ p, index }) {
  const highlight = useHighlightState(p.tech);
  return (
    <li className="card" data-hl={highlight} style={{ "--i": index }}>
      <p className="card-tag">{p.tag}</p>
      <h3>{p.title}</h3>
      <p>{p.description}</p>
      <div className="card-foot">
        <TagList items={p.tech} />
        {(p.github || p.live) && (
          <div className="card-actions">
            {p.github && (
              <ExternalLink className="pill-btn" href={p.github}>
                <Icon name="github" size={14} />
                Code<span className="visually-hidden"> for {p.title} on GitHub</span>
              </ExternalLink>
            )}
            {p.live && (
              <ExternalLink className="pill-btn" href={p.live}>
                Live<span className="visually-hidden">: {p.title}</span>
                <Icon name="arrow" size={14} />
              </ExternalLink>
            )}
          </div>
        )}
      </div>
    </li>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState(ALL);
  const shown = filter === ALL ? projects : projects.filter((p) => p.categories?.includes(filter));

  return (
    <Section id="projects" title="Projects" alt>
      <div className="filter-row" role="group" aria-label="Filter projects">
        {[ALL, ...projectFilters].map((f) => (
          <button
            key={f}
            type="button"
            className="chip"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <p className="visually-hidden" role="status">
        {`Showing ${shown.length} ${shown.length === 1 ? "project" : "projects"}`}
      </p>
      {/* Re-keying the grid replays the enter animation on every filter change. */}
      <ul key={filter} className="project-grid">
        {shown.map((p, i) => (
          <ProjectCard key={p.title} p={p} index={i} />
        ))}
      </ul>
    </Section>
  );
}
