import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, SITE_URL } from "@/lib/site";
export const metadata: Metadata = { title: "Submit your AI tool for review", description: "Get your AI agent or vibe-coding tool hands-on reviewed by Ship or Skip. Free queue, or $99 priority review. The verdict is never for sale.", alternates: { canonical: "/submit" }, openGraph: { title: "Submit your AI tool to Ship or Skip", url: `${SITE_URL}/submit` } };
const body = (p: boolean) => encodeURIComponent(`Tool name:\nURL:\nWhat it does (1 line):\nA real task we should test it on:\nFree trial / test account details:\nContact name + role:\n${p ? "\nI'd like the $99 priority review. Please send booking details.\n" : ""}`);
export default function Page() {
  return (<section className="max-w-3xl py-12">
    <h1 className="text-4xl font-black text-white">Submit your AI tool</h1>
    <p className="mt-4 text-gray-300">Built an AI agent, coding tool or vibe-coding app? We'll run it on a real task and publish a verdict: <span className="text-ship">Ship</span>, Wait, or <span className="text-skip">Skip</span>. It includes the receipts: the task, a screenshot, and where it broke.</p>
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"><h2 className="text-xl font-bold text-white">Free queue</h2><p className="mt-1 text-3xl font-black text-white">$0</p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-300"><li>Added to our review backlog</li><li>Tested when it fits an issue theme (no date promised)</li><li>Same rubric, same honesty</li></ul>
        <a className="mt-6 inline-block rounded-lg border border-white/20 px-4 py-2 font-semibold text-white hover:bg-white/10" href={`mailto:${CONTACT}?subject=Tool%20submission%20(free%20queue)&body=${body(false)}`}>Submit for free</a></div>
      <div className="rounded-2xl border border-ship/40 bg-ship/5 p-6"><h2 className="text-xl font-bold text-white">Priority review</h2><p className="mt-1 text-3xl font-black text-white">$99</p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-300"><li>Tested and published within about 2 weeks of booking</li><li>Private written feedback before publishing (bugs only, no score edits)</li><li>Permanent scoreboard entry plus a guide link where relevant</li></ul>
        <a className="mt-6 inline-block rounded-lg bg-ship px-4 py-2 font-semibold text-ink hover:brightness-110" href={`mailto:${CONTACT}?subject=Priority%20review%20booking&body=${body(true)}`}>Contact to book</a>
        <p className="mt-2 text-xs text-gray-500">No online payment yet. We'll reply with booking details.</p></div>
    </div>
    <h2 className="mt-12 text-2xl font-bold text-white">What money doesn't buy</h2>
    <p className="mt-3 text-gray-300">Priority buys speed, not the score. Paid reviews are labeled "Priority review (paid)", use the same <Link className="underline" href="/about">methodology</Link>, and can still end in Skip. There are no refunds for a bad verdict. If you'd rather pay for promotion than a review, see <Link className="underline" href="/sponsor">sponsorship</Link>.</p>
    <h2 className="mt-10 text-2xl font-bold text-white">What we review</h2>
    <p className="mt-3 text-gray-300">AI coding agents, agent frameworks and plugins, vibe-coding app builders, AI dev tools, and the occasional AI game-dev toy. It has to be usable today (public beta or later).</p>
  </section>);
}
