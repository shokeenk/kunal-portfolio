export default function Section({ id, title, intro, children, className = "" }) {
  const headingId = `${id}-title`;
  return (
    <section id={id} className={`section ${className}`} aria-labelledby={headingId}>
      <div className="container">
        <header className="section-head">
          <h2 id={headingId}>{title}</h2>
          {intro && <p className="section-intro">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
