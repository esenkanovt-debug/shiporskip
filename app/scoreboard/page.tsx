import type { Metadata } from "next";
import Scoreboard from "@/components/Scoreboard";
export const metadata: Metadata = { title: "Scoreboard", description: "The public Ship or Skip scoreboard: every AI agent and vibe-coding tool we've tested, scored on works, time-to-value, price and hype vs reality.", alternates: { canonical: "/scoreboard" } };
export default function Page() {
  return (<section className="py-12">
    <h1 className="text-4xl font-black text-white">Scoreboard</h1>
    <p className="mt-3 max-w-2xl text-gray-300">Every tool we test lands here, good or bad. Scores are out of 10 per criterion. Current verdicts come from Issue #1.</p>
    <div className="mt-8"><Scoreboard /></div>
    <p className="mt-4 text-sm text-gray-500">Sponsored tools are marked "Sponsored" and scored with the same rubric — never favourably.</p>
  </section>);
}
