import { codeCard } from "../data/portfolio.js";

// Total time for the JSON to "type in" on first load (CSS does the animating).
const TYPE_MS = 1200;

function Value({ value }) {
  if (Array.isArray(value)) {
    return (
      <>
        <span className="tok-punct">[</span>
        {value.map((v, i) => (
          <span key={i}>
            <Value value={v} />
            {i < value.length - 1 && <span className="tok-punct">, </span>}
          </span>
        ))}
        <span className="tok-punct">]</span>
      </>
    );
  }
  if (typeof value === "string") return <span className="tok-str">"{value}"</span>;
  if (typeof value === "number") return <span className="tok-num">{value}</span>;
  if (typeof value === "boolean") return <span className="tok-bool">{String(value)}</span>;
  return <span className="tok-punct">null</span>;
}

export default function CodeCard() {
  const entries = Object.entries(codeCard.body);
  const lineCount = entries.length + 2;
  const step = TYPE_MS / lineCount;
  const line = (i) => ({ className: "code-line", style: { "--d": `${Math.round(i * step)}ms`, "--t": `${Math.round(step)}ms` } });

  return (
    <figure
      className="code-card"
      aria-label="Developer profile shown as a JSON API response"
      style={{ "--type-total": `${TYPE_MS}ms` }}
    >
      <div className="code-bar">
        <span className="code-dots" aria-hidden="true">
          <i /> <i /> <i />
        </span>
        <span className="code-req">
          <span className="tok-method">{codeCard.method}</span> {codeCard.path}
        </span>
        <span className="code-status">{codeCard.status}</span>
      </div>
      <pre className="code-body">
        <code>
          <span {...line(0)}>
            <span className="tok-punct">{"{"}</span>
          </span>
          {entries.map(([key, value], i) => (
            <span key={key} {...line(i + 1)}>
              {"  "}
              <span className="tok-key">"{key}"</span>
              <span className="tok-punct">: </span>
              <Value value={value} />
              {i < entries.length - 1 && <span className="tok-punct">,</span>}
            </span>
          ))}
          <span {...line(lineCount - 1)}>
            <span className="tok-punct">{"}"}</span>
            <span className="code-cursor" aria-hidden="true" />
          </span>
        </code>
      </pre>
    </figure>
  );
}
