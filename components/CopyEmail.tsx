"use client";
import { useState } from "react";

// The address is the button. A click copies it; the mono word beside it says what happened.
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }
  return (
    <button type="button" onClick={copy} className="group inline-flex cursor-pointer flex-wrap items-baseline gap-x-4 text-left">
      <span className="serif text-[clamp(19px,2.2vw,22px)] leading-none text-[var(--ink)] underline decoration-[var(--line-2)] underline-offset-[.18em] group-hover:decoration-[var(--ink)]">
        {email}
      </span>
      <span className="mono" aria-live="polite">
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
