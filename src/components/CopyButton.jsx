import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for browsers/contexts without the async clipboard API.
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "absolute";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok;
  }
}

export default function CopyButton({ value, label }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  return (
    <span className="copy-wrap">
      <button type="button" className="copy-btn" onClick={async () => setCopied(await copyText(value))}>
        <Icon name="copy" size={14} />
        <span aria-hidden="true">Copy</span>
        <span className="visually-hidden">{`Copy ${label}`}</span>
      </button>
      <span className={`toast ${copied ? "is-visible" : ""}`} role="status">
        {copied ? (
          <>
            Copied <span aria-hidden="true">✓</span>
            <span className="visually-hidden">{` ${label}`}</span>
          </>
        ) : (
          ""
        )}
      </span>
    </span>
  );
}
