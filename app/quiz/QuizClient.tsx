"use client";
import { useState } from "react";
import Link from "next/link";
import SignupForm from "@/components/SignupForm";
type Key = "cursor" | "windsurf" | "claudecode" | "codex" | "copilot" | "devin" | "lovable" | "bolt" | "v0" | "replit";
const INFO: Record<Key, { name: string; why: string; link: string }> = {
  cursor: { name: "Cursor", why: "You want a polished AI editor with tab-complete plus an in-editor agent.", link: "/compare/cursor-vs-windsurf" },
  windsurf: { name: "Windsurf / Devin Desktop", why: "You want an agentic IDE bundled with a cloud agent.", link: "/compare/cursor-vs-windsurf" },
  claudecode: { name: "Claude Code", why: "You live in the terminal and want an agent that edits, runs and tests.", link: "/compare/cursor-vs-claude-code" },
  codex: { name: "OpenAI Codex", why: "You already pay for ChatGPT and want a coding agent included.", link: "/compare/claude-code-vs-codex" },
  copilot: { name: "GitHub Copilot", why: "Your team lives in GitHub and wants agent PRs from issues.", link: "/alternatives/cursor" },
  devin: { name: "Devin", why: "You want to hand off whole tickets to a cloud agent.", link: "/alternatives/devin" },
  lovable: { name: "Lovable", why: "You aren't a developer and want a full app from prompts.", link: "/compare/lovable-vs-bolt" },
  bolt: { name: "Bolt.new", why: "You want the fastest in-browser prototype.", link: "/compare/lovable-vs-bolt" },
  v0: { name: "v0 by Vercel", why: "You build React/Next.js UIs and deploy on Vercel.", link: "/alternatives/lovable" },
  replit: { name: "Replit Agent", why: "You want build + database + hosting in one place.", link: "/alternatives/lovable" },
};
const Q: { q: string; a: { t: string; s: Partial<Record<Key, number>> }[] }[] = [
  { q: "Do you write code yourself?", a: [{ t: "Yes, daily", s: { cursor: 2, claudecode: 2, codex: 1, copilot: 1, windsurf: 1 } }, { t: "A bit", s: { bolt: 2, v0: 2, replit: 1, cursor: 1 } }, { t: "No", s: { lovable: 3, replit: 2, bolt: 1 } }] },
  { q: "Where do you want to work?", a: [{ t: "In an editor/IDE", s: { cursor: 2, windsurf: 2, copilot: 1 } }, { t: "In the terminal", s: { claudecode: 3, codex: 2 } }, { t: "In the browser", s: { lovable: 2, bolt: 2, v0: 1, replit: 2 } }, { t: "I'd rather delegate tickets", s: { devin: 3, copilot: 2, codex: 1 } }] },
  { q: "Which subscriptions do you already have?", a: [{ t: "ChatGPT", s: { codex: 3 } }, { t: "Claude", s: { claudecode: 3 } }, { t: "GitHub (paid)", s: { copilot: 3 } }, { t: "Vercel", s: { v0: 3 } }, { t: "None of these", s: { cursor: 1, lovable: 1 } }] },
  { q: "What are you building next?", a: [{ t: "Features in an existing codebase", s: { cursor: 2, claudecode: 2, copilot: 1, devin: 1 } }, { t: "A new MVP/app from scratch", s: { lovable: 2, bolt: 2, replit: 2 } }, { t: "A UI/landing page", s: { v0: 3, bolt: 1 } }, { t: "Lots of small tickets/bugs", s: { devin: 2, codex: 2, copilot: 2 } }] },
];
export default function QuizClient() {
  const [i, setI] = useState(0);
  const [score, setScore] = useState<Partial<Record<Key, number>>>({});
  function pick(s: Partial<Record<Key, number>>) { const n = { ...score }; for (const k in s) n[k as Key] = (n[k as Key] || 0) + (s[k as Key] || 0); setScore(n); setI(i + 1); }
  if (i < Q.length) return (<div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
    <p className="text-sm text-gray-500">Question {i + 1} of {Q.length}</p><h2 className="mt-2 text-2xl font-bold text-white">{Q[i].q}</h2>
    <div className="mt-5 grid gap-3">{Q[i].a.map(a => <button key={a.t} onClick={() => pick(a.s)} className="rounded-lg border border-white/15 px-4 py-3 text-left text-white hover:border-ship hover:bg-ship/10">{a.t}</button>)}</div></div>);
  const ranked = (Object.entries(score) as [Key, number][]).sort((a, b) => b[1] - a[1]).slice(0, 3);
  return (<div className="mt-8 space-y-6">
    <div className="rounded-2xl border border-ship/40 bg-ship/5 p-6"><p className="text-sm uppercase tracking-wide text-ship">Your best fit</p>
      {ranked.map(([k], n) => <div key={k} className="mt-3"><h2 className={n ? "text-lg font-semibold text-white" : "text-3xl font-black text-white"}>{n ? `Also consider: ${INFO[k].name}` : INFO[k].name}</h2><p className="text-gray-300">{INFO[k].why} <Link className="underline" href={INFO[k].link}>Compare →</Link></p></div>)}
      <p className="mt-4 text-xs text-gray-500">This quiz matches workflow to tool from public info. It isn't a hands-on verdict.</p></div>
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"><h2 className="text-xl font-bold text-white">Before you pay: see what actually breaks</h2><p className="mt-2 text-gray-400">Once a week we run new AI coding tools on real tasks and publish the failures. Free.</p><div className="mt-4"><SignupForm id="quiz" /></div></div>
    <button onClick={() => { setI(0); setScore({}); }} className="text-sm text-gray-400 underline">Retake quiz</button></div>);
}
