import type { Dossier } from "@/content/types";

// Rows with sources, not stat tiles.
export function Numbers({ items }: { items: Dossier["numbers"] }) {
  return (
    <>
      <dl className="m-0 divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {items.map((n) => (
          <div key={n.value + n.label} className="grid grid-cols-[minmax(120px,auto)_1fr] items-baseline gap-x-6 py-4 max-sm:grid-cols-1 max-sm:gap-y-1">
            <dt className="serif text-[40px] leading-none tracking-[-.02em]">{n.value}</dt>
            <dd className="m-0">
              <div className="text-[15px] leading-snug">{n.label}</div>
              <div className="mono mt-1.5 normal-case tracking-[.03em]">Source: {n.source}</div>
            </dd>
          </div>
        ))}
      </dl>
      <p className="mono mt-5">Only published or resume-stated figures. Every number carries its source.</p>
    </>
  );
}
