import type { Featured } from "@/content/work";
import { Still } from "./Still";

// A featured engagement as its own one-sheet, in the poster's grammar but shorter: the graded picture fills the frame and fades into the ground, a pull quote heads it, the number is the title with its label beside it, the product is the star billing, then one line, one credit line, and the story's host. The whole sheet is the link.
export function WorkSheet({ w, i = 0 }: { w: Featured; i?: number }) {
  return (
    <article className="sheet" data-reveal-frame data-i={i}>
      <a href={w.href} className="sheet-link no-underline" target="_blank" rel="noreferrer">
        <div className="art" aria-hidden="true">
          <Still src={w.frame.src} alt="" tone={w.frame.tone} className="art-img" />
          <div className="scrim sheet-scrim" />
        </div>

        {w.frame.subtitle ? <p className="sheet-quote">{w.frame.subtitle}</p> : null}

        <div className="sheet-copy">
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
        </div>
      </a>
    </article>
  );
}
