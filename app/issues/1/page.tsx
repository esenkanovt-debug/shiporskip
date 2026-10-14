import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SignupForm from "@/components/SignupForm";
import { ISSUES } from "@/lib/issues";
import { SITE_URL, SITE_NAME } from "@/lib/site";
const issue = ISSUES.find(i => i.n === 1)!;
const url = `${SITE_URL}/issues/1`;
export const metadata: Metadata = {
  title: issue.title, description: issue.description,
  alternates: { canonical: "/issues/1" },
  openGraph: { type: "article", url, title: issue.title, description: issue.description, publishedTime: issue.date, authors: ["Midas"], siteName: SITE_NAME },
  twitter: { card: "summary_large_image", title: issue.title, description: issue.description },
};
type Tool = { id: string; verdict: "SHIP" | "SHIP (with an asterisk)" | "WAIT" | "SKIP THIS"; name: string; tagline: string; meta: string; scores: [number, number, number, number]; intro?: string; bullets: string[]; img?: boolean };
const TOOLS: Tool[] = [
  { id: "agent-engineer", verdict: "SHIP", name: "agent-engineer", tagline: "plugin for Claude Code, Codex, Cursor and others", meta: "Released Oct 12. Free, open source.", scores: [8,7,10,6],
    intro: "Skills, subagents and hooks for Claude Code, Codex, Cursor and friends. No Claude Code on our box, so we tested the part you can test without it: the **secret-guard hook**, fed Claude Code-style write payloads.",
    bullets: ["**Task:** try to write six fake-but-realistic keys into a file.",
      "**Result:** the hook blocked OpenAI, Anthropic, AWS and GitHub keys, each with a clear \"use an env var, and rotate it if it's real\" message. `os.environ[\"OPENAI_API_KEY\"]` went through, as it should. Under a second, standard library only, no network.",
      "**Failure mode:** obvious placeholders (`sk-ant-xxxx…`, `AKIA…EXAMPLE`) pass on purpose — sensible, but \"looks fake\" still gets through.",
      "**Hype check:** the launch claims 53% vs 34% requirements met in a blinded A/B. We did **not** reproduce that. Hook works; bigger claim unverified."] },
  { id: "garuda", verdict: "SHIP (with an asterisk)", name: "Garuda", tagline: "terminal coding agent with an OS sandbox", meta: "Released Oct 8. Apache-2.0, free, bring your own model.", scores: [6,6,9,7], img: true,
    bullets: ["**Task:** \"Build a tiny browser game: one index.html with a canvas Snake game, arrow keys, score.\"",
      "**Install:** `npm install` in **5s**. Local Ollama: one flag (`-m ollama/…`).",
      "**Time to first result:** **~2 min** to a 93-line `index.html` (shown as a diff).",
      "**Failure #1 (tool):** headless `-p` **denies every write** with no TTY to approve. Two allow-rule configs didn't help; file never hit disk. Safety model working; CI awkward.",
      "**Failure #2 (our tiny model):** we saved the proposed file by hand. It draws one red square and one green square, then crashes on `snake[1]`. Snake never moves. Use a real model.",
      "**Hype check:** docs are unusually honest — they publish corrections to their own security claims. Respect."] },
  { id: "codync", verdict: "WAIT", name: "Codync", tagline: "run your coding agents as bots you message from your phone", meta: "v2.16.0 shipped Oct 14. MIT, free.", scores: [5,7,9,6],
    bullets: ["**Task:** install the Linux host and get it running.",
      "**Result:** checksummed download + first `serve` in **~10s**. Clean CLI: `pair`, `devices`, `tui`, `status`.",
      "**Failure mode:** on first run it **bound 0.0.0.0, registered with Codync cloud and hit the relay** before we asked. Screen helper crashed (`libgstwebrtc` missing). We shut it down.",
      "**Untested:** the point of it — iPhone app + real agent. No phone app here.",
      "**Verdict:** promising; read the networking docs before a work laptop."] },
  { id: "ruflo", verdict: "SKIP THIS", name: "Ruflo", tagline: "the \"100-agent swarm\" meta-harness", meta: "New release Oct 13. MIT, free, 74k stars.", scores: [3,4,7,2],
    bullets: ["**Task:** `npx ruflo@latest init` in an empty git repo, then `metaharness score`.",
      "**Time to first result:** **42s** to drop **261 files (4.5 MB)** into an empty repo — agents, helpers, a vector DB, CLAUDE.md — plus rewrite `.claude/settings.json` (hooks on every Bash/Write, three plugins, experimental Claude Code flag).",
      "**Failure mode:** then: no `claude` binary, so plugins are \"enabled in settings, not installed.\" Its own scorecard: `scaffoldReady: false`, compileConfidence **12**, memoryUsefulness **4**.",
      "**Fairness:** we didn't run a swarm (needs Claude Code + paid models). Maybe the swarm is magic. A tool that says \"start with one bounded task\" shouldn't open with 261 files.",
      "**Skip** because the gap between \"100 coordinated agents\" and our machine is the widest this week."] },
];
function Md({ t }: { t: string }) {
  return <>{t.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((p, i) => p.startsWith("**") ? <strong key={i} className="text-white">{p.slice(2, -2)}</strong> : p.startsWith("`") ? <code key={i} className="rounded bg-white/10 px-1 py-0.5 text-[0.9em]">{p.slice(1, -1)}</code> : p)}</>;
}
const badge = (v: Tool["verdict"]) => v.startsWith("SHIP") ? "bg-ship/15 text-ship" : v === "WAIT" ? "bg-yellow-400/15 text-yellow-300" : "bg-skip/15 text-skip";
export default function Page() {
  const ld = { "@context": "https://schema.org", "@type": "Article", headline: issue.title, description: issue.description, datePublished: issue.date, dateModified: issue.date,
    url, mainEntityOfPage: url, image: [`${SITE_URL}/opengraph-image`, `${SITE_URL}/issues/1/garuda-snake.png`], author: { "@type": "Person", name: "Midas" },
    publisher: { "@id": `${SITE_URL}/#org` }, isPartOf: { "@type": "CollectionPage", url: `${SITE_URL}/issues` }, inLanguage: "en",
    about: TOOLS.map(t => ({ "@type": "SoftwareApplication", name: t.name })) };
  return (<article className="mx-auto max-w-3xl py-12 text-gray-300 [&_li]:leading-relaxed">
    <p className="text-sm text-gray-500"><Link href="/issues" className="underline">Issues</Link> · <time dateTime={issue.date}>14 October 2026</time> · by Midas</p>
    <h1 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl">{issue.title}</h1>
    <p className="mt-6 text-lg">Hey, it's Midas. Welcome to Ship or Skip. We take new AI agent / vibe-coding tools, run them on a real box with a real task, and score what happened — not the launch video.</p>
    <p className="mt-4 rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm"><strong className="text-white">Disclosure:</strong> our box had <strong className="text-white">no paid model API keys</strong>. When a tool needed a model, we used a small local one (Qwen2.5-Coder 3B on Ollama). Fair for the <em>tool</em>, harsh for the <em>model</em>. Scores out of 10: <strong className="text-white">Works / Time-to-value / Price / Hype vs reality</strong>. No sponsors.</p>
    <nav aria-label="In this issue" className="mt-6 text-sm"><ul className="flex flex-wrap gap-3">{TOOLS.map(t => <li key={t.id}><a href={`#${t.id}`} className="underline">{t.name}</a></li>)}<li><a href="#scoreboard" className="underline">Scoreboard</a></li></ul></nav>
    {TOOLS.map(t => (<section key={t.id} id={t.id} aria-labelledby={`${t.id}-h`} className="mt-12 scroll-mt-6">
      <span className={`rounded px-2 py-1 text-xs font-bold ${badge(t.verdict)}`}>{t.verdict}</span>
      <h2 id={`${t.id}-h`} className="mt-3 text-2xl font-bold text-white">{t.name} <span className="font-normal text-gray-400">— {t.tagline}</span></h2>
      <p className="mt-1 text-sm italic text-gray-500">{t.meta}</p>
      <p className="mt-3 font-semibold text-white">Works {t.scores[0]} · TTV {t.scores[1]} · Price {t.scores[2]} · Hype {t.scores[3]} <span className="font-normal text-gray-500">(out of 10)</span></p>
      {t.intro && <p className="mt-3"><Md t={t.intro} /></p>}
      <ul className="mt-3 list-disc space-y-2 pl-5">{t.bullets.map((b, i) => <li key={i}><Md t={b} /></li>)}</ul>
      {t.img && <figure className="mt-5"><Image src="/issues/1/garuda-snake.png" alt="Garuda's Snake game rendered with a 3B local model: a black canvas with one red square and one green square; the snake never moves." width={300} height={200} className="rounded-lg border border-white/10" /><figcaption className="mt-2 text-sm text-gray-500">Receipt: the Snake game Garuda proposed (with our tiny local model). One red square, one green square, then a crash on <code>snake[1]</code>.</figcaption></figure>}
    </section>))}
    <section className="mt-12"><h2 className="text-2xl font-bold text-white">👀 On the radar (not tested)</h2><p className="mt-3"><strong className="text-white">Moyai</strong> (LiteLLM, Oct 7): self-hosted "internal Devin" → PR from Slack. Needs infra + LiteLLM + model keys. <strong className="text-white">No score.</strong></p></section>
    <section id="scoreboard" className="mt-12"><h2 className="text-2xl font-bold text-white">Scoreboard</h2>
      <div className="mt-4 overflow-x-auto rounded-xl border border-white/10"><table className="w-full text-left text-sm"><caption className="sr-only">Issue #1 scores (out of 10)</caption>
        <thead className="bg-white/5 text-gray-400"><tr>{["Tool","Works","TTV","Price","Hype","Verdict"].map(h => <th key={h} scope="col" className="px-4 py-3">{h}</th>)}</tr></thead>
        <tbody>{TOOLS.map(t => <tr key={t.id} className="border-t border-white/10"><th scope="row" className="px-4 py-3 text-white"><a href={`#${t.id}`}>{t.name}</a></th>{t.scores.map((s, i) => <td key={i} className="px-4 py-3">{s}</td>)}<td className="px-4 py-3"><span className={`rounded px-2 py-1 text-xs font-bold ${badge(t.verdict)}`}>{t.verdict === "SHIP (with an asterisk)" ? "Ship*" : t.verdict === "SKIP THIS" ? "Skip" : t.verdict[0] + t.verdict.slice(1).toLowerCase()}</span></td></tr>)}</tbody></table></div>
      <p className="mt-3 text-sm"><Link href="/scoreboard" className="underline">Full scoreboard →</Link></p></section>
    <aside aria-labelledby="cta" className="mt-12 rounded-2xl border border-ship/30 bg-ship/[0.06] p-8">
      <h2 id="cta" className="text-2xl font-bold text-white">Get Issue #2 in your inbox.</h2>
      <p className="mt-2 mb-6 text-gray-300">One email a week: we run the newest agent tools so you don't burn credits finding out. Free, no sponsors scored favourably.</p>
      <SignupForm id="issue-1" />
    </aside>
    <p className="mt-10">Want us to break something next? Email <a className="underline" href="mailto:shiporskip@mail.grokbot.com">shiporskip@mail.grokbot.com</a>.</p>
    <p className="mt-4">— Midas, Ship or Skip</p>
    <p className="mt-4 text-sm italic text-gray-500">No sponsors. $0 model spend this week (all local) — which is also why we couldn't test everything.</p>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
  </article>);
}
