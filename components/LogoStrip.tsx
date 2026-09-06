import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { employers } from "@/content/experience";

// Monochrome treatments. "white" flattens every opaque pixel to white (marks and line-art seals on a transparent ground); "invert" turns a solid, multi-tone mark into light line-art.
const TREAT = {
  white: "[filter:brightness(0)_invert(1)]",
  invert: "[filter:grayscale(1)_invert(1)_contrast(1.4)_brightness(1.15)]",
} as const;

// Width at the rendered height, read from the PNG header (IHDR width and height), so the strip reserves its real footprint and nothing below it shifts when the files load.
function widthAt(file: string, h: number) {
  const b = fs.readFileSync(file);
  return Math.round((h * b.readUInt32BE(16)) / b.readUInt32BE(20));
}

type Props = { h?: number; label?: string; center?: boolean; className?: string };

// Employers as logos when the file exists under /public, as mono wordmarks when it doesn't.
export function LogoStrip({ h = 36, label = "Worked at", center = false, className = "" }: Props) {
  return (
    <div className={className}>
      <p className={`mono ${center ? "text-center" : ""}`}>{label}</p>
      <ul className={`mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 ${center ? "justify-center" : ""}`}>
        {employers.map((e) => {
          const file = e.logo ? path.join(process.cwd(), "public", e.logo) : null;
          const width = file && fs.existsSync(file) ? widthAt(file, h) : 0;
          return (
            <li key={e.slug} className="opacity-80 transition-opacity hover:opacity-100">
              {width ? (
                <Image src={e.logo!} alt={e.name} width={width} height={h} className={e.logoTreat ? TREAT[e.logoTreat] : ""} />
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
