import { useIsTagHighlighted } from "../context/skillHighlight.js";

export default function TagList({ items, label = "Tech" }) {
  const isHighlighted = useIsTagHighlighted();
  return (
    <ul className="tags" aria-label={label}>
      {items.map((t) => (
        <li key={t} className={`tag ${isHighlighted(t) ? "is-match" : ""}`}>
          {t}
        </li>
      ))}
    </ul>
  );
}
