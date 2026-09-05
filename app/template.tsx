import { RevealObserver } from "@/components/RevealObserver";

// Remounts on every navigation: the black overlay is the cut, the observer re-arms the reveals.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="cut" aria-hidden />
      <RevealObserver />
      {children}
    </>
  );
}
