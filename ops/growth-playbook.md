# Ship or Skip growth playbook

Researched 14 Oct 2026. Sources cited inline. Goal: first 100–1000 subscribers, then first revenue, with $0 spend until owner approves paid plays. List size today: 0 real subscribers. Site: https://shiporskip-ship-or-skip.vercel.app (no paid domain yet).

Impact = expected subscriber or $ lift. Effort = hours of work. Cost = money or paid accounts. Owner = needs Tagdyr's identity / card / account / payout info.

## Ranking (impact / effort, highest first)

| Rank | Play | Impact | Effort | Cost | Owner needed? | Notes |
|------|------|--------|--------|------|---------------|-------|
| 1 | Programmatic SEO pages (X vs Y, alternatives, best-of) | High (compounding search + GEO) | Med (we built 9) | $0 | No | Live. Expand weekly with more pairs. |
| 2 | Lead magnet quiz → signup | High (converts visitors) | Low (built) | $0 | No | Live at /quiz. |
| 3 | "Submit your tool" free + $99 priority | High (inbound + first $) | Low (built) | $0 now | Later for payments | Live. Payment processing needs owner. |
| 4 | Free directory / launch submissions | Med–High burst | Low–Med | $0–$50 | Some accounts | Product Hunt, DevHunt, Peerlist, Microlaunch free; Uneed/TAAFT often paid. |
| 5 | Tool-maker outreach (cold email) | Med | Med | $0 | No (can send from bot inbox once approved) | Use /submit. Makers want reviews. |
| 6 | Affiliate links on guides (not on verdicts) | Med recurring $ | Low after approval | $0 | **Yes** — identity + payout for each program | See affiliate table. Keep verdicts affiliate-free (current policy). |
| 7 | GEO hygiene (llms.txt, FAQ schema, cite sources, allow AI bots) | Med long-term | Low (done) | $0 | No | robots.txt allows GPTBot, OAI-SearchBot, PerplexityBot, etc. |
| 8 | Cross-promo: recommend others free (SparkLoop Upscribe earn-side) | Med | Med | $0 to recommend | **Yes** — SparkLoop account; Resend integration may need wiring | beehiiv Boosts requires switching ESP or dual-publishing. |
| 9 | Paid cross-promo (SparkLoop Partner / beehiiv Boosts grow-side) | High | Low once funded | **$100+/mo** | **Yes** — card + budget | Do NOT fund until list converts. |
| 10 | Short-form video (YouTube Shorts / TikTok) | High if consistent | High | $0 | **Yes** — accounts + face/voice or screen recordings | Clip Issue #1 failures. |
| 11 | Paid domain | Med brand | Low | ~$10–15/yr | **Yes** — card | e.g. shiporskip.ai / .com |
| 12 | Sponsored placements | Med–High $ | Low once list exists | $0 | No for pioneer outreach | /sponsor live; sell after ~500–1k subs. |
| 13 | Paid ads (X, Reddit, Google) | Variable | Med | **Money** | **Yes** | Skip until SEO+affiliates work. |

## (a) First 100–1000 subscribers — proven patterns

### Programmatic SEO
- Publish comparison / alternatives / "is X worth it" / best-of pages that answer the query in the first screen, with a comparison table, FAQ schema, and primary-source citations. This is the default growth engine for new review sites ([Ahrefs / SEO industry practice](https://ahrefs.com/blog/programmatic-seo/); we already shipped 9 pages).
- Keep expanding: every new Issue #N should spawn 1–2 SEO pages that link to the hands-on writeup.
- Mark researched vs tested clearly (we do) so trust compounds.

### GEO (get cited by ChatGPT / Perplexity)
- Be crawlable: allow `OAI-SearchBot`, `GPTBot`, `PerplexityBot` in robots.txt (done).
- Structure answers: question-style H1/H2, short answer first, stats + citations, FAQ schema ([GEO research summaries](https://www.launchscaler.com/blog/generative-engine-optimization-explained), [Kick Ads GEO 2026](https://www.kickads.co/en/generative-engine-optimization)).
- Maintain `llms.txt` and keep pages fresh (dateModified).
- Earn citations by being the page with receipts (our hands-on method), not just another roundup.

### Launch platforms (submit when ready)
| Platform | Cost (reported 2026) | URL / notes |
|----------|----------------------|-------------|
| Product Hunt | Free | https://www.producthunt.com — needs maker account, launch day |
| DevHunt | Free (boosted $19/$49) | https://devhunt.org |
| Peerlist Launchpad | Free | https://peerlist.io |
| Microlaunch | Free | https://microlaunch.net |
| Uneed | Free queue (slow) or ~$15–$30 fast-track | https://www.uneed.best |
| BetaList | Paid-only | https://betalist.com — pre-launch |
| There's An AI For That | Paid (~$49 launch / higher for permanent) | https://theresanaiforthat.com |
| Indie Hackers | Free | https://www.indiehackers.com |

Sources: [DevHunt PH alternatives](https://devhunt.org/product-hunt-alternatives), [Uneed help](https://help.uneed.best/getting-started/how-to-submit-your-first-product), [LaunchBeam directories](https://launchbeam.ai/blog/startup-launch-directories-lead-time-and-cost).

### Newsletter cross-promo
- **SparkLoop Upscribe**: recommend other newsletters after signup for free (or earn CPA ~$2–$7 when recommending paid Partner Programs). Partner Programs to *buy* subscribers start at **$100/mo**. Works with many ESPs; Substack/Ghost limited. ([SparkLoop pricing](https://help.sparkloop.app/en/articles/9184574-the-ultimate-guide-to-sparkloop-features-pricing), [Upscribe](https://sparkloop.app/upscribe)).
- **beehiiv Boosts**: native marketplace; pay CPA for verified engaged subs; beehiiv takes ~20%. Requires being on beehiiv (or migrating). ([Boosts guide](https://www.beehiiv.com/blog/experts-guide-boosts)).
- **Resend**: we already send from Resend. SparkLoop is the Resend-compatible path; beehiiv Boosts would mean ESP change or dual publish. **Owner decision.**
- **Refind / similar**: check current partnership terms before joining; treat as secondary.

### Free tools / lead magnets
- Live: `/quiz` "Which AI coding agent fits you?" → signup CTA.
- Next ideas (no cost): printable scoring rubric PDF, "AI tool credit calculator" (credits vs tokens), embeddable scoreboard widget.

### Short-form video
- Clip Issue #1 failures (Garuda snake, Ruflo) into 20–40s Shorts / TikTok / X video.
- Needs accounts + consistent posting. Owner for brand accounts if not already set (@ShiporSkipai handled separately).

### Tool-maker outreach
- Email makers of new AI tools: "We hands-on test for free; priority review $99." Point to `/submit`.
- Makers want distribution; we want content + later affiliates/sponsors.

## (b) First revenue

1. **$99 priority reviews** (live) — first cash without payment infra (mailto booking). Add Stripe later (owner).
2. **Affiliates on guides** — disclose; never on Ship/Skip verdicts (policy). Apply to programs below.
3. **Sponsored placements** — `/sponsor` pioneer rates once list has real readers.
4. **Paid directory listings of our own site** — only after free channels work.

## Affiliate programs to apply for

**Owner must apply** (legal name, tax/payout, often website review). Do not invent commission rates; verify on signup.

| Product | Rate (as of check date) | Signup / info URL | Notes |
|---------|-------------------------|-------------------|-------|
| Lovable (affiliates) | Up to **$100** per first-time subscriber | https://lovable.dev/partners/affiliates | Official. Separate Expert partner track: ~10% on Business ([partner portal](https://partner-tools.lovable.app/), [blog](https://lovable.dev/blog/introducing-lovable-partner-program)). |
| Bolt.new | **15%** of paid sub, capped **$50**/referral (via Cello) | https://support.bolt.new/external-resources/referral-program | Cash referral. |
| ElevenLabs | **22%** for 12 months on Starter–Scale; **11%** Business | https://elevenlabs.io/affiliates · terms https://elevenlabs.io/affiliates-terms | Via PartnerStack. No enterprise commission. |
| Jasper | **25%** for 12 months (up to **30%** at volume) | https://www.jasper.ai/legal/affiliates | Business plans excluded. |
| DigitalOcean | **10%** of monthly spend for 12 months | https://www.digitalocean.com/affiliates | Strong fit for hosting mentions. |
| Railway | **15%** of invoices for 12 months | https://railway.com/affiliate-program | Cash or credits; $20 credit for referee. |
| Hostinger | Affiliate from **~40%** (volume-tiered); separate referral **20%** | https://www.hostinger.com/affiliates · https://www.hostinger.com/referral-program | Confirm which program fits a newsletter. |
| v0 by Vercel | Reported **$5/lead + 30%** of Premium/Team for 6 months via Dub | Third-party listing: https://www.affiliateotter.com/affiliate-programs/v0-by-vercel | **Verify live signup** — OpenAffiliate noted status unclear / 404 on 12 Oct 2026 ([openaffiliate](https://openaffiliate.dev/programs/vercel)). |
| Replit | **$20 credits** each (not cash) | https://replit.com/refer | Credits only — low revenue priority. |
| Cursor | **No cash affiliate**; referral program **closed 23 Jul 2026** | Forum: https://forum.cursor.com/t/question-about-the-referral-program/167032 | Community listings of 20% are **unverified / outdated**. Do not promote as affiliate. |
| Windsurf | No verified published program | — | Skip until official. |
| Notion | Up to **$50 + 20%** year-one — **not accepting new affiliates** | https://www.notion.com/affiliates | Waitlist / closed. |
| Vercel hosting | Prefer DigitalOcean/Railway/Hostinger for cash; Vercel itself unclear | — | |

## What we already shipped (this sprint)

- `/submit` — free queue + $99 priority (mailto)
- `/quiz` — interactive agent-fit quiz → signup
- `/guides` + 9 SEO pages under `/compare`, `/alternatives`, `/best`
- sitemap + llms.txt updated; AI bots allowed in robots.txt
- Nav links: Guides, Quiz, Submit a tool

## Top 5 next actions

1. **Owner: apply to affiliate programs** (Lovable, Bolt, ElevenLabs, DigitalOcean, Railway, Jasper, Hostinger) with legal/payout info. Then we add disclosed affiliate links on guide pages only.
2. **Owner: create accounts** for Product Hunt, DevHunt, Peerlist, Microlaunch, Indie Hackers; we draft launch posts.
3. **Owner: decide SparkLoop** (free recommend-side first) vs staying Resend-only; card only if funding Partner Program later.
4. **Midas (no owner): cold-email 20 tool makers** pointing at `/submit`; draft Shorts scripts from Issue #1 clips (owner posts).
5. **Owner: buy domain + Stripe** when first priority-review or affiliate $ arrives — not before.

## Hard rules

- Do not spend money or sign contracts without owner.
- Do not put affiliate links inside Ship/Skip verdicts.
- Do not invent subscriber counts or test results.
