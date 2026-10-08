import { useEffect, useState } from "react";

/** Returns the id of the section currently in the middle band of the viewport. */
export default function useScrollSpy(ids) {
  const [active, setActive] = useState(null);
  const key = ids.join(",");

  useEffect(() => {
    const els = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!els.length || !("IntersectionObserver" in window)) return;

    const visible = new Set();
    const pick = () => {
      // At the very bottom the last (short) section can't reach the band.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) return setActive(els[els.length - 1].id);
      const first = els.find((el) => visible.has(el.id));
      setActive(first ? first.id : null);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        }
        pick();
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => obs.observe(el));
    window.addEventListener("scroll", pick, { passive: true });
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", pick);
    };
  }, [key]);

  return active;
}
