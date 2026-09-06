import type { Featured } from "@/content/work";

// A featured engagement as a typographic one-sheet: no picture, the copy is the poster. A pull quote heads it, the number is the title with its label beside it, the product is the star billing, then one line, one credit line, and the story's host. The whole sheet is the link.
export function WorkSheet({ w, i = 0 }: { w: Featured; i?: number }) {
  return (
    <article className="sheet" data-reveal-frame data-i={i}>
      <a href={w.href} className="sheet-link no-underline" target="_blank" rel="noreferrer">
        {w.frame.subtitle ? <p className="sheet-quote">{w.frame.subtitle}</p> : null}
        <h3 className="sheet-title">
          <span className="serif sheet-figure">{w.figure.value}</span>
          <span className="sheet-figure-label">{w.figure.label}</span>
        </h3>
        <ul className="billing sheet-billing" aria-label="Credits">
          <li className="b-name">{w.title}</li>
          <li className="b-line sheet-line">{w.line}</li>
          <li className="b-line">
            {w.client} · {w.industry} · {w.year}
          </li>
          <li className="b-line">{w.did}</li>
          <li className="b-line sheet-host">Read the story · {new URL(w.href).host}</li>
        </ul>
      </a>
    </article>
  );
}
