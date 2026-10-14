import { ISSUES } from "@/lib/issues";
import { SITE_URL, SITE_NAME, TAGLINE } from "@/lib/site";
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
export const dynamic = "force-static";
export function GET() {
  const items = ISSUES.map(i => `<item><title>${esc(i.title)}</title><link>${SITE_URL}${i.slug}</link><guid isPermaLink="true">${SITE_URL}${i.slug}</guid><pubDate>${new Date(i.date + "T08:00:00Z").toUTCString()}</pubDate><description>${esc(i.summary)}</description></item>`).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>${esc(SITE_NAME)}</title><link>${SITE_URL}</link><description>${esc(TAGLINE)}</description><language>en</language><atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>${items}</channel></rss>`;
  return new Response(xml, { headers: { "content-type": "application/rss+xml; charset=utf-8", "cache-control": "public, max-age=3600" } });
}
