import Link from "next/link";
import { CopyEmail } from "@/components/CopyEmail";
import { Poster } from "@/components/Poster";
import { Scene } from "@/components/Scene";
import { SiteNav } from "@/components/SiteNav";
import { Reel } from "@/components/Reel";
import { WorkSheet } from "@/components/WorkSheet";
import { afterHours } from "@/content/after-hours";
import { site } from "@/content/site";
import { featured, restOfWork } from "@/content/work";

const years = [...new Set(featured.map((w) => w.year))].join(" · ");
const youtube = site.links.find((l) => l.label === "YouTube")!.href;

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

        <Scene
          id="after-hours"
          title="After hours"
          right={
            <a href={youtube} className="no-underline hover:text-[var(--ink)]" target="_blank" rel="noreferrer">
              YouTube
            </a>
          }
        >
          <div className="col mt-8">
            <p className="max-w-[62ch] text-[15.5px] leading-[1.6] text-[var(--ink-2)]">{afterHours.note}</p>
          </div>
          <div className="mt-12">
            <Reel videos={afterHours.videos} />
          </div>
        </Scene>

        <Scene id="contact" title="Say hi">
          <div className="col pt-14 pb-24">
            <dl className="credits">
              <dt className="mono">Contact</dt>
              <dd>
                <CopyEmail email={site.email} />
              </dd>

              <dt className="mono">Elsewhere</dt>
              <dd>
                <ul className="flex flex-wrap gap-x-5 gap-y-1 text-[15px]">
                  {site.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} target="_blank" rel="noreferrer">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </dd>

              <dt className="mono">Site</dt>
              <dd className="text-[15px] text-[var(--ink-2)]">{site.colophon}</dd>
            </dl>

            <div className="hair mt-20" />
            <p className="end-name">{site.name}</p>
            <p className="mono mt-2 text-center normal-case">{site.domain} · v1</p>
          </div>
        </Scene>
      </main>
    </>
  );
}
