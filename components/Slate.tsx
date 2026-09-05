type Props = {
  left: React.ReactNode;
  right?: React.ReactNode;
  reveal?: boolean;
  i?: number;
  className?: string;
};

export function Slate({ left, right, reveal, i, className = "" }: Props) {
  return (
    <div
      className={`mono flex items-baseline justify-between gap-4 ${className}`}
      data-reveal={reveal ? "" : undefined}
      data-i={i}
    >
      <span className="shrink-0 whitespace-nowrap">{left}</span>
      {right ? <span className="text-right">{right}</span> : null}
    </div>
  );
}
