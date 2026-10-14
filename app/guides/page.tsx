import type { Metadata } from "next";
import Link from "next/link";
import { SEO_PAGES, pagePath } from "@/lib/seo";
export const metadata: Metadata = { title: "Guides: comparisons & alternatives", description: "Sourced comparisons and alternatives for AI coding agents and vibe-coding tools.", alternates: { canonical: "/guides" } };
export default function Page() {
  return (<section className="max-w-3xl py-12"><h1 className="text-4xl font-black text-white">Guides</h1>
    <p className="mt-3 text-gray-300">Shortlists built from public sources and clearly labeled. Hands-on verdicts live in <Link className="underline" href="/issues">Issues</Link> and on the <Link className="underline" href="/scoreboard">Scoreboard</Link>.</p>
    <ul className="mt-6 space-y-3">{SEO_PAGES.map(p => <li key={p.slug}><Link className="text-lg font-semibold text-ship underline" href={pagePath(p)}>{p.h1}</Link><p className="text-sm text-gray-400">{p.description}</p></li>)}</ul>
    <p className="mt-8"><Link className="underline" href="/quiz">Which AI coding agent fits you? Take the quiz →</Link></p></section>);
}
