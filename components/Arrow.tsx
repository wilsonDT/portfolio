export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 12 12" width="12" height="12" className={className} fill="none" stroke="currentColor" strokeWidth="1.25">
      <path d="M1 6h10M7 2l4 4-4 4" />
    </svg>
  );
}
