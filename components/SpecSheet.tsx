import type { Dossier } from "@/content/types";
import { Redacted } from "./Redacted";

export function SpecSheet({ d }: { d: Dossier }) {
  const rows: { k: string; v: React.ReactNode }[] = [
    { k: "Role", v: d.role },
    { k: "Stack", v: d.stack.join(" · ") },
    { k: "Scale", v: d.scale },
    { k: "Client", v: d.client.redacted ? <Redacted /> : `${d.client.name}, ${d.client.industry}` },
    { k: "Status", v: d.status },
  ];
  if (d.publicUrl) {
    rows.push({
      k: "Public story",
      v: (
        <a href={d.publicUrl} target="_blank" rel="noreferrer">
          {new URL(d.publicUrl).host}
        </a>
      ),
    });
  }
  return (
    <dl className="mt-10 grid grid-cols-3 gap-x-6 gap-y-[18px] border-t border-[var(--line)] pt-[18px] max-sm:grid-cols-2">
      {rows.map((r) => (
        <div key={r.k}>
          <dt className="mono mb-1.5">{r.k}</dt>
          <dd className="m-0 text-[13px] leading-snug">{r.v}</dd>
        </div>
      ))}
    </dl>
  );
}
