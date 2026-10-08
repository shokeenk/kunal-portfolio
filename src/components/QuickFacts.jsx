import { quickFacts } from "../data/portfolio.js";
import CountUp from "./CountUp.jsx";

// "2 client sites" → <CountUp 2/> " client sites"; non-numeric values render as-is.
function FactValue({ value }) {
  const m = value.match(/^(\d+)(.*)$/);
  if (!m) return value;
  return (
    <>
      <CountUp to={Number(m[1])} />
      {m[2]}
    </>
  );
}

export default function QuickFacts() {
  return (
    <section className="facts" aria-label="Quick facts">
      <div className="container" data-reveal>
        <dl className="facts-grid">
          {quickFacts.map((f) => (
            <div key={f.value} className="fact">
              <dt>
                <FactValue value={f.value} />
              </dt>
              <dd>{f.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
