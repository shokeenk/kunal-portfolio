import { useEffect, useRef, useState } from "react";
import { nav, person } from "../data/portfolio.js";
import useScrollSpy from "../hooks/useScrollSpy.js";
import ExternalLink from "./ExternalLink.jsx";
import Icon from "./Icon.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

const ids = nav.map((n) => n.href.slice(1));

function ScrollProgress() {
  const bar = useRef(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return <div className="scroll-progress" ref={bar} aria-hidden="true" />;
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(ids);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="nav">
      <ScrollProgress />
      <div className="container nav-inner">
        <a className="nav-brand" href="#top">
          {person.name}
        </a>
        <nav aria-label="Primary" className="nav-main">
          <button
            type="button"
            className="icon-btn nav-toggle"
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} size={20} />
            <span className="visually-hidden">Menu</span>
          </button>
          <ul id="nav-links" className={`nav-links ${open ? "is-open" : ""}`}>
            {nav.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={isActive ? "is-active" : undefined}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <ThemeToggle />
        <ExternalLink className="btn btn-primary btn-sm" href={person.resume}>
          Resume
        </ExternalLink>
      </div>
    </header>
  );
}
