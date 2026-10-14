import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
// Allow search + AI citation crawlers (GEO). Disallow only the subscribe API.
export default function robots(): MetadataRoute.Robots {
  const allow = { allow: "/", disallow: ["/api/"] };
  return {
    rules: [
      { userAgent: "*", ...allow },
      { userAgent: "GPTBot", ...allow },
      { userAgent: "OAI-SearchBot", ...allow },
      { userAgent: "ChatGPT-User", ...allow },
      { userAgent: "PerplexityBot", ...allow },
      { userAgent: "ClaudeBot", ...allow },
      { userAgent: "Google-Extended", ...allow },
      { userAgent: "Applebot-Extended", ...allow },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
