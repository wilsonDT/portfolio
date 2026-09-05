import Link from "next/link";
import type { Dossier } from "@/content/types";
import { Redacted } from "./Redacted";
import { Slate } from "./Slate";

export function DossierRow({ d, i = 0 }: { d: Dossier; i?: number }) {
  const n = d.numbers[0];
  return (
    <article className="border-t border-[var(--line)] py-6">
      <Link href={`/work/${d.slug}`} className="block no-underline">
        <Slate
          left={`${d.index} / Work`}
          right={
            <>
              {d.client.redacted ? <Redacted /> : d.client.name} · {d.client.industry} · {d.year}
            </>
          }
          reveal
          i={i}
        />
        <h3 className="serif mt-2.5 text-[22px] leading-tight">{d.title}</h3>
        <p className="mt-1.5 max-w-[60ch] text-[15px] text-[#cfcec8]">{d.deck}</p>
        <p className="mt-2 text-[13px] text-[var(--mute)]">
          <span className="serif text-[18px] text-[var(--ink)]">{n.value}</span> {n.label}
        </p>
      </Link>
    </article>
  );
}
