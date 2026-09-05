import Image from "next/image";

// A graded frame grab when we have one; a graded gradient placeholder when we don't.
export function Still({ src, alt }: { src: string | null; alt: string }) {
  if (!src) {
    return (
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "radial-gradient(120% 90% at 22% 78%, #3b2b1d 0%, #16130f 45%, #05070a 100%)" }}
      />
    );
  }
  return <Image src={src} alt={alt} fill sizes="(max-width: 800px) 96vw, 800px" className="object-cover" />;
}
