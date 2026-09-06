# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js + TypeScript on Vercel. Chosen by the user on 2026-09-05 because it is his daily stack and he must maintain the site for years. Tailwind for styling, CSS animations with a small IntersectionObserver hook and no animation library in v1, content as typed files with no CMS. Domain wilsondetorres.com is already owned (Cloudflare DNS) and currently redirects to his LinkedIn; the site replaces that redirect.

## Users

Primary: people who found Wilson De Torres on LinkedIn, GitHub, or YouTube and want to confirm he is real and good. Hiring managers and engineers at AI-focused companies, peers, occasional event organizers. They arrive with a name and want proof in under a minute.

Secondary: recruiters and hiring managers evaluating him for a next role, including international or remote senior AI engineering roles.

Tertiary and explicitly low priority for now: prospective clients for freelance or contract work. He is employed full-time; the site must not read as a freelancer's shop.

## Product Purpose

Personal portfolio and long-term brand home for Wilson De Torres, AI engineer at Thinking Machines Data Science, Makati, Philippines. Age 25, BS Computer Science magna cum laude, University of the Philippines Diliman, 2025.

It exists to prove his AI work is production-grade: deployed, used by real people, measured, and scoped against real business problems, as opposed to demo-only or "vibe-coded" work. Success: a visitor leaves convinced he can be trusted with a real system and remembers one line and one number. The brand must be extensible across a career; v1 is the foundation, not the finished story.

## Positioning

"A modern developer who works with frontier AI and has an actual engineering background." He understands business problems and solves them with AI products that integrate into real work. The credibility mechanism is public, linkable proof: Thinking Machines' published client stories with their numbers, live side projects, and a complete experience record. Rigor is shown, not claimed. Creator-style or resume-style portfolios cannot truthfully copy an enterprise delivery record.

## Operating Context

- Homepage plus an experience page (decided 2026-09-06; the v1 case-study "dossier" pages were removed the same day, see docs/superpowers/specs/2026-09-06-short-cut-design.md). No blog or notes section. Navigation must leave room to add one later without a redesign.
- Public engagements link to Thinking Machines' published stories at stories.thinkingmachin.es and are the only work featured on the homepage. Confidential engagements appear only as resume-level bullets on the experience page: no client names, no screenshots, no internal project names.
- Personal section ("after hours"): cinematography, video editing, color grading, some digital design. Past video-editing and camera-operator gigs are over; this is a hobby, not a service. Since 2026-09-06 the scene opens with his own line ("I also enjoy cinematography, color grading, and storytelling.") and runs six of his films as a reel: one plays in the frame, the rest wait in a rail that scrolls sideways, graded back until picked. Titles, years, and camera credits come from the uploads themselves.
- Contact channels: email detorres.wilson21@gmail.com, LinkedIn linkedin.com/in/wilsondetorres, GitHub wilsonDT, YouTube channel "Wilson De Torres".

## Capabilities and Constraints

- Homepage scope (2026-09-06): short, about four screens. Hero with a logo strip of every employer including internships, an About scene, two featured public engagements with one public figure each, side projects, after hours, and the contact block ("Say hi", renamed from "End credits" on 2026-09-06 for reading corny; "Connect" was rejected as LinkedIn boilerplate). Everything else is a bullet under the role on /experience. Refined the same day (docs/superpowers/specs/2026-09-06-quiet-cut-design.md): no section numbers or numbered slates, an About scene (paragraph, experience link, three resume figures) sits between the hero and Work, scenes open with a hairline and a serif title, cards are frame, title, one line, one number and a link, no arrow glyphs on links. Wilson found the numbered labels and arrows generic; do not reintroduce them. The nav (2026-09-06, docs/superpowers/specs/2026-09-06-frosted-nav-design.md) is a sticky bar that frosts once scrolled, hides on scroll down and returns on scroll up, and lights the current scene; frames break out to 960px while the text column stays at 620px. A sidebar and a bottom pill were considered and rejected.
- Featured and named: NST Apparel "Mr. Bot", a purchase-order assistant embedded in email. Teams CC the bot; it reads threads, follows up with suppliers, extracts quotations, invoices, and shipping documents via document intelligence, and surfaces only exceptions for human review. Azure, OpenAI models. Public metric: 350,000 automated workflow events. Wilson led delivery. Its document pipeline (from the resume, 2026-09-05) runs on Azure Databricks and PySpark: Microsoft Graph email ingestion, attachment deduplication, Azure Document Intelligence, OpenAI classification and field extraction, a detect-classify-extract architecture for multi-document PDFs. The public story does not mention Databricks, so publishing that detail is Wilson's call.
- Product he built, client instance by others: the reusable "AI simulation" training product behind OnePuhunan's "Pocket Branch Manager" (agentic roleplay personas, performance feedback agent, knowledge assistant, built on TM's Bento toolkit). The project team tailored it for OnePuhunan. Copy must credit the product, not the rollout, and it does: both mentions say he built the reusable simulator behind Pocket Branch Manager. The sentence that also disclaimed the rollout was cut on 2026-09-06 at Wilson's call, for reading as a demurral on his own portfolio. Public metrics from the story: officer confidence 3.8 to 4.2 out of 5; knowledge retrieval 16 minutes to 15.84 seconds.
- Anonymized private work, numbers allowed, names not:
  - Enterprise AI planning assistant: TypeScript/Next.js and Python, client-managed Azure via Terraform and AKS, PostgreSQL, Entra SSO, Key Vault, Application Insights, CI/CD; rollout coordinated across three client IT teams.
  - Voice agents and workforce-training systems (details private).
  - Evaluation of four foundation models across six language pairs: 315 errors analyzed, a 681-sample LoRA experiment, recommendation of a prompt-and-glossary architecture over fine-tuning.
  - Helped build the company's internal AI SDLC framework and AI-assisted engineering workflows. Proprietary: the site may say he helped build it and nothing more, no details, no numbers.
  - Aggregate figures from the resume: 7+ engagements, ₱1.8M projected annual client savings, 54% LLM token cost reduction on a production system.
- Not featured, by user decision: one other public engagement Wilson contributed to. Its "1,900+ frontline officers" figure must not appear on the site unless that work is added later.
- Side projects allowed on the site: Resume Roaster PH (live, resume-roaster-ph.vercel.app) and Rice leaf detection (live, rice-leaf-detection.vercel.app, tied to his thesis on Transformer architectures and inference efficiency for rice disease classification). Lendist and Moniq are excluded for now.
- Earlier roles for any timeline: Thinking Machines intern (Jun to Aug 2024) and contract ML engineer (Oct 2024 to Jan 2025) before full-time (Jan 2025 to present); Fit Senpai mobile developer, GenAI, React Native (Aug to Oct 2024); Diliman Learning Resource Center software engineer intern (Jun to Jul 2024); DOST-ASTI software engineer intern, Django and PostgreSQL sensor-data visualization (Jul to Sep 2023).
- Constraint: no paid AI or LLM features on the site in v1. No API bill, no chat-with-my-resume.
- Constraint: no blog or notes in v1.

## Brand Commitments

- Name: Wilson De Torres. Mark: WDT. Domain: wilsondetorres.com. Pronouns he/him.
- Positioning is global and remote (decided 2026-09-06): no city anywhere on the site, in page metadata, or on the OG cards. Employer locations on /experience are the employers' facts and stay.
- Voice: direct, short, funny, occasionally blunt in a Filipino way. No fluff, no buzzwords, no fake humility. Professional but not corporate. Cringe-sensitive: when in doubt, cut.
- Volunteered binding visual constraint, recorded without expansion: near-black #0a0a0a under one subtle full-page gradient (#0a0a0a to #050504 since 2026-09-06, when the key-art poster took over the lift the top used to carry; it was #121211 to #050504 before) with light grain; scene dividers share the page ground (settled 2026-09-06 after two review rounds: warm charcoal and a black dip both contrasted too hard), minimal, generous negative space, good animation and visuals. Narrow centered text column with wider break-out media frames. Warm paper is a possible future light mode, not in v1. "Film grammar, not film": cinema as design language, not a video hero. Clarified 2026-09-06: film means the cinematic aesthetic of type, layout, composition, and color grading, never the physical object. No perforations, negatives, orange masks, edge print, sprockets, reel or projector effects; they read old, not modern. A negative-strip hero was built and rejected the same day. Dislikes loud and generic.
- Hero: a title card whose stem holds and whose tail rolls. Wilson wrote it on 2026-09-06: "I build AI products" over "people trust.", "for real problems.", "that work in prod.", his LinkedIn line first and the one the OG card and the heading's name still carry. Stem and tail sit on their own lines because the roll's window is one fixed width and cannot be centred beside a stem. Invented taglines were rejected on 2026-09-05; only his sentences, cut down.

## Evidence on Hand

- Resume PDF: /Users/wilsondetorres/Downloads/Wilson_De_Torres_AI_Engineer_Resume.pdf (text extracted 2026-09-05).
- LinkedIn profile screenshots (About and Experience) shared in chat on 2026-09-05.
- Public stories: https://stories.thinkingmachin.es/nst-apparel-ai-purchase-order-automation/ and https://stories.thinkingmachin.es/onepuhunan-agentic-ai-training-microfinance/ (client quotes there may be cited with attribution).
- Live side projects: https://resume-roaster-ph.vercel.app and https://rice-leaf-detection.vercel.app
- Films, from his channel https://www.youtube.com/@wilson.detorres (all six are on the site): Bangkok (2026), Iloilo (2026), Bali (2026), Mount Ulap (2026), Sagada (2025), Manila Esplanade (2025).
- Published thesis record: https://tuklas.up.edu.ph/Record/UP-8027390931316398454 (supplied 2026-09-06; Tuklas sits behind a bot check, so the link is his, unverified by machine).
- Supplied 2026-09-06: the key-art still (an observation deck, Wilson small and turned away), shipped at public/key-art/observation-deck.jpg with its origin embedded; the 3840x2160 source stays outside the repo.
- Not yet supplied, do not fabricate: portrait or headshot for the site, graded stills for the featured engagements, digital design samples, descriptive copy for anonymized engagements beyond the resume bullets, testimonials.

## Product Principles

1. Evidence over adjectives: every claim carries a number, an artifact, or a link.
2. Redact names, never substance: private work keeps architecture and outcomes.
3. Engineer first, cinematographer second: personality supports credibility and never competes with it.
4. Short beats clever: if a line needs explaining, cut it.
5. Built to grow: v1 leaves room for writing and new work without a redesign.

## Accessibility & Inclusion

No client-mandated standard. Baseline commitments because the site is dark and animation-heavy: WCAG AA contrast on the dark palette, prefers-reduced-motion honored for all animation, full keyboard navigation, semantic HTML.
