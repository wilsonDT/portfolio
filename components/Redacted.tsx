// Fixed width so the length of the real name never leaks.
export function Redacted({ width = "9ch" }: { width?: string }) {
  return (
    <span
      role="img"
      aria-label="Client name withheld"
      className="inline-block h-[.9em] translate-y-[.12em] rounded-[2px] bg-[var(--black)]"
      style={{ width }}
    />
  );
}
