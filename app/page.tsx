import Link from "next/link";
import { CopyEmail } from "@/components/CopyEmail";
import { Poster } from "@/components/Poster";
import { Scene } from "@/components/Scene";
import { SiteNav } from "@/components/SiteNav";
import { VideoFacade } from "@/components/VideoFacade";
import { WorkSheet } from "@/components/WorkSheet";
import { afterHours } from "@/content/after-hours";
import { site } from "@/content/site";
import { featured, restOfWork } from "@/content/work";

const years = [...new Set(featured.map((w) => w.year))].join(" · ");

export default function Page() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <Poster />

        <Scene
          id="about"
          title="About"
          right={
            <Link href="/experience" className="no-underline hover:text-[var(--ink)]">
              View experience
            </Link>
          }
        >
          <div className="col mt-8">
            <p className="max-w-[62ch] text-[15.5px] leading-[1.6] text-[var(--ink-2)]">{site.about}</p>
          </div>
        </Scene>

        <Scene id="work" title="Work" right={`${site.org} · ${years}`}>
          <div className="mt-14 space-y-28">
            {featured.map((w, i) => (
              <WorkSheet key={w.index} w={w} i={i} />
            ))}
          </div>
          <p className="col mt-16 text-[15px] text-[var(--ink-2)]">
            {restOfWork.line} <Link href="/experience">{restOfWork.linkLabel}</Link>.
          </p>
        </Scene>

        <Scene id="side-projects" title={site.sideProjectsLabel} right="Live">
          <div className="col mt-8 divide-y divide-[var(--line)]">
            {site.sideProjects.map((p) => (
              <article key={p.title} className="py-7">
                <a href={p.href} className="block no-underline" target="_blank" rel="noreferrer">
                  <h3 className="serif m-0 text-[24px] leading-tight">{p.title}</h3>
                  <p className="mt-2 max-w-[56ch] text-[15px] text-[var(--ink-2)]">{p.line}</p>
                  <span className="mono mt-2.5 inline-block normal-case">{new URL(p.href).host}</span>
                </a>
              </article>
            ))}
          </div>
        </Scene>

        <Scene id="after-hours" title="After hours" right="YouTube">
          <div className="space-y-14 pt-12">
            {afterHours.videos.map((v, i) => (
              <VideoFacade key={v.id} v={v} i={i} />
            ))}
          </div>
        </Scene>

        <Scene id="contact" title="End credits">
          <div className="col pt-12 pb-24">
            <CopyEmail email={site.email} />
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
            <p className="mono mt-5 normal-case">
              {site.domain} · v1
            </p>
          </div>
        </Scene>
      </main>
    </>
  );
}
