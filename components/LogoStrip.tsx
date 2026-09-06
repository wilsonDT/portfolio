import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { employers } from "@/content/experience";

// Monochrome treatments. "white" flattens every opaque pixel to white (marks and line-art seals on a transparent ground); "invert" turns a solid, multi-tone mark into light line-art.
const TREAT = {
  white: "[filter:brightness(0)_invert(1)]",
  invert: "[filter:grayscale(1)_invert(1)_contrast(1.4)_brightness(1.15)]",
} as const;

// Employers as logos when the file exists under /public, as mono wordmarks when it doesn't.
export function LogoStrip() {
  return (
    <div className="mt-16" data-reveal="" data-i={2}>
      <p className="mono">Worked at</p>
      <ul className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3">
        {employers.map((e) => {
          const hasLogo = !!e.logo && fs.existsSync(path.join(process.cwd(), "public", e.logo));
          return (
            <li key={e.slug} className="opacity-80 transition-opacity hover:opacity-100">
              {hasLogo ? (
                <Image
                  src={e.logo!}
                  alt={e.name}
                  width={200}
                  height={36}
                  className={`h-9 w-auto ${e.logoTreat ? TREAT[e.logoTreat] : ""}`}
                />
              ) : (
                <span className="mono text-[12px] tracking-[.14em] text-[var(--ink)]" title={e.name}>
                  {e.short}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
