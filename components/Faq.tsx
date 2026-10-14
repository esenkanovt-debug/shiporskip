export type QA = { q: string; a: string };
export default function Faq({ items, id = "faq" }: { items: QA[]; id?: string }) {
  const ld = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map(i => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })) };
  return (<section aria-labelledby={`${id}-h`} className="py-10">
    <h2 id={`${id}-h`} className="mb-6 text-2xl font-bold text-white">FAQ</h2>
    <dl className="space-y-5">{items.map(i => (<div key={i.q} className="rounded-xl border border-white/10 bg-white/[0.03] p-5"><dt className="font-semibold text-white">{i.q}</dt><dd className="mt-2 text-gray-400">{i.a}</dd></div>))}</dl>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
  </section>);
}
