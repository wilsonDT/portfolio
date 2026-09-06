import Image from "next/image";
import { LogoStrip } from "./LogoStrip";
import { site } from "@/content/site";

// The one-sheet. Key art fills the viewport and fades into the page ground at its foot. The title sits in the lower third, the billing block carries the facts beneath it, and the employer marks run along the bottom edge where a poster keeps its distributors.
export function Poster() {
  return (
    <section className="poster" aria-labelledby="hero">
      <div className="art" aria-hidden="true">
        <Image
          src={site.keyArt.src}
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          className="art-img object-cover"
          style={{ objectPosition: site.keyArt.focus }}
        />
        <div className="scrim" />
      </div>

      <div className="poster-copy">
        <h1 id="hero" className="serif title">
          <span className="title-stem">{site.heroStem}</span>
          <span className="title-roll">
            {/* The tails stack on one line and take turns. Only the first names the heading. */}
            {site.heroTail.map((tail, i) => (
              <span key={tail} className="title-slide" aria-hidden={i > 0 || undefined}>
                {tail}
              </span>
            ))}
          </span>
        </h1>

        <ul className="billing" aria-label="Credits">
          <li className="b-name">{site.name}</li>
          <li className="b-line">
            {site.role} · {site.org}
          </li>
          {site.stats.map((s) => (
            <li key={s.label} className="b-fact">
              <span className="b-value">{s.value}</span> {s.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="poster-foot">
        <LogoStrip h={32} center className="rise" />
      </div>
    </section>
  );
}
