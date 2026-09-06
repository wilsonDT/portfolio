import { ogCard, ogSize } from "@/lib/og";
import { site } from "@/content/site";

export const alt = `${site.name}, ${site.role}`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ slate: site.name, title: `${site.heroStem} ${site.heroTail[0]}`, footer: `${site.role} · ${site.org}` });
}
