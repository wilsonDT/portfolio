// A quiet band between scenes, same ground as the page. The label is the section heading.
export function CutBand({ label }: { label: string }) {
  return (
    <div className="flex h-[220px] w-full items-center justify-center">
      <h2 className="mono m-0" data-reveal="">
        {label}
      </h2>
    </div>
  );
}
