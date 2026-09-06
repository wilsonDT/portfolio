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
          sizes="100vw"
          className="art-img object-cover"
          style={{ objectPosition: site.keyArt.focus }}
        />
        <div className="scrim" />
      </div>

      <div className="poster-copy">
        <h1 id="hero" className="serif title">
          {site.hero}
        </h1>

        <p className="billing">
          <span className="b-name">{site.name}</span>
          <span className="b-line">
            {site.role} <span className="b-sep" /> {site.org}
          </span>
          {site.stats.map((s) => (
            <span key={s.label} className="b-fact">
              <span className="b-value">{s.value}</span> {s.label}
            </span>
          ))}
        </p>

        <LogoStrip h={26} center className="rise mt-12" />
      </div>
    </section>
  );
}
