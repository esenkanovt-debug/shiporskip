# Monetization plan — path to the first $1

Written 14 Oct 2026 (Europe/Amsterdam). Audience: Tagdyr. Goal this month is the first dollar, not a pricing page.

## Where we are

- Product is live: https://shiporskip-ship-or-skip.vercel.app
- Resend segment `Ship or Skip` (`421c1679-d536-4417-a745-8fa16fa5c434`): **1 contact** as of 14 Oct 2026, and that contact is Resend's own `delivered@resend.dev` test address. Real subscribers: **0**.
- Issue #1 Ships (agent-engineer, Garuda) are free and open source. There is no affiliate commission to collect on them.
- Public policy today: no affiliate links inside verdicts. Sponsorships are labeled and never change a score.
- Do not quote a list size on `/sponsor`. The page says early / TBD on purpose.

## Path to the first dollar (in order)

### 1. Affiliates on tools we independently Ship — first dollar

This is the only path that can pay before we have an audience.

Rules, and we amend the About page **before** the first link goes live:

- Affiliate links only on tools we already decided to **Ship** on the rubric. Never on Skip or Wait. Never in exchange for the link.
- Labeled ("affiliate") and placed after the verdict, not inside the scores.
- A tool with no program (most OSS) gets no link. We do not invent one.
- Issue #1 cannot produce this dollar. Both Ships are free. Issue #2 must include at least one **paid** tool that publishes an affiliate or referral program (Cursor, v0, Bolt, Replit, Lovable, or whoever is actually paying referrals that week — verify the program, don't assume).

Expected first dollar: one referred signup on a paid tool. Timing depends on Issue #2 traffic, not on the list.

### 2. Pioneer sponsor — only after 200+ real subscribers

- Do not sell a slot at 0 subscribers. The kit at `/sponsor` is for inbound only, with the reach disclaimer.
- Internal rate, **not published**: one labeled issue mention at **$49** once the segment has 200+ real people (exclude Resend test addresses). Four-issue pioneer run at **$149**. Raise or kill these numbers once we see opens; do not put them on the site until then.
- The public line stays "coming soon / contact for pioneer rates" until we are willing to print a number next to a real list size.
- Sponsor still cannot buy a score. If their tool is a Skip, the email says Skip.

### 3. Paid tier — later

Not this month. A paid tier before the free email is a habit just splits a list of zero.

Revisit when **all** of these are true:

- 1,000 real subscribers, or two consecutive pioneer sponsors renewed.
- Open rate on the free issue is known (target: keep sending only if opens stay above ~40% — if they don't, fix the issue before charging).
- The paid thing is extra receipts (full prompt logs, retest notes), not "the verdict, but behind a card."

No Stripe, no paywall, no "founding member" checkout this week.

## Next 7 days (Wed 14 Oct → Wed 21 Oct 2026)

| Day | Action | Done when |
| --- | --- | --- |
| Wed 14 | Ship SEO (FAQ schema, RSS, home CTA, sticky signup on Issue #1) and the sponsor one-pager. Deploy. | Live URLs return 200. |
| Thu 15 | Pick **five paid** AI dev tools with a public affiliate or referral program. Write down the program URL, cookie window, and what a signup pays. Drop any tool that is invite-only or has no published rate. | Shortlist of 5 in `ops/`, or a note that fewer than 5 exist. |
| Fri 16 | Lock Issue #2's slate: at least one tool from that shortlist, plus whatever else is worth running. Decide the verdicts only after the runs. Add a labeled affiliate slot in the issue template, behind the About-page policy edit. | Template + policy sentence drafted; not linked until a Ship exists. |
| Sat 17 | Distribution, not sponsorship. Post Issue #1 where builders already argue about these tools (one relevant thread or community, not a blast). Point to `/issues/1` and the signup. | One real post live, link tracked by UTMs if the channel allows. |
| Sun 18 | Leave pioneer prices off the site. If anyone emails `shiporskip@mail.grokbot.com` about a slot, reply with the TBD reach disclaimer and "we'll talk at 200 subscribers," unless they want to be first in line with no guaranteed date. | Inbox rule written; no slot sold. |
| Mon 19 | Draft (do not send) 10 notes to makers of tools we might Ship. Offer a fair test, not a sponsorship. Sending waits on an explicit yes. | 10 drafts in `ops/outreach-drafts.md`. |
| Tue 20 | Read the segment count again. If real subscribers are still under 20, the rest of the week is distribution, not monetization mechanics. | Count recorded. |
| Wed 21 | Review. First dollar is either an affiliate conversion from Issue #2 or it is not coming this week. Do not invent a sponsor sale to hit the number. | Written recap: subscribers, affiliate shortlist, whether Issue #2 can carry a link. |

## What we will not do

- Quote a list size we don't have.
- Put affiliate links on Issue #1's free tools.
- Sell a pioneer slot under 200 real subscribers.
- Build a paid tier, a checkout, or a "founding" tier this week.
- Let a sponsor preview or edit a verdict.
