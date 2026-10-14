"use client";
import { useState } from "react";
export default function SignupForm({ id = "signup" }: { id?: string }) {
  const [state, setState] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setState("loading");
    try {
      const r = await fetch("/api/subscribe", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: fd.get("email"), company: fd.get("company") }) });
      const j = await r.json();
      setState(r.ok ? "ok" : "err"); setMsg(j.message || "");
    } catch { setState("err"); setMsg("Network hiccup. Try again?"); }
  }
  if (state === "ok") return <p role="status" className="rounded-lg border border-ship/40 bg-ship/10 p-4 text-ship">You're in. First verdict lands in your inbox soon.</p>;
  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col gap-2 sm:flex-row" aria-describedby={`${id}-note`}>
      <label htmlFor={`${id}-email`} className="sr-only">Email address</label>
      <input id={`${id}-email`} name="email" type="email" required autoComplete="email" placeholder="you@example.com" className="min-w-0 flex-1 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500" />
      <input name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button disabled={state === "loading"} className="rounded-lg bg-ship px-5 py-3 font-semibold text-ink hover:brightness-110 disabled:opacity-60">{state === "loading" ? "Joining…" : "Get the weekly verdicts"}</button>
      <p id={`${id}-note`} role={state === "err" ? "alert" : undefined} className={`text-sm sm:hidden ${state === "err" ? "text-skip" : "text-gray-500"}`}>{state === "err" ? msg : "Free. Weekly. Unsubscribe anytime."}</p>
      {state === "err" && <p role="alert" className="hidden text-sm text-skip sm:block">{msg}</p>}
    </form>
  );
}
