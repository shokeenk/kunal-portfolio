import { footer, person } from "../data/portfolio.js";
import ExternalLink from "./ExternalLink.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>{footer.copyright}</p>
        <p>{footer.note}</p>
        <ul className="footer-links">
          {person.links.map((l) => (
            <li key={l.label}>
              <ExternalLink href={l.href}>{l.label}</ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
