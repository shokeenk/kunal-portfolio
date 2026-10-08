import { useEffect, useState } from "react";
import useInView from "../hooks/useInView.js";
import { prefersReducedMotion } from "../hooks/usePrefersReducedMotion.js";

/** Counts from 0 to `to` the first time it scrolls into view. */
export default function CountUp({ to, duration = 900 }) {
  const [ref, inView] = useInView({ threshold: 0.6 });
  const [n, setN] = useState(to);
  const [armed, setArmed] = useState(false);

  // Start from the real value; drop to 0 only once JS knows it can animate.
  useEffect(() => {
    if (prefersReducedMotion()) return;
    setN(0);
    setArmed(true);
  }, []);

  useEffect(() => {
    if (!armed || !inView) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      setN(Math.round(to * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [armed, inView, to, duration]);

  return (
    <span ref={ref} className="num">
      <span aria-hidden="true">{n}</span>
      <span className="visually-hidden">{to}</span>
    </span>
  );
}
