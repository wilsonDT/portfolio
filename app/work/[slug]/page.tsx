import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchitectureFlow } from "@/components/ArchitectureFlow";
import { Frame } from "@/components/Frame";
import { Numbers } from "@/components/Numbers";
import { Redacted } from "@/components/Redacted";
import { SceneIndex } from "@/components/SceneIndex";
import { SiteNav } from "@/components/SiteNav";
import { Slate } from "@/components/Slate";
import { SpecSheet } from "@/components/SpecSheet";
import { Still } from "@/components/Still";
import { dossiers, getDossier, nextDossier } from "@/content/work";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return dossiers.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const d = getDossier(slug);
  return d ? { title: d.title, description: d.deck } : {};
}

const SECTIONS = [
  { id: "problem", n: "01", label: "Problem" },
  { id: "constraint", n: "02", label: "Constraint" },
  { id: "architecture", n: "03", label: "Architecture" },
  { id: "numbers", n: "04", label: "Numbers" },
  { id: "change", n: "05", label: "What I'd change" },
];

function Heading({ n, label, id }: { n: string; label: string; id: string }) {
  return (
    <h2 id={id} className="serif mb-3.5 flex items-baseline gap-3.5 text-[22px] leading-tight scroll-mt-10" data-reveal="">
      <span className="mono">{n}</span>
      {label}
    </h2>
  );
}

function Prose({ paras }: { paras: string[] }) {
  return (
    <>
      {paras.map((p, i) =>
        p.startsWith("[DRAFT]") ? (
          <p key={i} className="mono rounded-[6px] border border-dashed border-[var(--line-2)] px-[18px] py-4 text-[12px] normal-case leading-relaxed tracking-normal">
            {p}
          </p>
        ) : (
          <p key={i} className="mb-3 max-w-[65ch] text-[15.5px] leading-[1.6] text-[#cfcec8]">
            {p}
          </p>
        ),
      )}
    </>
  );
}

export default async function DossierPage({ params }: Params) {
  const { slug } = await params;
  const d = getDossier(slug);
  if (!d) notFound();
  const next = nextDossier(slug);
  const slateRight = (
    <>
      {d.client.redacted ? <Redacted /> : d.client.name} · {d.client.industry}
      {d.client.region ? ` · ${d.client.region}` : ""} · {d.year}
    </>
  );

  return (
    <>
      <SiteNav back />
      <main id="main" className="pb-14">
        <header className="col pt-[88px]">
          <Slate left={`${d.index} / Work`} right={slateRight} reveal />
          <h1 className="serif mt-3.5 text-[clamp(40px,6vw,58px)] leading-none tracking-[-.035em]" data-reveal="" data-i={1}>
            {d.title}
          </h1>
          <p className="mt-[22px] max-w-[30ch] text-[19px] font-light leading-[1.45]">{d.deck}</p>
          {d.client.redacted ? <p className="mono mt-4">Client under NDA. Architecture and numbers are real.</p> : null}
          <SpecSheet d={d} />
        </header>

        <Frame caption={d.frame.caption} subtitle={d.frame.subtitle} reveal className="mt-12">
          <Still src={d.frame.src} alt="" />
        </Frame>

        <div className="dossier-body mt-[72px]">
          <SceneIndex items={SECTIONS.map((s) => ({ id: s.id, label: `${s.n} ${s.label}` }))} />
          <div className="dossier-content col">
            <section className="mb-14">
              <Heading {...SECTIONS[0]} />
              <Prose paras={d.problem} />
            </section>
            <section className="mb-14">
              <Heading {...SECTIONS[1]} />
              <Prose paras={d.constraint} />
            </section>
            <section className="mb-14">
              <Heading {...SECTIONS[2]} />
              <Prose paras={[d.architecture.intro]} />
              <div className="mt-6">
                <ArchitectureFlow a={d.architecture} />
              </div>
            </section>
            <section className="mb-14">
              <Heading {...SECTIONS[3]} />
              <Numbers items={d.numbers} />
            </section>
            <section className="mb-14">
              <Heading {...SECTIONS[4]} />
              <Prose paras={d.whatIdChange} />
            </section>
            <div className="hair" />
            <p className="mt-5 flex items-baseline justify-between gap-4">
              <span className="mono">Next</span>
              <Link href={`/work/${next.slug}`} className="text-[16px] no-underline hover:underline">
                {next.index} / {next.title}
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
