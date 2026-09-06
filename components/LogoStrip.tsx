import Image from "next/image";
import { employers } from "@/content/experience";

// Employers as logos when a file exists, as mono wordmarks when it doesn't.
export function LogoStrip() {
  return (
    <div className="mt-16" data-reveal="" data-i={2}>
      <p className="mono">Worked at</p>
      <ul className="mt-4 flex flex-wrap items-center gap-x-9 gap-y-3">
        {employers.map((e) => (
          <li key={e.slug} className="opacity-75 transition-opacity hover:opacity-100">
            {e.logo ? (
              <Image src={e.logo} alt={e.name} width={120} height={24} className="h-6 w-auto grayscale" />
            ) : (
              <span className="mono text-[12px] tracking-[.14em] text-[var(--ink)]" title={e.name}>
                {e.short}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
