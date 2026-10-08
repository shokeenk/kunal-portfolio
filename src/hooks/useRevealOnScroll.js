import { useEffect } from "react";
import { prefersReducedMotion } from "./usePrefersReducedMotion.js";

/**
 * Fades/slides up every [data-reveal] element as it enters the viewport.
 * Content starts visible: only elements that are below the fold when this runs
 * are hidden, and they are un-hidden by the observer (or on cleanup).
 */
export default function useRevealOnScroll() {
  useEffect(() => {
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) return;
    const els = [...document.querySelectorAll("[data-reveal]")].filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight,
    );
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.remove("reveal-pending");
            obs.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => {
      el.classList.add("reveal-pending");
      obs.observe(el);
    });
    return () => {
      obs.disconnect();
      els.forEach((el) => el.classList.remove("reveal-pending"));
    };
  }, []);
}
