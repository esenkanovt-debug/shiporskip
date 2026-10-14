import type { Metadata } from "next";
import { CRITERIA, CONTACT } from "@/lib/site";
export const metadata: Metadata = { title: "About & methodology", description: "How Ship or Skip tests AI tools: real tasks, receipts, four criteria, and a strict sponsor policy.", alternates: { canonical: "/about" } };
export default function Page() {
  return (<article className="prose-invert max-w-3xl py-12 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_p]:mt-3 [&_p]:text-gray-300 [&_li]:text-gray-300">
    <h1 className="text-4xl font-black text-white">About Ship or Skip</h1>
    <p>Ship or Skip is a weekly newsletter and public scoreboard for people who build with AI — agents, vibe coding, dev tools, and the occasional game-dev toy. Launch videos are cheap. We run the thing and report what happened.</p>
    <h2>Methodology</h2>
    <p>Each tool gets a real, repeatable task (e.g. "build a working to-do app with auth", "fix this failing test", "ship a landing page"). We record:</p>
    <ul className="mt-3 list-disc pl-6"><li><strong>The task run</strong> — exact prompt and setup.</li><li><strong>The screenshot</strong> — what we actually got.</li><li><strong>The failure mode</strong> — where and how it broke, if it did.</li></ul>
    <p>Then we score four things, each out of 5:</p>
    <ul className="mt-3 list-disc pl-6">{CRITERIA.map(c=><li key={c.name}><strong>{c.name}</strong> — {c.desc}</li>)}</ul>
    <p>The verdict is <strong className="text-ship">Ship</strong> (use it), <strong className="text-skip">Skip</strong> (don't), or Wait (promising, not yet). Every issue also has one <strong>"Skip this"</strong> pick.</p>
    <h2>Sponsor policy</h2>
    <ul className="mt-3 list-disc pl-6"><li>Sponsored placements are always labeled "Sponsored", in the email and on the site.</li><li>Sponsored tools are tested with the same rubric and are <strong>never scored favourably</strong>. Sponsors don't see or approve verdicts in advance.</li><li>Paying us doesn't keep you off the Skip list.</li><li>We don't use affiliate links in verdicts.</li></ul>
    <h2>Corrections</h2>
    <p>Tools change fast. If we got something wrong or a fix shipped, email <a className="underline" href={`mailto:${CONTACT}`}>{CONTACT}</a> and we'll retest and note the update.</p>
  </article>);
}
