import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import { SITE_URL, SITE_NAME, TAGLINE, CONTACT } from "@/lib/site";
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} — We actually ran it.`, template: `%s · ${SITE_NAME}` },
  description: TAGLINE,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: SITE_NAME, title: `${SITE_NAME} — We actually ran it.`, description: TAGLINE, url: SITE_URL },
  twitter: { card: "summary_large_image", title: SITE_NAME, description: TAGLINE },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#0b0d12", width: "device-width", initialScale: 1 };
const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "Organization", "@id": `${SITE_URL}/#org`, name: SITE_NAME, url: SITE_URL, email: CONTACT, description: TAGLINE },
  { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: SITE_NAME, url: SITE_URL, publisher: { "@id": `${SITE_URL}/#org` }, inLanguage: "en" } ] };
const nav = [["/scoreboard","Scoreboard"],["/about","Methodology"],["/sponsor","Sponsor"]];
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:bg-white focus:px-3 focus:py-2 focus:text-ink">Skip to content</a>
        <header className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-5">
          <Link href="/" className="text-lg font-black tracking-tight text-white"><span className="text-ship">Ship</span> or <span className="text-skip">Skip</span></Link>
          <nav aria-label="Main"><ul className="flex gap-4 text-sm text-gray-300">{nav.map(([h,l])=><li key={h}><Link href={h} className="hover:text-white">{l}</Link></li>)}</ul></nav>
        </header>
        <main id="main" className="mx-auto max-w-5xl px-5">{children}</main>
        <footer className="mx-auto mt-24 max-w-5xl border-t border-white/10 px-5 py-8 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Ship or Skip. Sponsored tools are always disclosed and never scored favourably. <a className="underline" href={`mailto:${CONTACT}`}>{CONTACT}</a></p>
        </footer>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
