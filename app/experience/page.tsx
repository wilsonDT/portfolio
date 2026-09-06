import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { Slate } from "@/components/Slate";
import { education, employers } from "@/content/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Roles at Thinking Machines, Fit Senpai, DLRC, and DOST-ASTI, newest first.",
};

const first = employers[employers.length - 1].roles.at(-1)!.start.slice(-4);

export default function ExperiencePage() {
  return (
    <>
      <SiteNav />
      <main id="main" className="pb-24">
        <header className="col pt-[88px]">
          <Slate left="Experience" right={`${first} → present`} reveal />
          <h1 className="serif mt-3.5 text-[clamp(40px,6vw,58px)] leading-none tracking-[-.035em]" data-reveal="" data-i={1}>
            Experience
          </h1>
        </header>

        {employers.map((e) => {
          const newest = e.roles[0];
          const oldest = e.roles[e.roles.length - 1];
          return (
            <section key={e.slug} id={e.slug} className="col mt-16 scroll-mt-10">
              <div className="hair" />
              <div className="mt-6 grid grid-cols-[132px_1fr] gap-x-8 gap-y-3 max-sm:grid-cols-1">
                <p className="mono mt-2">
                  {oldest.start.slice(-4)}
                  {newest.end === "Present" ? " → now" : newest.end.slice(-4) !== oldest.start.slice(-4) ? ` → ${newest.end.slice(-4)}` : ""}
                </p>
                <div>
                  <h2 className="serif m-0 text-[28px] leading-tight" data-reveal="">
                    {e.name}
                  </h2>
                  <p className="mono mt-1.5">{e.location}</p>
                  {e.roles.map((r) => (
                    <div key={r.title + r.start} className="mt-7">
                      <h3 className="m-0 text-[15px] font-medium">{r.title}</h3>
                      <p className="mono mt-1">
                        {r.type} · {r.start} – {r.end}
                      </p>
                      {r.bullets.map((b) => (
                        <p key={b.text} className="mt-3 max-w-[62ch] text-[15.5px] leading-[1.6] text-[#cfcec8]">
                          {b.text}
                          {b.href ? (
                            <>
                              {" "}
                              <a href={b.href} className="mono whitespace-nowrap no-underline hover:text-[var(--ink)]" target="_blank" rel="noreferrer">
                                Story ↗
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

        <section id="education" className="col mt-16">
          <div className="hair" />
          <div className="mt-6 grid grid-cols-[132px_1fr] gap-x-8 gap-y-3 max-sm:grid-cols-1">
            <p className="mono mt-2">{education.year}</p>
            <div>
              <h2 className="serif m-0 text-[28px] leading-tight" data-reveal="">
                {education.school}
              </h2>
              <p className="mt-2 text-[15px] text-[#cfcec8]">{education.degree}</p>
              <p className="mt-1 text-[15px] text-[var(--mute)]">Thesis: {education.thesis}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
