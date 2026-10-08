export default function Section({ id, title, intro, children, alt = false }) {
  const headingId = `${id}-title`;
  return (
    <section id={id} className={`section ${alt ? "section-alt" : ""}`} aria-labelledby={headingId}>
      <div className="container" data-reveal>
        <header className="section-head">
          <h2 id={headingId}>{title}</h2>
          {intro && <p className="section-intro">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
