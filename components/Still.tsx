import Image from "next/image";
import type { Tone } from "@/content/work";

// Two grades for the placeholder, warm tungsten and cool steel, so two frames never read as the same shot.
const GRADE: Record<Tone, string> = {
  warm: "radial-gradient(120% 90% at 22% 78%, #3b2b1d 0%, #16130f 45%, #05070a 100%)",
  cool: "radial-gradient(120% 90% at 78% 24%, #1c2a33 0%, #10151a 45%, #05070a 100%)",
};

type Props = { src: string | null; alt: string; tone?: Tone; className?: string };

// A graded frame grab when we have one; a graded field when we don't.
export function Still({ src, alt, tone = "warm", className = "" }: Props) {
  if (!src) return <div aria-hidden className={`absolute inset-0 ${className}`} style={{ background: GRADE[tone] }} />;
  return <Image src={src} alt={alt} fill sizes="100vw" className={`object-cover ${className}`} />;
}
