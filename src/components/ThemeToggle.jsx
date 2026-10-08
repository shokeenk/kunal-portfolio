import { useState } from "react";
import Icon from "./Icon.jsx";

const read = () => document.documentElement.dataset.theme === "dark";

export default function ThemeToggle() {
  const [dark, setDark] = useState(read);

  const toggle = () => {
    const next = !dark;
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Storage blocked (private mode etc.): the toggle still works for this visit.
    }
    setDark(next);
  };

  return (
    <button type="button" className="icon-btn" aria-pressed={dark} onClick={toggle}>
      <Icon name={dark ? "sun" : "moon"} size={18} />
      <span className="visually-hidden">Dark mode</span>
    </button>
  );
}
