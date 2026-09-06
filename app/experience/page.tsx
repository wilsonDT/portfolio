import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { education, employers } from "@/content/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Roles at Thinking Machines, Fit Senpai, DLRC, and DOST-ASTI, newest first.",
};

const first = employers[employers.length - 1].roles.at(-1)!.start.slice(-4);

export default function ExperiencePage() {
  return (
    <>
      <SiteNav current="experience" />
      <main id="main" className="pb-24">
        <header className="col pt-24">
          <h1 className="serif intro text-[clamp(40px,6vw,58px)] leading-none tracking-[-.02em] lowercase">
            Experience
          </h1>
          <p className="mono mt-4">{first} – present</p>
        </header>

        {employers.map((e) => {
          const newest = e.roles[0];
          const oldest = e.roles[e.roles.length - 1];
          const from = oldest.start.slice(-4);
          const to = newest.end === "Present" ? "now" : newest.end.slice(-4);
          return (
            <section key={e.slug} id={e.slug} className="col mt-16 scroll-mt-10">
              <div className="hair" />
              <div className="mt-6 grid grid-cols-[132px_1fr] gap-x-8 gap-y-3 max-sm:grid-cols-1">
                <p className="mono mt-2">{to === from ? from : `${from} – ${to}`}</p>
                <div>
                  <h2 className="serif m-0 text-[28px] leading-tight">{e.name}</h2>
                  <p className="mono mt-1.5">{e.location}</p>
                  {e.roles.map((r) => (
                    <div key={r.title + r.start} className="mt-7">
                      <h3 className="m-0 text-[15px] font-medium">{r.title}</h3>
                      <p className="mono mt-1">
                        {r.type} · {r.start} – {r.end}
                      </p>
                      {r.bullets.map((b) => (
                        <p key={b.text} className="mt-3 max-w-[62ch] text-[15.5px] leading-[1.6] text-[var(--ink-2)]">
                          {b.text}
                          {b.href ? (
                            <>
                              {" "}
                              <a href={b.href} className="mono whitespace-nowrap" target="_blank" rel="noreferrer">
                                Story
                              </a>
                            </>
                          ) : null}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Not another employer, so not the employers' shape: no year column, no role lines, no left rail.
            It closes the page the way the poster's end card closes the index. */}
        <section id="education" className="col mt-32 pb-4 text-center">
          <div className="hair" />
          <p className="mono mt-9">Education</p>
          <h2 className="serif mt-5 text-[26px] leading-tight">{education.school}</h2>
          <p className="mt-2 text-[15px] text-[var(--ink-2)]">
            {education.degree}, {education.year}
          </p>
          <p className="mx-auto mt-5 max-w-[54ch] text-[14.5px] leading-[1.55] text-[var(--mute)]">
            Thesis: {education.thesis.line}{" "}
            <a href={education.thesis.href} className="mono whitespace-nowrap" target="_blank" rel="noreferrer">
              Paper
            </a>
          </p>
        </section>

      </main>
    </>
  );
}
