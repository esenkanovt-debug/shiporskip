"use client";
import { useState } from "react";
import SignupForm from "@/components/SignupForm";
export default function StickyCta() {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;
  return (<div className="fixed inset-x-0 bottom-0 z-40 border-t border-ship/40 bg-[#0b0d12]/95 px-4 py-3 backdrop-blur">
    <div className="mx-auto flex max-w-5xl items-start gap-3 sm:items-center">
      <p className="hidden shrink-0 text-sm font-semibold text-white sm:block">Get Issue #2 free.</p>
      <div className="min-w-0 flex-1"><SignupForm id="sticky" /></div>
      <button type="button" onClick={() => setHidden(true)} aria-label="Dismiss signup bar" className="mt-2 px-1 text-gray-400 hover:text-white sm:mt-0">✕</button>
    </div>
  </div>);
}
