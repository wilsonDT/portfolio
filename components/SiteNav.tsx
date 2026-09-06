import Link from "next/link";
import { site } from "@/content/site";

// One nav for every page. Anchors are absolute so they work from /experience too.
export function SiteNav() {
  return (
    <nav className="col flex items-center justify-between pt-7" aria-label="Site">
      <Link href="/" className="inline-flex items-center gap-2.5 no-underline">
        <span className="mono rounded-[3px] border border-[var(--line-2)] px-1.5 py-1 text-[12px] font-medium tracking-[.18em] text-[var(--ink)]">
          {site.mark}
        </span>
        <span className="text-[13px] max-sm:hidden">{site.name}</span>
      </Link>
      <ul className="mono flex gap-6 whitespace-nowrap max-sm:gap-4">
        <li><Link href="/#work" className="no-underline hover:text-[var(--ink)]">Work</Link></li>
        <li><Link href="/experience" className="no-underline hover:text-[var(--ink)]">Experience</Link></li>
        <li><Link href="/#after-hours" className="no-underline hover:text-[var(--ink)]">After hours</Link></li>
        <li><Link href="/#contact" className="no-underline hover:text-[var(--ink)]">Contact</Link></li>
      </ul>
    </nav>
  );
}
