import { CopyEmail } from "@/components/CopyEmail";
import { CutBand } from "@/components/CutBand";
import { DossierCard } from "@/components/DossierCard";
import { DossierRow } from "@/components/DossierRow";
import { LowerThird } from "@/components/LowerThird";
import { SiteNav } from "@/components/SiteNav";
import { Slate } from "@/components/Slate";
import { VideoFacade } from "@/components/VideoFacade";
import { afterHours } from "@/content/after-hours";
import { site } from "@/content/site";
import { dossiers } from "@/content/work";

export default function Page() {
  const featured = dossiers.filter((d) => d.featured);
  const rest = dossiers.filter((d) => !d.featured);
  return (
    <>
      <SiteNav />
      <main id="main">
        <section className="col pt-[88px] pb-32" aria-labelledby="hero">
          <Slate left="00 / Cold open" right={`${site.place}, PH`} reveal />
          <h1
            id="hero"
            className="serif mt-5 max-w-[16ch] text-[clamp(36px,5vw,52px)] leading-[1.04]"
            data-reveal=""
            data-i={1}
          >
            {site.hero}
          </h1>
          <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-[var(--mute)]">{site.sub}</p>
          <LowerThird name={site.name} role={`${site.role} · ${site.org} · ${site.place}`} />
        </section>

        <section id="work">
          <CutBand label="01 / Work" />
          <div className="space-y-24 pt-24">
            {featured.map((d, i) => (
              <DossierCard key={d.slug} d={d} i={i} />
            ))}
          </div>
          <div className="col mt-24">
            {rest.map((d, i) => (
              <DossierRow key={d.slug} d={d} i={i} />
            ))}
            {site.mentions.map((m) => (
              <div key={m.title} className="border-t border-[var(--line)] py-6">
                <Slate left="Also" right="No page" />
                <h3 className="serif mt-2.5 text-[22px] leading-tight">{m.title}</h3>
                <p className="mt-1.5 max-w-[60ch] text-[15px] text-[#cfcec8]">{m.line}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="side-projects" className="pt-32">
          <CutBand label={`02 / ${site.sideProjectsLabel}`} />
          <div className="col pt-24">
            {site.sideProjects.map((p) => (
              <article key={p.title} className="border-t border-[var(--line)] py-6">
                <a href={p.href} className="block no-underline" target="_blank" rel="noreferrer">
                  <h3 className="serif text-[22px] leading-tight">{p.title}</h3>
                  <p className="mt-1.5 max-w-[60ch] text-[15px] text-[#cfcec8]">{p.line}</p>
                  <span className="mono mt-2 inline-block">{new URL(p.href).host}</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="after-hours" className="pt-32">
          <CutBand label="03 / After hours" />
          <div className="col pt-24">
            <p className="max-w-[60ch] text-[15px] text-[#cfcec8]">{afterHours.intro}</p>
          </div>
          <div className="mt-10 space-y-14">
            {afterHours.videos.map((v, i) => (
              <VideoFacade key={v.id} v={v} i={i} />
            ))}
          </div>
        </section>

        <section id="contact" className="pt-32 pb-24">
          <CutBand label="04 / End credits" />
          <div className="col pt-24">
            <Slate left="Email" reveal />
            <div className="mt-3">
              <CopyEmail email={site.email} />
            </div>
            <ul className="mono mt-10 flex flex-wrap gap-x-6 gap-y-2">
              {site.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="no-underline hover:text-[var(--ink)]" target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="hair mt-16" />
            <p className="mono mt-5">
              {site.domain} · v1 · {site.place}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
