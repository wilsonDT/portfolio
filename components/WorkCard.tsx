import type { Featured } from "@/content/work";
import { Frame } from "./Frame";
import { Slate } from "./Slate";
import { Still } from "./Still";

// A featured engagement: letterboxed frame, slate, title and line, one big public number, link to the story.
export function WorkCard({ w, i = 0 }: { w: Featured; i?: number }) {
  return (
    <article className="group">
      <a href={w.href} className="block no-underline" target="_blank" rel="noreferrer">
        <Frame caption={w.frame.caption} subtitle={w.frame.subtitle} reveal i={i}>
          <Still src={w.frame.src} alt="" />
        </Frame>
        <div className="col mt-5">
          <Slate left={`${w.index} / Work`} right={`${w.client} · ${w.industry} · ${w.year}`} reveal i={i} />
          <div className="mt-3 grid grid-cols-[1.3fr_1fr] items-end gap-7 max-sm:grid-cols-1">
            <div>
              <h3 className="serif m-0 text-[34px] leading-none" data-reveal="" data-i={i + 1}>
                {w.title}
              </h3>
              <p className="mt-2.5 max-w-[38ch] text-[15px] leading-normal text-[#cfcec8]">{w.line}</p>
              <p className="mt-2 text-[13.5px] text-[var(--mute)]">{w.did}</p>
            </div>
            <div>
              <div className="serif text-[clamp(48px,6vw,72px)] leading-none tracking-[-.02em]">{w.figure.value}</div>
              <div className="mt-2 text-[12.5px] leading-snug text-[var(--mute)]">{w.figure.label}</div>
            </div>
          </div>
          <span className="mono mt-4 inline-block group-hover:text-[var(--ink)]">Story · {new URL(w.href).host}</span>
        </div>
      </a>
    </article>
  );
}
