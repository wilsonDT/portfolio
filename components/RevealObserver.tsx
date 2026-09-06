"use client";
import { useEffect } from "react";

// Adds `.in` once when a frame enters view. Lives in app/template.tsx so it re-runs per navigation. Hero text uses the CSS-only `.intro` instead.
export function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal-frame]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.2 },
    );
    els.forEach((el) => {
      if (el.dataset.i) el.style.setProperty("--i", el.dataset.i);
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return null;
}
