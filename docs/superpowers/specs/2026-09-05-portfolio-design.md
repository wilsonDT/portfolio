# Portfolio v1: Design Spec

Date: 2026-09-05
Owner: Wilson De Torres
Status: draft for review
Product truth lives in `PRODUCT.md`. This document covers the surface: what v1 of wilsondetorres.com is, how it looks, how it moves, how it's built, and how we know it's done.

## 1. Summary

A personal portfolio for an AI engineer whose work is production-grade, structured like a documentary cut. One index page of "scenes" separated by hard cuts to black, plus one dossier page per engagement laid out as evidence: problem, constraint, architecture, numbers, what I'd change. Warm charcoal ground, narrow text column, letterboxed frames that break out wider than the text, serif titles, mono slates. Film grammar as design language, no video hero.

Goals, in priority order: credibility and a brand that can grow for a career, then hiring, then clients (low priority). Success: a visitor leaves convinced Wilson can be trusted with a real system and remembers one line and one number.

## 2. Decisions already made

| Topic | Decision |
|---|---|
| Direction | "The Cut" spine with "Dossier" rigor on case-study pages |
| Cinema level | Film grammar, not film. No video hero. Videos only in After hours |
| Hero framing | Title card (option A), rebuilt in a narrow column |
| Layout | 620px text column, media frames break out to 800px |
| Ground | Near-black `#0a0a0a` under one subtle full-page gradient. Scene dividers share the page ground. Warm paper is a possible future light theme, not v1 |
| Type | EB Garamond titles and big numbers, Geist body and UI, JetBrains Mono slates. No italics |
| Documentary devices | Lower-third name card, subtitles inside frames, archival captions on frames |
| Redaction | Black bars over confidential client names |
| Reveals | Wipe: clip-path left to right, bars close in, still fades up. One easing curve |
| Page transitions | Hard cut to black, about 120ms |
| Writing section | Not in v1. Navigation leaves room for `/notes` |
| AI features | None. No API bill, no chat |
| Stack | Next.js App Router, TypeScript, Tailwind, Vercel. No animation library, no MDX, no CMS |
| Brand | Wilson De Torres, mark WDT, domain wilsondetorres.com (owned, currently redirects to LinkedIn) |
| Copy rule | Wilson's own sentences, cut down. No invented taglines |

## 3. Information architecture

### Routes

- `/` the index, one page of scenes.
- `/work/[slug]` one dossier per engagement. Slugs: `mr-bot`, `training-simulator`, `planning-assistant`, `model-evaluation`.
- `/not-found` custom 404. Copy: "Scene missing." plus a link back to the index.
- Reserved, not built: `/notes`.

### Index scenes

Each scene is a section in the 620px column. Between scenes, a 220px band in the page ground carrying the next scene's slate label in mono, centered. The cut is the pause and the label, not a colour change.

- **00 Cold open.** Slate `00 / Cold open` top-left of the column. Serif hero line (Wilson's words). One sub sentence in Geist light. Lower-third name card: name in Geist medium, role line in mono, a 2px rule on the left. Nav sits above: WDT mark and name left, `Work · After hours · Contact` in mono right. Nav links scroll to scenes.
- **01 Work.** Two featured cards, stacked: each is a break-out letterboxed still (2.39:1) with archival caption top-left and a subtitle line bottom-center, then a slate row (index, client, industry, year) and a row with serif title left and one big number right. Below, a list of compact rows for the private work: slate with a black bar where the client name would be, serif title, one-line deck, one number where allowed. Featured cards and rows link to dossiers. Then two mention rows with no page: voice agents ("details private") and the AI SDLC framework ("helped build Thinking Machines' internal AI development framework, details proprietary").
- **02 Side quests.** Two rows: Resume Roaster PH and Rice leaf detection. Title, one line, live link. Rice leaf detection carries the thesis line.
- **03 After hours.** Two or three YouTube videos in 16:9 frames with 14px black bars top and bottom, archival caption (place, year), title as subtitle. Thumbnail facade; the YouTube iframe loads only on click, from `youtube-nocookie.com`. One short line above in Wilson's words about the hobby.
- **04 End credits.** Email with copy-to-clipboard and visible address, LinkedIn, GitHub, YouTube. Mono footer line: `wilsondetorres.com · v1 · Makati`.

### Dossier template

Same for all four, depth varies.

1. Nav: WDT mark left, `← Index` right.
2. Slate row: `NN / Work` left; client, industry, year right. Confidential clients render a black bar in place of the name.
3. Serif title, then a one-sentence deck in Geist light at 19px.
4. Spec sheet: mono keys, Geist values, three columns on desktop, two on mobile. Keys: Role, Stack, Scale, Client, Status, Public story (link, when one exists).
5. Break-out frame (2.39:1) with archival caption. A graded frame grab from Wilson's own footage or an abstract still. Never a client screenshot.
6. Body with a scene index: on viewports 1100px and wider, a sticky mono list in the left margin (01 Problem through 05 What I'd change) that highlights the section in view. Below 1100px it renders as a horizontal mono list above the body.
7. Sections, each with a mono number and a serif heading at 22px: Problem, Constraint, Architecture, Numbers, What I'd change.
8. Architecture is a diagram of HTML nodes inside a break-out panel: mono labels, a small uppercase kind label on each node (Input, Reasoning, Extraction, Routine, Exception, and so on), arrows between them, a one-line mono note under the flow. On mobile the flow stacks vertically.
9. Numbers is a three-column grid of serif figures with Geist labels, followed by a mono source line. Only published or resume-stated numbers, each with its source.
10. What I'd change is prose Wilson writes. Two or three sentences, no spin.
11. A hairline and `Next → NN / Title` linking to the next dossier in order, wrapping to the first.

## 4. Visual system

### Tokens

| Token | Value | Use |
|---|---|---|
| `--ground` | `#0a0a0a` | page background, under one subtle full-page gradient `#121211` to `#050504` (settled after review; warm charcoal and black dip bands both contrasted too hard) |
| `--ink` | `#ecebe6` | primary text |
| `--mute` | `#8f8e89` | secondary text, slates, captions (5.5:1 on ground, passes AA) |
| `--line` | `#2a2a28` | hairlines |
| `--line-2` | `#3a3a37` | borders on marks and nodes |
| `--panel` | `#121211` | diagram panel background |
| `--black` | `#000000` | letterbox bars, redaction bars, cut bands, cut overlay. Nowhere else |

All tokens are CSS custom properties on `:root` so a second theme (warm paper) can be added later by redefining them.

### Type

- Titles, dossier headings, big numbers: EB Garamond 400. Hero 52 to 56px desktop, 36px mobile. Dossier title 58px desktop, 40px mobile. Tracking `-0.008em`. Never italic.
- Body and UI: Geist. Body 15.5px light (300) with 1.6 line height, max 60ch. UI labels 13px regular.
- Slates, captions, keys, footer: JetBrains Mono 11px, uppercase, `0.06em` tracking, `--mute`.
- Loaded through `next/font/google` as `EB_Garamond`, `Geist`, `JetBrains_Mono` with `display: swap`, exposed as `--font-serif`, `--font-sans`, `--font-mono`.

### Layout

- Text column: `width: min(620px, 86%)`, centered.
- Break-out: `width: min(800px, 96%)`, centered. Frames, diagram panels, and featured stills use it.
- Vertical rhythm: 56px between dossier sections, 72px above the body, 88px above the hero slate.
- Cut bands are full viewport width.

### Frames

- Work stills: 2.39:1, black bars 14px top and bottom, image `object-fit: cover`. Source images are Wilson's graded frame grabs exported at 1600px wide, served through `next/image` as AVIF/WebP with a blurred placeholder. Until supplied, a graded radial gradient stands in.
- After-hours videos: 16:9 with the same 14px bars, so the player is never cropped.
- Archival caption: mono, top-left, 14px inset, `#bdbdbd`. Format `Place · Year · Ratio`.
- Subtitle: Geist 15px, centered, 22px from the bottom, white with a 35 percent black backing band and a 1px text shadow. Used for quotes and one-liners. Quotes on dossiers only from the public stories, attributed.

### Documentary devices

- Lower third: name Geist 13.5px medium, role line mono 10.5px uppercase, 2px `--ink` rule on the left, 12px padding.
- Frame subtitles and archival captions as above.
- Slates everywhere a section starts: `NN / Name`.

### Redaction

- Confidential client names render as a fixed-width black bar (about 9ch) so name length never leaks, with `aria-label="Client name withheld"`. The dossier header adds a mono line: "Client under NDA. Architecture and numbers are real."

### Grain

- One noise layer over the whole page: an inline SVG `feTurbulence` tile with alpha baked in, applied as a body background image on top of the ground color. No blend mode and no fixed overlay element, so scrolling stays cheap. Visual weight about 14 percent. Stills get their own grain at about 22 percent inside the frame.

## 5. Motion

One easing curve for everything that reveals: `cubic-bezier(.77, 0, .18, 1)`.

### Reveal (content entering view)

- Text blocks: `clip-path: inset(0 100% 0 0)` to `inset(0)`, 520ms.
- Frames: bars `scaleY(0)` to `1` from their outer edges, 360ms; still fades 0 to 1 over 400ms starting 200ms in.
- Stagger: 80ms per sibling via a `--i` custom property.
- Trigger: IntersectionObserver, threshold 0.2, fires once, then disconnects. Implemented as one small hook and one `data-reveal` attribute; no library.
- Progressive: content is visible by default. The hidden start state applies only when `html` carries a `js` class set before hydration, so no-JS and failed-JS visitors see everything.

### Cut (route change)

- `app/template.tsx` renders a full-viewport `--black` overlay above the page on every mount, held for 120ms with `steps(1, end)`, then removed. Because templates remount per navigation, every route change cuts to black. The initial load cuts too; that is intended.

### Hover and focus

- Cards: still brightens 8 percent, subtitle fades in, 200ms. On touch devices the subtitle is always visible.
- Links: underline offset animates in, 150ms. Focus rings are 2px `--ink` with 3px offset, always visible on keyboard focus.

### Reduced motion

- `@media (prefers-reduced-motion: reduce)`: every animation and transition is disabled, clip-paths removed, the cut overlay never renders. No exceptions.

## 6. Content model

Typed TypeScript objects, one file per dossier in `content/work/`, plus `content/after-hours.ts` and `content/site.ts`. No MDX, no CMS. Adding a dossier means adding a file and one entry to the ordered list in `content/work/index.ts`.

```ts
export type Dossier = {
  slug: string;              // "mr-bot"
  index: string;             // "01"
  title: string;             // "Mr. Bot"
  deck: string;              // one sentence
  client: { name: string; redacted: boolean; industry: string; region: string };
  year: string;
  role: string;
  stack: string[];
  scale: string;
  status: string;
  publicUrl?: string;
  frame: { src: string | null; caption: string; subtitle?: string };
  problem: string[];         // paragraphs
  constraint: string[];
  architecture: {
    intro: string;
    nodes: { kind: string; text: string }[];   // rendered left to right
    branches?: { kind: string; text: string }[]; // optional final split
    note: string;
  };
  numbers: { value: string; label: string; source: string }[];
  whatIdChange: string[];    // Wilson writes; may start as a draft
  featured: boolean;
};
```

### Dossier inventory

| # | Slug | Named? | Sources | Depth |
|---|---|---|---|---|
| 01 | `mr-bot` | Yes, NST Apparel | Public story. Resume pipeline details only if Wilson opts in (see open decisions) | Full |
| 02 | `training-simulator` | Product is Wilson's; OnePuhunan is the public client instance built by the project team | Public OnePuhunan story, attributed as the client instance | Full. Copy credits the product, not the rollout |
| 03 | `planning-assistant` | No, redacted | Resume bullet | Short |
| 04 | `model-evaluation` | No, redacted | Resume bullet | Short |

Mentions without pages: voice agents, AI SDLC framework.

Excluded by decision: one other public engagement and its 1,900 figure, Lendist, Moniq.

### Banned strings

The build check fails if any of these appear anywhere under `content/`: `1,900`, `1900`. The marker `[DRAFT]` is banned in production builds only. It also fails if a dossier with `client.redacted: true` has a `client.name` other than `Confidential client`.

## 7. Components

- `SiteNav` (mark, name, scene links or back link)
- `Slate` (mono `NN / Name` row with optional right side)
- `CutBand` (full-width black band with slate)
- `LowerThird`
- `Frame` (letterbox wrapper: ratio, bars, caption, subtitle, grain, reveal)
- `Still` (image inside a Frame, with gradient fallback)
- `VideoFacade` (thumbnail, play, swaps to nocookie iframe)
- `Redacted` (black bar with aria-label)
- `DossierCard` (featured) and `DossierRow` (compact)
- `SpecSheet`
- `SceneIndex` (sticky margin list, collapses on narrow viewports)
- `ArchitectureFlow` (nodes, arrows, branches, stacks on mobile)
- `Numbers`
- `Reveal` hook plus a `data-reveal` convention
- `CutOverlay` inside `app/template.tsx`
- `CopyEmail`

## 8. Stack and dependencies

- Next.js (latest stable, App Router), React, TypeScript strict.
- Tailwind CSS for utilities; design tokens as CSS variables in `app/globals.css`.
- `next/font/google`, `next/image`, `next/og` for the Open Graph image.
- Optional: `@vercel/analytics` (see open decisions).
- Not in v1: Motion or any animation library, MDX, a CMS, three.js, a form backend.

## 9. Meta and SEO

- Title `Wilson De Torres — AI Engineer`, per-dossier `Title · Wilson De Torres`.
- Description from Wilson's hero sub line.
- Open Graph image rendered with `next/og`: charcoal ground, mono slate top-left, serif name or dossier title, mono footer. One default, one per dossier.
- `sitemap.xml` and `robots.txt` generated by Next.js conventions. Canonical URLs on the apex domain.
- Favicon: the WDT mark in mono on charcoal, SVG plus a 32px PNG fallback.

## 10. Accessibility and performance

- Semantic landmarks, one `h1` per page, skip link to main.
- Contrast: `--ink` and `--mute` on `--ground` both pass WCAG AA for normal text. Subtitle text over stills sits on the backing band.
- Keyboard: everything reachable, visible focus, the scene index and cards are real links.
- Motion respects reduced-motion (section 5).
- Images: `next/image`, explicit sizes, AVIF/WebP, lazy below the fold. Video never loads without a click.
- Targets: Lighthouse 95 or better in all four categories on `/` and `/work/mr-bot`, mobile preset. Cumulative layout shift under 0.05.

## 11. The one check

`scripts/check-content.ts`, run as `prebuild`. It imports the content modules and fails the build when:

- any dossier is missing a non-empty `problem`, `constraint`, `architecture.nodes`, or `numbers`;
- for production builds only (`VERCEL_ENV=production`): any dossier with an empty `whatIdChange`, or any content string containing the draft marker `[DRAFT]`. Preview builds print these as warnings so work-in-progress can still deploy;
- any number entry lacks a `source`;
- any banned string (section 6) appears in any content string;
- any redacted dossier has a real-looking client name.

Run with Node's native TypeScript type stripping (Node 22.18 or newer). If the installed Node is older, use `tsx` as a dev dependency.

## 12. Deployment and DNS

1. Vercel project connected to GitHub `wilsonDT/portfolio` (always the wilsonDT account, never tm-wilson). Preview deploys on branches, production on `main`.
2. Add `wilsondetorres.com` and `www.wilsondetorres.com` in the Vercel project. Vercel provisions TLS.
3. In Cloudflare, Wilson removes the redirect rule that sends the apex to LinkedIn, then sets the apex `A` record and the `www` `CNAME` exactly as the Vercel domain panel shows them (today `76.76.21.21` and `cname.vercel-dns.com`), both DNS-only (proxy off), so Vercel handles TLS and caching alone.
4. `www` redirects to the apex in `next.config` redirects. Verify `http`, `https`, apex, and `www` all land on the index.

## 13. What only Wilson supplies

- Hero line and sub line in his words. Placeholder until then: his LinkedIn sentence "I build AI products people trust."
- A "what I'd change" paragraph for each of the four dossiers.
- Two to three graded frame grabs (2.39:1, 1600px wide) for the featured stills and dossier frames.
- YouTube video IDs for After hours, plus one short line about the hobby.
- A name for the training simulator product, or approval of "Training simulator" as the working title.
- Confirmation on the open decisions below.

## 14. Open decisions and defaults

| Decision | Default if unanswered |
|---|---|
| Mr. Bot architecture depth: public story only, or include resume-level pipeline details (Databricks, PySpark, Graph ingestion, dedup, detect-classify-extract) | Public story only |
| Vercel Analytics | Include (free, cookieless, one component) |
| Portrait on the site | None |
| Voice agents mention row | Include, one line, no page |
| AI SDLC framework mention | One line, no numbers, no details |
| Number of After-hours videos | Two |

## 15. Out of scope for v1

Notes or blog, light theme, AI chat or any LLM feature, contact form, CMS, testimonials collection, i18n, Lendist and Moniq, material from the excluded engagement.

## 16. Verification before calling v1 done

- `npm run build` passes, including the content check.
- Lighthouse mobile on `/` and `/work/mr-bot`: 95 or better across the board.
- Manual: 375px viewport, keyboard-only pass, reduced-motion pass, JavaScript disabled shows all content, every external link resolves, `www` and `http` redirect correctly.
- Content: no placeholder text left except sections Wilson has explicitly deferred, and the site never says a number without a source line.
