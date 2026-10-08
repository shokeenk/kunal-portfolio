import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../hooks/usePrefersReducedMotion.js";
import Icon from "./Icon.jsx";

/** Floating button that appears once the hero has scrolled out of view. */
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero || !("IntersectionObserver" in window)) return;
    const obs = new IntersectionObserver(([e]) => setShow(!e.isIntersecting));
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    document.querySelector(".nav-brand")?.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      className={`back-to-top ${show ? "is-visible" : ""}`}
      onClick={toTop}
      tabIndex={show ? 0 : -1}
      aria-hidden={!show}
    >
      <Icon name="up" size={18} />
      <span className="visually-hidden">Back to top</span>
    </button>
  );
}
