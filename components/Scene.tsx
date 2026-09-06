import type { ReactNode } from "react";

type Props = { id: string; title: string; right?: ReactNode; children: ReactNode };

// A scene opens with a hairline and a lowercase serif title in the text column. The right slot holds one mono line: context or a link.
export function Scene({ id, title, right, children }: Props) {
  return (
    <section id={id} className="scroll-mt-4 pt-28" aria-labelledby={`${id}-title`}>
      <div className="col flex items-baseline justify-between gap-6 border-t border-[var(--line)] pt-8">
        <h2 id={`${id}-title`} className="serif m-0 text-[clamp(32px,4vw,40px)] leading-none lowercase">
          {title}
        </h2>
        {right ? <span className="mono text-right">{right}</span> : null}
      </div>
      {children}
    </section>
  );
}
