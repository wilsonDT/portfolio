"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

const links = [
  { href: "/#work", label: "Work", scene: "work" },
  { href: "/experience", label: "Experience", page: "experience" },
  { href: "/#after-hours", label: "After hours", scene: "after-hours" },
  { href: "/#contact", label: "Contact", scene: "contact" },
];

// One nav for every page. Anchors are absolute so they work from /experience too.
// A sticky bar: bare at the top of the page, frosted once scrolled, gone while you scroll down, back the moment you scroll up. On the index the link for the scene on screen is lit.
export function SiteNav({ current }: { current?: "experience" }) {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scene, setScene] = useState<string | null>(null);
  // Until this time the bar stays put: right after mount and after a nav click, when the page scrolls on its own.
  const hold = useRef(0);

  useEffect(() => {
    hold.current = Date.now() + 800;
    let lastY = window.scrollY;
    const scenes = links
      .flatMap((l) => (l.scene ? [document.getElementById(l.scene)] : []))
      .filter((el): el is HTMLElement => el !== null);

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      const dy = y - lastY;
      if (Math.abs(dy) > 4) {
        if (Date.now() > hold.current) setHidden(dy > 0 && y > 64);
        lastY = y;
      }
      // The scene under a line a third of the way down the viewport; at the foot of the page, the last one.
      const probe = window.innerHeight * 0.35;
      const atEnd = y + window.innerHeight >= document.documentElement.scrollHeight - 2;
      let cur = scenes.find((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= probe && r.bottom > probe;
      });
      if (atEnd) cur = scenes.at(-1);
      setScene(cur?.id ?? null);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="topbar"
      aria-label="Site"
      data-hidden={hidden || undefined}
      data-scrolled={scrolled || undefined}
      // Tabbing into a hidden bar brings it back.
      onFocus={() => setHidden(false)}
    >
      <div className="col flex h-12 items-center justify-between text-[13px]">
        <Link href="/" className="inline-flex items-baseline gap-3 no-underline">
          <span className="mono text-[12px] font-medium tracking-[.18em] text-[var(--ink)]">{site.mark}</span>
          <span className="max-sm:hidden">{site.name}</span>
        </Link>
        <ul className="flex gap-6 whitespace-nowrap text-[var(--mute)] max-sm:gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => {
                  hold.current = Date.now() + 800;
                }}
                aria-current={l.page && l.page === current ? "page" : l.scene && l.scene === scene ? "location" : undefined}
                className="inline-flex h-12 items-center no-underline transition-colors hover:text-[var(--ink)] aria-[current]:text-[var(--ink)]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
