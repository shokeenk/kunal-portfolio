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
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  return (
    <button
      type="button"
      className="copy-btn"
      onClick={async () => setCopied(await copyText(value))}
    >
      <Icon name={copied ? "check" : "copy"} size={14} />
      <span aria-hidden="true">{copied ? "Copied" : "Copy"}</span>
      <span className="visually-hidden">{`Copy ${label}`}</span>
      <span className="visually-hidden" role="status">
        {copied ? `${label} copied` : ""}
      </span>
    </button>
  );
}
