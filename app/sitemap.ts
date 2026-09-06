import type { MetadataRoute } from "next";
import { dossiers } from "@/content/work";

const base = "https://wilsondetorres.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...dossiers.map((d) => ({
      url: `${base}/work/${d.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
