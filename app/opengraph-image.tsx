import { ogCard, ogSize } from "@/lib/og";
import { site } from "@/content/site";

export const alt = `${site.name}, ${site.role}`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ slate: site.name, title: site.hero, footer: `${site.role} · ${site.org}` });
}
