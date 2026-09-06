"use client";
import { useState } from "react";

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
    <>
      <button
        type="button"
        onClick={copy}
        className="serif cursor-pointer text-[clamp(22px,3.5vw,28px)] leading-none text-[var(--ink)] underline decoration-[var(--line-2)] underline-offset-[.18em] hover:decoration-[var(--ink)]"
      >
        {copied ? "Copied" : email}
      </button>
      <span className="sr-only" aria-live="polite">{copied ? "Email copied" : ""}</span>
    </>
  );
}
