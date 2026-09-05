import Link from "next/link";
import { site } from "@/content/site";

export function SiteNav({ back = false }: { back?: boolean }) {
  return (
    <nav className="col flex items-center justify-between pt-7" aria-label="Site">
      <Link href="/" className="inline-flex items-center gap-2.5 no-underline">
        <span className="mono rounded-[3px] border border-[var(--line-2)] px-1.5 py-1 text-[12px] font-medium tracking-[.18em] text-[var(--ink)]">
          {site.mark}
        </span>
        <span className="text-[13px]">{site.name}</span>
      </Link>
      {back ? (
        <Link href="/" className="mono no-underline hover:text-[var(--ink)]">
          Index
        </Link>
      ) : (
        <ul className="mono flex gap-6">
          <li><a href="#work" className="no-underline hover:text-[var(--ink)]">Work</a></li>
          <li><a href="#after-hours" className="no-underline hover:text-[var(--ink)]">After hours</a></li>
          <li><a href="#contact" className="no-underline hover:text-[var(--ink)]">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
