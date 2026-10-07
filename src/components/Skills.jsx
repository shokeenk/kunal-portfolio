import { skills } from "../data/portfolio.js";
import Section from "./Section.jsx";
import TagList from "./TagList.jsx";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s.group} className="skill-group">
            <h3>{s.group}</h3>
            <TagList items={s.items} label={s.group} />
          </div>
        ))}
      </div>
    </Section>
  );
}
