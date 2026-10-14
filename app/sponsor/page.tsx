import type { Metadata } from "next";
import { CONTACT } from "@/lib/site";
export const metadata: Metadata = { title: "Sponsor", description: "Reach builders who actually use AI agent and vibe-coding tools. Sponsorship inquiries for Ship or Skip.", alternates: { canonical: "/sponsor" } };
export default function Page() {
  return (<section className="max-w-3xl py-12">
    <h1 className="text-4xl font-black text-white">Sponsor Ship or Skip</h1>
    <p className="mt-4 text-gray-300">Our readers are developers, indie hackers and tech-curious gamers who try new AI tools every week — and trust us because we say "skip" when it's deserved.</p>
    <h2 className="mt-10 text-2xl font-bold text-white">The deal</h2>
    <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300"><li>Clearly labeled sponsor slot in the weekly email and on the site.</li><li>Your sponsorship buys attention, not a score. If we review your tool, it gets the same rubric as everyone else — never scored favourably.</li><li>No pre-approval of copy or verdicts.</li></ul>
    <p className="mt-8 text-gray-300">Inquiries: <a className="font-semibold text-ship underline" href={`mailto:${CONTACT}?subject=Sponsorship%20inquiry`}>{CONTACT}</a></p>
  </section>);
}
