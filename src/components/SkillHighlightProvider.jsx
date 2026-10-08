import { useCallback, useEffect, useMemo, useState } from "react";
import { SkillHighlightContext } from "../context/skillHighlight.js";

export default function SkillHighlightProvider({ children }) {
  const [hovered, setHovered] = useState(null);
  const [pinned, setPinned] = useState(null);

  const clear = useCallback(() => {
    setPinned(null);
    setHovered(null);
  }, []);
  const togglePin = useCallback((skill) => setPinned((p) => (p === skill ? null : skill)), []);

  useEffect(() => {
    if (!pinned) return;
    const onKey = (e) => e.key === "Escape" && clear();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pinned, clear]);

  const value = useMemo(
    () => ({ active: hovered ?? pinned, pinned, preview: setHovered, togglePin, clear }),
    [hovered, pinned, togglePin, clear],
  );

  return <SkillHighlightContext.Provider value={value}>{children}</SkillHighlightContext.Provider>;
}
