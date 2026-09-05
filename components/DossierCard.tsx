import Link from "next/link";
import type { Dossier } from "@/content/types";
import { Frame } from "./Frame";
import { Slate } from "./Slate";
import { Still } from "./Still";

export function DossierCard({ d, i = 0 }: { d: Dossier; i?: number }) {
  const n = d.numbers[0];
  return (
    <article className="group">
      <Link href={`/work/${d.slug}`} className="block no-underline">
        <Frame caption={d.frame.caption} subtitle={d.frame.subtitle} reveal i={i}>
          <Still src={d.frame.src} alt="" />
        </Frame>
        <div className="col mt-5">
          <Slate
            left={`${d.index} / Work`}
            right={[d.client.name, d.client.industry, d.year].filter(Boolean).join(" · ")}
            reveal
            i={i}
          />
          <div className="mt-3 grid grid-cols-[1.3fr_1fr] items-end gap-7 max-sm:grid-cols-1">
            <div>
              <h3 className="serif m-0 text-[34px] leading-none" data-reveal="" data-i={i + 1}>
                {d.title}
              </h3>
              <p className="mt-2.5 max-w-[34ch] text-[15px] leading-normal text-[#cfcec8]">{d.deck}</p>
            </div>
            <div>
              <div className="serif text-[40px] leading-none tracking-[-.02em]">{n.value}</div>
              <div className="mt-2 text-[12.5px] leading-snug text-[var(--mute)]">{n.label}</div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
