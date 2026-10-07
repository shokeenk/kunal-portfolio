import { quickFacts } from "../data/portfolio.js";

export default function QuickFacts() {
  return (
    <section className="facts" aria-label="Quick facts">
      <div className="container">
        <dl className="facts-grid">
          {quickFacts.map((f) => (
            <div key={f.value} className="fact">
              <dt>{f.value}</dt>
              <dd>{f.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
