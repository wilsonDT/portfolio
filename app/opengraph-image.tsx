import { ogCard, ogSize } from "@/lib/og";
import { site } from "@/content/site";

export const alt = `${site.name}, ${site.role}`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ slate: "00 / Cold open", title: site.hero, footer: `${site.name} · ${site.role} · ${site.org}` });
}
