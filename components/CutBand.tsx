// A full-width black band between scenes. The label is the section's heading.
export function CutBand({ label }: { label: string }) {
  return (
    <div className="flex h-[180px] w-full items-center justify-center bg-[var(--black)]">
      <h2 className="mono m-0" data-reveal="">
        {label}
      </h2>
    </div>
  );
}
