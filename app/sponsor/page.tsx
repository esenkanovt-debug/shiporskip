import type { Metadata } from "next";
import { CONTACT, SITE_URL } from "@/lib/site";
export const metadata: Metadata = {
  title: "Sponsor & media kit",
  description: "Media kit for Ship or Skip: audience, placements, and pioneer sponsorship. List size is early and still TBD. Contact for rates.",
  alternates: { canonical: "/sponsor" },
  openGraph: { title: "Sponsor Ship or Skip", description: "Labeled placements for builders who try AI tools every week. Pioneer rates on request.", url: `${SITE_URL}/sponsor` },
};
const TIERS = [
  { name: "Issue mention", detail: "One labeled slot in a weekly email, plus a line on that issue's page." },
  { name: "Issue + site", detail: "The email slot, the issue page, and a week on the public scoreboard as Sponsored." },
  { name: "Pioneer run", detail: "Four consecutive issues for the first sponsors. Same rules: labeled, no score influence." },
];
export default function Page() {
  return (<section className="max-w-3xl py-12">
    <h1 className="text-4xl font-black text-white">Sponsor Ship or Skip</h1>
    <p className="mt-4 text-gray-300">A media kit for dev-tool companies that want builders who actually install things. Readers come for a blunt Ship or Skip, not a launch recap.</p>
    <div id="one-pager" className="mt-10 rounded-2xl border border-white/15 bg-white p-8 text-ink shadow-xl">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Media kit · one pager</p>
      <h2 className="mt-2 text-3xl font-black tracking-tight"><span className="text-green-600">Ship</span> or <span className="text-rose-600">Skip</span></h2>
      <p className="mt-2 text-sm text-neutral-600">Weekly hands-on verdicts on AI agents, vibe-coding tools and dev tools. We run the task. We publish the failure.</p>
      <dl className="mt-6 grid gap-4 sm:grid-cols-2">
        <div><dt className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Who reads it</dt><dd className="mt-1 text-sm">Developers, indie hackers and technical founders deciding what to install this week.</dd></div>
        <div><dt className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Cadence</dt><dd className="mt-1 text-sm">One email a week, mirrored on the public site and scoreboard.</dd></div>
        <div><dt className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Estimated reach</dt><dd className="mt-1 text-sm">Early. The list just opened and the subscriber count is still TBD. We will not quote a number we cannot stand behind. Ask us for the live count before you buy.</dd></div>
        <div><dt className="text-xs font-semibold uppercase tracking-wide text-neutral-500">What you cannot buy</dt><dd className="mt-1 text-sm">A score. Placements are labeled Sponsored. Sponsors do not see or approve verdicts. A bad run still says Skip.</dd></div>
      </dl>
      <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-neutral-500">Placements</h3>
      <ul className="mt-2 space-y-2 text-sm">{TIERS.map(t => <li key={t.name}><strong>{t.name}.</strong> {t.detail} <span className="font-semibold">Coming soon — contact for pioneer rates.</span></li>)}</ul>
      <p className="mt-6 border-t border-neutral-200 pt-4 text-sm">Book a pioneer slot: <a className="font-semibold underline" href={`mailto:${CONTACT}?subject=Pioneer%20sponsorship`}>{CONTACT}</a></p>
      <p className="mt-1 text-xs text-neutral-500">{SITE_URL.replace(/^https:\/\//, "")}/sponsor · screenshot this card</p>
    </div>
    <h2 className="mt-12 text-2xl font-bold text-white">Pricing</h2>
    <p className="mt-3 text-gray-300">Public rate card is not open yet. Every tier below is <strong className="text-white">coming soon</strong>. If you want in before we publish prices, email us for <strong className="text-white">pioneer rates</strong>.</p>
    <ul className="mt-6 grid gap-4 sm:grid-cols-3">{TIERS.map(t => (
      <li key={t.name} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
        <h3 className="font-semibold text-white">{t.name}</h3>
        <p className="mt-2 text-sm text-gray-400">{t.detail}</p>
        <p className="mt-4 text-sm font-semibold text-ship">Coming soon</p>
        <p className="text-sm text-gray-400">Contact for pioneer rates</p>
      </li>))}</ul>
    <p className="mt-8 text-gray-300">Inquiries: <a className="font-semibold text-ship underline" href={`mailto:${CONTACT}?subject=Sponsorship%20inquiry`}>{CONTACT}</a></p>
    <p className="mt-4 text-sm text-gray-500">Reach disclaimer: Ship or Skip is early. List size is TBD until we have a count worth publishing. Do not plan a campaign on an estimated open rate we have not earned yet.</p>
  </section>);
}
