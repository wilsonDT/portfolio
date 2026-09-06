import type { Featured } from "@/content/work";

// A featured engagement as a two-column spread across the break-out: the number huge on one side, the copy left-aligned on the other. Odd entries mirror the columns so consecutive spreads read as shot and reverse shot. The story link's box stretches over the spread, so it is clickable anywhere while the link keeps a short name.
export function WorkSheet({ w, i = 0 }: { w: Featured; i?: number }) {
  const host = new URL(w.href).host;
  return (
    <article className={`sheet${i % 2 ? " sheet--mirror" : ""}`} data-reveal-frame data-i={i}>
      <p className="sheet-figure-block">
        <span className="serif sheet-figure">{w.figure.value}</span>
        <span className="sheet-figure-label">{w.figure.label}</span>
      </p>
      <div className="sheet-text">
        <h3 className="sheet-name">{w.title}</h3>
        <p className="sheet-line">{w.line}</p>
        <p className="mono sheet-meta">
          {w.client} · {w.industry} · {w.year}
        </p>
        <p className="sheet-did">{w.did}</p>
        <a
          href={w.href}
          className="mono sheet-host no-underline normal-case"
          target="_blank"
          rel="noreferrer"
          aria-label={`Read the ${w.title} story on ${host}`}
        >
          Read the story · {host}
        </a>
      </div>
    </article>
  );
}
