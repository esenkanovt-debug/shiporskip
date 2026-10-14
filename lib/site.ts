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
// No real reviews yet. Example rows are clearly labeled and exist only to show the format.
export const ROWS: Row[] = [
  { tool: "Example Agent A", category: "Coding agent", works: 4, ttv: 3, price: 2, hype: 3, verdict: "Ship", issue: "Example", example: true },
  { tool: "Example Builder B", category: "Vibe-coding app builder", works: 2, ttv: 4, price: 3, hype: 1, verdict: "Skip", issue: "Example", example: true },
];
