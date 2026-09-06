type Props = {
  ratio?: "2.39" | "16/9";
  caption: string;
  subtitle?: string;
  reveal?: boolean;
  i?: number;
  children: React.ReactNode;
};

// Letterboxed frame: black bars, archival caption top-left, optional subtitle bottom-center.
// Wide frames drop to 16:9 on phones so the caption and subtitle keep their room.
export function Frame({ ratio = "2.39", caption, subtitle, reveal, i, children }: Props) {
  return (
    <figure className="wide" data-reveal-frame={reveal ? "" : undefined} data-i={i}>
      <div className="bar top h-[14px] bg-[var(--black)]" />
      <div
        className={`still relative overflow-hidden bg-[var(--panel)] ${ratio === "2.39" ? "aspect-[239/100] max-sm:aspect-video" : "aspect-video"}`}
      >
        {children}
        <span className="mono absolute left-[14px] top-[12px] z-[1] text-[#bdbdbd]">{caption}</span>
        {subtitle ? (
          <figcaption className="absolute inset-x-0 bottom-[22px] z-[1] px-4 text-center text-[15px] text-[#f2f0ea] [text-shadow:0_1px_2px_rgba(0,0,0,.9)]">
            <span className="box-decoration-clone bg-black/35 px-2 py-[3px]">{subtitle}</span>
          </figcaption>
        ) : null}
      </div>
      <div className="bar bot h-[14px] bg-[var(--black)]" />
    </figure>
  );
}
