import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { employers } from "@/content/experience";

// Monochrome treatments. "white" flattens every opaque pixel to white (marks and line-art seals on a transparent ground); "invert" turns a solid, multi-tone mark into light line-art.
const TREAT = {
  white: "[filter:brightness(0)_invert(1)]",
  invert: "[filter:grayscale(1)_invert(1)_contrast(1.4)_brightness(1.15)]",
} as const;

const H = 36;

// Width at 36px tall, read from the PNG header (IHDR width and height), so the strip reserves its real footprint and nothing below it shifts when the files load.
function widthAt36(file: string) {
  const b = fs.readFileSync(file);
  return Math.round((H * b.readUInt32BE(16)) / b.readUInt32BE(20));
}

// Employers as logos when the file exists under /public, as mono wordmarks when it doesn't.
export function LogoStrip() {
  return (
    <div className="intro mt-14" style={{ "--i": 2 } as React.CSSProperties}>
      <p className="mono">Worked at</p>
      <ul className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3">
        {employers.map((e) => {
          const file = e.logo ? path.join(process.cwd(), "public", e.logo) : null;
          const width = file && fs.existsSync(file) ? widthAt36(file) : 0;
          return (
            <li key={e.slug} className="opacity-80 transition-opacity hover:opacity-100">
              {width ? (
                <Image src={e.logo!} alt={e.name} width={width} height={H} className={e.logoTreat ? TREAT[e.logoTreat] : ""} />
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
