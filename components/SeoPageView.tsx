import Link from "next/link";
import SignupForm from "@/components/SignupForm";
import { SITE_URL } from "@/lib/site";
import { SEO_PAGES, pagePath, type SeoPage } from "@/lib/seo";
export default function SeoPageView({ p }: { p: SeoPage }) {
  const url = `${SITE_URL}${pagePath(p)}`;
  const ld = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", headline: p.h1, description: p.description, url, dateModified: "2026-10-14", author: { "@type": "Organization", name: "Ship or Skip" }, publisher: { "@id": `${SITE_URL}/#org` }, citation: p.sources.map(s => s.url) },
    { "@type": "FAQPage", mainEntity: p.faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) } ] };
  const related = SEO_PAGES.filter(x => x.slug !== p.slug).slice(0, 5);
  return (<article className="max-w-3xl py-12">
    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">{p.type === "compare" ? "Comparison" : p.type === "alternatives" ? "Alternatives" : "Shortlist"} · Updated 14 Oct 2026</p>
    <h1 className="mt-2 text-4xl font-black text-white">{p.h1}</h1>
    <div className="mt-6 rounded-xl border border-ship/30 bg-ship/5 p-5"><h2 className="text-sm font-bold uppercase tracking-wide text-ship">Short answer</h2><p className="mt-2 text-gray-200">{p.answer}</p></div>
    <p className="mt-4 rounded-lg border border-yellow-400/30 bg-yellow-400/5 p-4 text-sm text-yellow-100"><strong>Researched, not tested:</strong> {p.tested}</p>
    <div className="mt-8 overflow-x-auto"><table className="w-full text-left text-sm"><thead className="text-gray-400"><tr><th className="py-2 pr-4">Tool</th><th className="py-2 pr-4">What it is</th><th className="py-2 pr-4">Pricing (check official)</th><th className="py-2">Best for</th></tr></thead>
      <tbody>{p.tools.map(t => <tr key={t.name} className="border-t border-white/10 align-top text-gray-300"><td className="py-3 pr-4 font-semibold text-white">{t.name}</td><td className="py-3 pr-4">{t.kind}</td><td className="py-3 pr-4">{t.pricing} <a className="underline" href={t.pricingUrl} rel="nofollow noopener" target="_blank">official</a></td><td className="py-3">{t.bestFor}<br /><span className="text-gray-500">Watch out: {t.watchOut}</span></td></tr>)}</tbody></table></div>
    {p.sections.map(s => <section key={s.h}><h2 className="mt-10 text-2xl font-bold text-white">{s.h}</h2><p className="mt-3 text-gray-300">{s.p}</p></section>)}
    <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.03] p-6"><h2 className="text-xl font-bold text-white">Get the hands-on verdicts</h2><p className="mt-2 text-gray-400">Once a week we run new AI coding tools on real tasks and publish what broke.</p><div className="mt-4"><SignupForm id={`seo-${p.slug}`} /></div><p className="mt-3 text-sm text-gray-400">Not sure which agent fits? <Link className="underline" href="/quiz">Take the 30-second quiz</Link>.</p></div>
    <h2 className="mt-10 text-2xl font-bold text-white">FAQ</h2>
    <dl className="mt-3 space-y-4">{p.faq.map(f => <div key={f.q}><dt className="font-semibold text-white">{f.q}</dt><dd className="mt-1 text-gray-300">{f.a}</dd></div>)}</dl>
    <h2 className="mt-10 text-2xl font-bold text-white">Sources</h2>
    <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-gray-400">{p.sources.map(s => <li key={s.url}><a className="underline" href={s.url} rel="nofollow noopener" target="_blank">{s.label}</a></li>)}</ul>
    <p className="mt-4 text-xs text-gray-500">Found an error? Email us and we'll correct it. No affiliate links on this page.</p>
    <h2 className="mt-10 text-lg font-bold text-white">Related</h2>
    <ul className="mt-2 space-y-1 text-sm">{related.map(r => <li key={r.slug}><Link className="text-ship underline" href={pagePath(r)}>{r.h1}</Link></li>)}</ul>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
  </article>);
}
