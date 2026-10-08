import useInView from "../hooks/useInView.js";

export default function TimelineRow({ period, children, highlight }) {
  const [ref, inView] = useInView({ rootMargin: "0px 0px -35% 0px" });
  return (
    <li ref={ref} className={`tl-row ${inView ? "is-active" : ""}`} data-hl={highlight}>
      <p className="tl-date">{period}</p>
      <div className="tl-body">
        <span className="tl-dot" aria-hidden="true" />
        {children}
      </div>
    </li>
  );
}
