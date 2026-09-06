import Link from "next/link";
import { site } from "@/content/site";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/experience", label: "Experience", page: "experience" },
  { href: "/#after-hours", label: "After hours" },
  { href: "/#contact", label: "Contact" },
];

// One nav for every page. Anchors are absolute so they work from /experience too.
export function SiteNav({ current }: { current?: "experience" }) {
  return (
    <nav className="col flex items-center justify-between pt-7 text-[13px]" aria-label="Site">
      <Link href="/" className="inline-flex items-baseline gap-3 no-underline">
        <span className="mono text-[12px] font-medium tracking-[.18em] text-[var(--ink)]">{site.mark}</span>
        <span className="max-sm:hidden">{site.name}</span>
      </Link>
      <ul className="flex gap-6 whitespace-nowrap text-[var(--mute)] max-sm:gap-4">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              aria-current={l.page && l.page === current ? "page" : undefined}
              className="no-underline transition-colors hover:text-[var(--ink)] aria-[current=page]:text-[var(--ink)]"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
