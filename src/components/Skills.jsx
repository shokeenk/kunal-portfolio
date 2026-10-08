import { usesSkill, useSkillHighlight } from "../context/skillHighlight.js";
import { experience, projects, skills } from "../data/portfolio.js";
import Section from "./Section.jsx";

function usage(skill) {
  const jobs = experience.filter((e) => usesSkill(e.tech, skill)).length;
  const builds = projects.filter((p) => usesSkill(p.tech, skill)).length;
  return { jobs, builds };
}

const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;

function SkillChip({ skill }) {
  const { active, pinned, preview, togglePin } = useSkillHighlight();
  const { jobs, builds } = usage(skill);
  if (!jobs && !builds) {
    return <li className="chip chip-static">{skill}</li>;
  }
  // Hover preview is mouse-only so a tap on touch screens pins instead of sticking.
  const onMouse = (fn) => (e) => e.pointerType === "mouse" && fn();
  return (
    <li>
      <button
        type="button"
        className={`chip ${active === skill ? "is-active" : ""}`}
        aria-pressed={pinned === skill}
        onPointerEnter={onMouse(() => preview(skill))}
        onPointerLeave={onMouse(() => preview(null))}
        onFocus={() => preview(skill)}
        onBlur={() => preview(null)}
        onClick={() => togglePin(skill)}
      >
        {skill}
      </button>
    </li>
  );
}

function Status() {
  const { active, clear, pinned } = useSkillHighlight();
  let text = "Hover or tap a skill to highlight where I've used it.";
  if (active) {
    const { jobs, builds } = usage(active);
    const parts = [jobs && plural(jobs, "client job", "client jobs"), builds && plural(builds, "project", "projects")].filter(Boolean);
    text = `${active}: used in ${parts.join(" · ")} (highlighted above).`;
  }
  return (
    <div className="skill-status">
      <p role="status">{text}</p>
      {pinned && (
        <button type="button" className="text-btn" onClick={clear}>
          Clear
        </button>
      )}
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s.group} className="skill-group">
            <h3>{s.group}</h3>
            <ul className="chips" aria-label={s.group}>
              {s.items.map((item) => (
                <SkillChip key={item} skill={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Status />
    </Section>
  );
}
