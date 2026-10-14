import type { Metadata } from "next";
import Link from "next/link";
import SignupForm from "@/components/SignupForm";
import { ISSUES } from "@/lib/issues";
import { SITE_URL, SITE_NAME } from "@/lib/site";
export const metadata: Metadata = {
  title: "Issues",
  description: "Every Ship or Skip issue: hands-on verdicts on new AI agent and vibe-coding tools, with receipts.",
  alternates: { canonical: "/issues" },
  openGraph: { type: "website", url: `${SITE_URL}/issues`, title: `Issues · ${SITE_NAME}`, description: "Every Ship or Skip issue: hands-on verdicts on new AI agent and vibe-coding tools.", images: [{ url: "/opengraph-image", width: 1200, height: 630 }] },
};
export default function Page() {
  const ld = { "@context": "https://schema.org", "@type": "CollectionPage", name: `${SITE_NAME} issues`, url: `${SITE_URL}/issues`,
    hasPart: ISSUES.map(i => ({ "@type": "Article", headline: i.title, url: `${SITE_URL}${i.slug}`, datePublished: i.date })) };
  return (<section className="py-12">
    <h1 className="text-4xl font-black text-white">Issues</h1>
    <p className="mt-3 max-w-2xl text-gray-300">Every issue, newest first. Real tasks, real failures, no sponsors scored favourably.</p>
    <ul className="mt-8 space-y-4">{ISSUES.map(i => (
      <li key={i.n} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
        <p className="text-sm text-gray-500"><time dateTime={i.date}>{new Date(i.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</time></p>
        <h2 className="mt-1 text-xl font-bold text-white"><Link href={i.slug} className="hover:underline">{i.title}</Link></h2>
        <p className="mt-2 text-gray-400">{i.summary}</p>
        <Link href={i.slug} className="mt-3 inline-block text-sm text-ship underline">Read Issue #{i.n} →</Link>
      </li>))}</ul>
    <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-8"><h2 className="text-2xl font-bold text-white">Get the next one first.</h2><p className="mt-2 mb-6 text-gray-400">One email a week.</p><SignupForm id="issues" /></div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
  </section>);
}
