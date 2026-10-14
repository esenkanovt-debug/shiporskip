import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/issues", "/issues/1", "/scoreboard", "/about", "/sponsor"].map(p => ({ url: `${SITE_URL}${p}`, lastModified: new Date(), changeFrequency: "weekly", priority: p ? 0.7 : 1 }));
}
