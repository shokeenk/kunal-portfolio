import { createContext, useContext } from "react";
import { skillMatches } from "../data/portfolio.js";

const norm = (s) => s.trim().toLowerCase();

/** Tags a skill lights up: its own name plus any aliases from the data file. */
export function tagsForSkill(skill) {
  return new Set([skill, ...(skillMatches[skill] ?? [])].map(norm));
}

export function usesSkill(tech, skill) {
  const tags = tagsForSkill(skill);
  return tech.some((t) => tags.has(norm(t)));
}

export const SkillHighlightContext = createContext({
  active: null,
  pinned: null,
  preview: () => {},
  togglePin: () => {},
  clear: () => {},
});

export function useSkillHighlight() {
  return useContext(SkillHighlightContext);
}

/** "match" / "dim" while a skill is active, otherwise undefined. */
export function useHighlightState(tech) {
  const { active } = useSkillHighlight();
  if (!active) return undefined;
  return usesSkill(tech, active) ? "match" : "dim";
}

export function useIsTagHighlighted() {
  const { active } = useSkillHighlight();
  if (!active) return () => false;
  const tags = tagsForSkill(active);
  return (tag) => tags.has(norm(tag));
}
