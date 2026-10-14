export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://shiporskip-ship-or-skip.vercel.app").replace(/\/$/, "");
export const SITE_NAME = "Ship or Skip";
export const CONTACT = "shiporskip@mail.grokbot.com";
export const TAGLINE = "We actually ran it. Hands-on verdicts on new AI agent and vibe-coding tools.";
export const CRITERIA = [
  { name: "Does it work?", desc: "We give it a real task and watch. Did it finish, or did it hallucinate a finish line?" },
  { name: "Time-to-value", desc: "Minutes from signup to first useful result. Onboarding mazes cost points." },
  { name: "Price", desc: "What you actually pay for the job we ran, including the credits you burn retrying." },
  { name: "Hype vs reality", desc: "The launch video vs. what happened on our machine. The gap is the score." },
];
export type Verdict = "Ship" | "Skip" | "Wait";
export type Row = { tool: string; category: string; works: number; ttv: number; price: number; hype: number; verdict: Verdict; issue: string; example?: boolean; sponsored?: boolean };
export const ROWS: Row[] = [
  { tool: "agent-engineer", category: "Agent plugin (skills/hooks)", works: 8, ttv: 7, price: 10, hype: 6, verdict: "Ship", issue: "#1" },
  { tool: "Garuda", category: "Coding agent (CLI)", works: 6, ttv: 6, price: 9, hype: 7, verdict: "Ship", issue: "#1" },
  { tool: "Codync", category: "Agent remote / bots", works: 5, ttv: 7, price: 9, hype: 6, verdict: "Wait", issue: "#1" },
  { tool: "Ruflo", category: "Multi-agent harness", works: 3, ttv: 4, price: 7, hype: 2, verdict: "Skip", issue: "#1" },
];
