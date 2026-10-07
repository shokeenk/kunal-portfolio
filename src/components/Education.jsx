import { education } from "../data/portfolio.js";
import Section from "./Section.jsx";
import TimelineRow from "./TimelineRow.jsx";

export default function Education() {
  return (
    <Section id="education" title="Education & leadership">
      <ol className="timeline">
        {education.map((e) => (
          <TimelineRow key={e.title} period={e.period}>
            <h3>{e.title}</h3>
            <p className="meta">{e.org}</p>
            {e.detail && <p className="summary">{e.detail}</p>}
          </TimelineRow>
        ))}
      </ol>
    </Section>
  );
}
