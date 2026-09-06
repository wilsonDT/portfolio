export function LowerThird({ name, role }: { name: string; role: string }) {
  return (
    <div className="mt-7 inline-grid border-l-2 border-[var(--ink)] pl-3" data-reveal="">
      <span className="text-[13.5px] font-medium tracking-[.01em]">{name}</span>
      <span className="mono mt-[3px] text-[10.5px] tracking-[.08em]">{role}</span>
    </div>
  );
}
