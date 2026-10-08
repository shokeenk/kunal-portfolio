import { useHighlightState } from "../context/skillHighlight.js";
import { experience } from "../data/portfolio.js";
import ExternalLink from "./ExternalLink.jsx";
import Icon from "./Icon.jsx";
import Section from "./Section.jsx";
import TagList from "./TagList.jsx";
import TimelineRow from "./TimelineRow.jsx";

function Job({ job }) {
  const highlight = useHighlightState(job.tech);
  return (
    <TimelineRow period={job.period} highlight={highlight}>
      <h3>
        {job.role} <span className="at">· {job.company}</span>
      </h3>
      <p className="meta">{job.type}</p>
      <p className="summary">{job.summary}</p>
      <ul className="bullets">
        {job.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <div className="row-foot">
        <TagList items={job.tech} />
        {job.link && (
          <ExternalLink className="pill-btn" href={job.link.href}>
            Live: {job.link.label}
            <Icon name="arrow" size={14} />
          </ExternalLink>
        )}
      </div>
    </TimelineRow>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Freelance experience">
      <ol className="timeline">
        {experience.map((job) => (
          <Job key={job.company} job={job} />
        ))}
      </ol>
    </Section>
  );
}
