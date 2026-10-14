import Link from "next/link";
import SignupForm from "@/components/SignupForm";
import Scoreboard from "@/components/Scoreboard";
import { CRITERIA } from "@/lib/site";
import Faq from "@/components/Faq";
import { HOME_FAQ } from "@/lib/faq";
export default function Home() {
  return (<>
    <section className="py-16 sm:py-24">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-ship">Weekly · AI agents · vibe coding · dev tools</p>
      <h1 className="text-5xl font-black tracking-tight text-white sm:text-7xl">Stop burning credits on AI tools that don't work.</h1>
      <p className="mt-6 max-w-2xl text-lg text-gray-300">Every week we take the newest AI agent and vibe-coding tools, give them a real task, and tell you straight: <strong className="text-ship">Ship</strong> it or <strong className="text-skip">Skip</strong> it. With receipts — the task we ran, the screenshot, and exactly how it broke.</p>
      <div className="mt-8"><SignupForm id="hero" /><p className="mt-3 text-sm text-gray-500">Free · 1 email a week · 5-minute read · unsubscribe in one click</p></div>
    </section>
    <section aria-labelledby="latest" className="py-10">
      <div className="mb-4 flex items-end justify-between"><h2 id="latest" className="text-2xl font-bold text-white">Latest verdicts</h2><Link href="/scoreboard" className="text-sm text-gray-300 underline">Full scoreboard →</Link></div>
      <p className="mb-4 text-gray-400">From <Link href="/issues/1" className="text-ship underline">Issue #1</Link>: one Ship, one Skip, and a snake that never moved. <Link href="/issues/1" className="underline">Read the full issue →</Link></p>
      <Scoreboard limit={2} />
    </section>
    <section aria-labelledby="how" className="py-10">
      <h2 id="how" className="mb-6 text-2xl font-bold text-white">How we score</h2>
      <ul className="grid gap-4 sm:grid-cols-2">{CRITERIA.map(c=>(<li key={c.name} className="rounded-xl border border-white/10 bg-white/[0.03] p-5"><h3 className="font-semibold text-white">{c.name}</h3><p className="mt-1 text-gray-400">{c.desc}</p></li>))}</ul>
      <p className="mt-6 text-gray-400">Plus one <strong className="text-skip">Skip this</strong> pick every issue: the hyped tool we'd keep your credit card away from. <Link className="underline" href="/about">Full methodology →</Link></p>
    </section>
    <section className="grid gap-4 py-6 sm:grid-cols-3">
      <Link href="/quiz" className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-ship/40"><h2 className="font-semibold text-white">Which agent fits you?</h2><p className="mt-1 text-sm text-gray-400">30-second quiz → newsletter signup.</p></Link>
      <Link href="/guides" className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-ship/40"><h2 className="font-semibold text-white">Compare & alternatives</h2><p className="mt-1 text-sm text-gray-400">Cursor vs Windsurf, Devin alternatives, more.</p></Link>
      <Link href="/submit" className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-ship/40"><h2 className="font-semibold text-white">Built a tool?</h2><p className="mt-1 text-sm text-gray-400">Free review queue or $99 priority.</p></Link>
    </section>
    <Faq items={HOME_FAQ} />
    <section className="my-10 rounded-2xl border border-white/10 bg-white/[0.03] p-8"><h2 className="text-2xl font-bold text-white">Get next week's verdicts before you pay for a trial.</h2><p className="mt-2 mb-6 text-gray-400">One free email a week: what we ran, what broke, and what's worth your money.</p><SignupForm id="footer" /></section>
  </>);
}
