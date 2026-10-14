export type Issue = { n: number; slug: string; title: string; description: string; date: string; summary: string };
export const ISSUES: Issue[] = [
  { n: 1, slug: "/issues/1", date: "2026-10-14",
    title: "Issue #1: One Ship, one Skip, and a snake that never moved",
    description: "Hands-on verdicts on agent-engineer (Ship), Garuda (Ship*), Codync (Wait) and Ruflo (Skip) — run on a real box with a local model, with receipts and failure modes.",
    summary: "agent-engineer and Garuda ship, Codync waits, and the 100-agent swarm Ruflo drops 261 files into an empty repo. Skip." },
];
export const LATEST = ISSUES[0];
