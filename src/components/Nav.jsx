import { useEffect, useState } from "react";
import { nav, person } from "../data/portfolio.js";
import ExternalLink from "./ExternalLink.jsx";
import Icon from "./Icon.jsx";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="nav-brand" href="#top">
          {person.name}
        </a>
        <nav aria-label="Primary" className="nav-main">
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} size={20} />
            <span className="visually-hidden">Menu</span>
          </button>
          <ul id="nav-links" className={`nav-links ${open ? "is-open" : ""}`}>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ExternalLink className="btn btn-primary btn-sm" href={person.resume}>
          Resume
        </ExternalLink>
      </div>
    </header>
  );
}
