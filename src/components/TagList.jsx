export default function TagList({ items, label = "Tech" }) {
  return (
    <ul className="tags" aria-label={label}>
      {items.map((t) => (
        <li key={t} className="tag">
          {t}
        </li>
      ))}
    </ul>
  );
}
