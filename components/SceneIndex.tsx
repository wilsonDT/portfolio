"use client";
import { useEffect, useState } from "react";

export type SceneLink = { id: string; label: string };

// Highlights the section whose heading is nearest the top of the viewport.
export function SceneIndex({ items }: { items: SceneLink[] }) {
  const [current, setCurrent] = useState(items[0]?.id);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setCurrent(e.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [items]);
  return (
    <nav className="scene-index mono" aria-label="Sections">
      <ol>
        {items.map((it) => (
          <li key={it.id}>
            <a href={`#${it.id}`} aria-current={current === it.id ? "true" : undefined}>
              {it.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
