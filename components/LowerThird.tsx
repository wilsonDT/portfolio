export function LowerThird({ name, role, i }: { name: string; role: string; i?: number }) {
  return (
    <div className="mt-8 inline-grid border-l-2 border-[var(--ink)] pl-3" data-reveal="" data-i={i}>
      <span className="text-[13.5px] font-medium tracking-[.01em]">{name}</span>
      <span className="mono mt-[3px] text-[10.5px] tracking-[.08em]">{role}</span>
    </div>
  );
}
