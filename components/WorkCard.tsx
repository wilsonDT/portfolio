import type { Featured } from "@/content/work";
import { Frame } from "./Frame";
import { Still } from "./Still";

// A featured engagement: a letterboxed frame with the client as its archival caption, title and one line, one public number, the story link.
export function WorkCard({ w, i = 0 }: { w: Featured; i?: number }) {
  return (
    <article>
      <a href={w.href} className="group block no-underline" target="_blank" rel="noreferrer">
        <Frame caption={`${w.client} · ${w.industry} · ${w.year}`} subtitle={w.frame.subtitle} reveal i={i}>
          <Still src={w.frame.src} alt="" tone={w.frame.tone} />
        </Frame>
        <div className="col mt-7 grid grid-cols-[1fr_auto] items-end gap-x-10 gap-y-5 max-sm:grid-cols-1">
          <div>
            <h3 className="serif m-0 text-[30px] leading-none">{w.title}</h3>
            <p className="mt-3 max-w-[40ch] text-[15px] leading-normal text-[var(--ink-2)]">{w.line}</p>
            <p className="mt-1.5 max-w-[40ch] text-[15px] leading-normal text-[var(--mute)]">{w.did}</p>
          </div>
          <div className="text-right max-sm:text-left">
            <p className="serif m-0 text-[clamp(52px,6vw,76px)] leading-none tracking-[-.02em]">{w.figure.value}</p>
            <p className="mt-1.5 text-[12.5px] leading-snug text-[var(--mute)]">{w.figure.label}</p>
          </div>
        </div>
        <p className="col mono mt-5 normal-case transition-colors group-hover:text-[var(--ink)]">
          Read the story · {new URL(w.href).host}
        </p>
      </a>
    </article>
  );
}
