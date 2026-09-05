import type { Dossier, FlowNode } from "@/content/types";
import { Arrow } from "./Arrow";

function Node({ n }: { n: FlowNode }) {
  return (
    <div className="node rounded-[4px] border border-[var(--line-2)] bg-[#141413] px-3 py-3">
      <div className="mono mb-[5px] text-[9px] tracking-[.08em]">{n.kind}</div>
      <div className="font-[family-name:var(--font-mono)] text-[10.5px] leading-[1.45] tracking-[.03em] text-[var(--ink)]">
        {n.text}
      </div>
    </div>
  );
}

export function ArchitectureFlow({ a }: { a: Dossier["architecture"] }) {
  return (
    <div className="breakout rounded-[6px] border border-[var(--line)] bg-[var(--panel)] px-[26px] py-7">
      <div className="flow">
        {a.nodes.map((n, i) => (
          <div key={i} className="contents">
            {i > 0 ? (
              <div className="arrow">
                <Arrow />
              </div>
            ) : null}
            <Node n={n} />
          </div>
        ))}
        {a.branches?.length ? (
          <>
            <div className="arrow">
              <Arrow />
            </div>
            <div className="branches">
              {a.branches.map((b, i) => (
                <Node key={i} n={b} />
              ))}
            </div>
          </>
        ) : null}
      </div>
      <p className="mono mt-[18px]">{a.note}</p>
    </div>
  );
}
