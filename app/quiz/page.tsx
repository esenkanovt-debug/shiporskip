import type { Metadata } from "next";
import QuizClient from "./QuizClient";
export const metadata: Metadata = { title: "Which AI coding agent fits you? (30-second quiz)", description: "Four questions to match you with Cursor, Claude Code, Codex, Copilot, Devin, Lovable, Bolt, v0 or Replit.", alternates: { canonical: "/quiz" } };
export default function Page() { return (<section className="max-w-2xl py-12"><h1 className="text-4xl font-black text-white">Which AI coding agent fits you?</h1><p className="mt-3 text-gray-300">Four questions, about 30 seconds. No email needed to see your result.</p><QuizClient /></section>); }
