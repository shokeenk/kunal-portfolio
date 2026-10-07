export default function TimelineRow({ period, children }) {
  return (
    <li className="tl-row">
      <p className="tl-date">{period}</p>
      <div className="tl-body">{children}</div>
    </li>
  );
}
