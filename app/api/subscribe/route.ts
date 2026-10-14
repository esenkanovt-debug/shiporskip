import { NextResponse } from "next/server";
export const runtime = "nodejs";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export async function POST(req: Request) {
  let body: { email?: unknown; company?: unknown } = {};
  try { body = await req.json(); } catch { return NextResponse.json({ message: "Bad request." }, { status: 400 }); }
  if (body.company) return NextResponse.json({ message: "ok" }); // honeypot
  const email = String(body.email || "").trim().toLowerCase();
  if (!EMAIL.test(email) || email.length > 254) return NextResponse.json({ message: "That email doesn't look right." }, { status: 400 });
  const key = process.env.RESEND_API_KEY, audience = process.env.RESEND_AUDIENCE_ID;
  if (!key || !audience) return NextResponse.json({ message: "Signups aren't live yet — check back very soon." }, { status: 503 });
  const r = await fetch(`https://api.resend.com/audiences/${audience}/contacts`, {
    method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ email, unsubscribed: false }),
  });
  if (!r.ok && r.status !== 409) { console.error("resend", r.status, await r.text()); return NextResponse.json({ message: "Couldn't sign you up right now. Try again later." }, { status: 502 }); }
  return NextResponse.json({ message: "Subscribed" });
}
