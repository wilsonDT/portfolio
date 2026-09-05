import { ogCard, ogSize } from "@/lib/og";
import { dossiers, getDossier } from "@/content/work";

export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return dossiers.map((d) => ({ slug: d.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDossier(slug);
  const title = d?.title ?? "Scene missing.";
  const client = d ? (d.client.redacted ? "Confidential client" : d.client.name) : "";
  return ogCard({ slate: d ? `${d.index} / Work · ${client}` : "404", title, footer: d?.deck.slice(0, 70) ?? "" });
}
