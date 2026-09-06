import { ogCard, ogSize } from "@/lib/og";
import { site } from "@/content/site";

export const alt = `${site.name}, experience`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ slate: "Experience", title: site.name, footer: `${site.role} · ${site.org}` });
}
