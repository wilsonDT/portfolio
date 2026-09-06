import Link from "next/link";
import { CopyEmail } from "@/components/CopyEmail";
import { CutBand } from "@/components/CutBand";
import { LogoStrip } from "@/components/LogoStrip";
import { LowerThird } from "@/components/LowerThird";
import { SiteNav } from "@/components/SiteNav";
import { Slate } from "@/components/Slate";
import { VideoFacade } from "@/components/VideoFacade";
import { WorkCard } from "@/components/WorkCard";
import { afterHours } from "@/content/after-hours";
import { employers } from "@/content/experience";
import { site } from "@/content/site";
import { featured, restOfWork } from "@/content/work";

export default function Page() {
  const current = employers[0];
  const role = current.roles[0];
  return (
    <>
      <SiteNav />
      <main id="main">
        <section className="col pt-[88px] pb-28" aria-labelledby="hero">
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
          <LogoStrip />
        </section>

        <section id="work">
          <CutBand label="01 / Work" />
          <div className="col pt-16" data-reveal="">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="serif m-0 text-[26px] leading-tight">{current.short}</h2>
              <Link href={`/experience#${current.slug}`} className="mono no-underline hover:text-[var(--ink)]">
                Experience →
              </Link>
            </div>
            <p className="mono mt-1.5">
              {site.role} · {current.roles[current.roles.length - 1].start} – {role.end.toLowerCase()}
            </p>
          </div>
          <div className="space-y-20 pt-14">
            {featured.map((w, i) => (
              <WorkCard key={w.index} w={w} i={i} />
            ))}
          </div>
          <div className="col mt-16">
            <div className="hair" />
            <p className="mt-5 text-[15px] text-[#cfcec8]">
              {restOfWork.line}{" "}
              <Link href={`/experience#${current.slug}`} className="text-[var(--ink)]">
                {restOfWork.linkLabel} →
              </Link>
            </p>
          </div>
        </section>

        <section id="side-projects" className="pt-28">
          <CutBand label={`02 / ${site.sideProjectsLabel}`} />
          <div className="col pt-16">
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

        <section id="after-hours" className="pt-28">
          <CutBand label="03 / After hours" />
          <div className="space-y-14 pt-16">
            {afterHours.videos.map((v, i) => (
              <VideoFacade key={v.id} v={v} i={i} />
            ))}
          </div>
        </section>

        <section id="contact" className="pt-28 pb-24">
          <CutBand label="04 / End credits" />
          <div className="col pt-16">
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
