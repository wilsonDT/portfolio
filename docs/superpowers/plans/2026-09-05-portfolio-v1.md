# Portfolio v1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship v1 of wilsondetorres.com: a documentary-cut index page and four dossier pages, built to the approved spec, on Vercel.

**Architecture:** Next.js App Router with static generation. Content is typed TypeScript objects in `content/`; pages render them through a small set of components. Motion is CSS (clip-path wipes, a cut-to-black overlay) driven by one IntersectionObserver hook. A prebuild script validates content and bans forbidden strings.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, `next/font`, `next/image`, `next/og`, `tsx` (dev only), Vercel.

**Spec:** `docs/superpowers/specs/2026-09-05-portfolio-design.md`. Product truth: `PRODUCT.md`. Direction contract: impeccable surface brief for `app/page.tsx`.

## Global Constraints

- Ground `#171716`, ink `#ecebe6`, mute `#8f8e89`, line `#2a2a28`, line-2 `#3a3a37`, panel `#0f0f0e`. Pure `#000` only for letterbox bars, redaction bars, cut bands, and the cut overlay.
- Type: EB Garamond (titles, big numbers, never italic), Geist (body, UI), JetBrains Mono (slates, captions, keys; uppercase, `0.06em` tracking).
- Text column `min(620px, 86%)`, break-out `min(800px, 96%)`. Work stills 2.39:1; after-hours videos 16:9. Bars 14px.
- One easing curve for reveals: `cubic-bezier(.77, 0, .18, 1)`. Reveals under 600ms, stagger 80ms, play once. Route change cuts to black for 120ms. Reduced motion disables everything.
- Wipes apply to slates, titles, and frames only. Body prose renders static (impeccable craft floor: one authored motion, not an identical entrance on every element).
- Copy is Wilson's own sentences. No invented taglines. Placeholder hero line until he supplies one: "I build AI products people trust." Draft copy carries the literal marker `[DRAFT]`.
- Banned anywhere under `content/`: `1,900`, `1900`. `[DRAFT]` banned in production builds only.
- No animation library, no MDX, no CMS, no LLM features, no contact form.
- No Unicode glyphs as icons. Arrows are inline SVG or omitted.
- Grain is a tiled raster texture, not `feTurbulence` (craft floor).
- Content visible by default; hidden reveal states apply only under `html.js`.
- Commit at the end of every task on branch `v1`. Never on `main`. Use the wilsonDT GitHub account.
- Tests: ponytail rules apply. One runnable check (`scripts/check-content.ts`), plus `npm run build` and `tsc --noEmit` as the gate for every task. No component test suites.

---

## File structure

```
app/
  layout.tsx            fonts, html.js script, metadata base, grain body, skip link
  template.tsx          cut overlay + RevealObserver, remounts per navigation
  globals.css           tokens, base type, reveal + cut keyframes, browser surfaces
  page.tsx              index: scenes 00-04
  not-found.tsx         "Scene missing."
  icon.svg              WDT favicon
  opengraph-image.tsx   default OG card
  sitemap.ts, robots.ts
  work/[slug]/page.tsx  dossier
  work/[slug]/opengraph-image.tsx
components/
  SiteNav.tsx  Slate.tsx  CutBand.tsx  LowerThird.tsx  Frame.tsx  Still.tsx
  VideoFacade.tsx (client)  Redacted.tsx  DossierCard.tsx  DossierRow.tsx
  SpecSheet.tsx  SceneIndex.tsx (client)  ArchitectureFlow.tsx  Numbers.tsx
  CopyEmail.tsx (client)  RevealObserver.tsx (client)  Arrow.tsx
content/
  types.ts  site.ts  after-hours.ts
  work/index.ts  work/mr-bot.ts  work/training-simulator.ts
  work/planning-assistant.ts  work/model-evaluation.ts
scripts/check-content.ts
public/grain.png        256x256 tiled grain, generated once (Task 1)
public/stills/          Wilson's frame grabs (later)
next.config.ts  package.json
```

---

### Task 1: Scaffold, tokens, fonts, layout

**Files:**
- Create: Next.js scaffold via `create-next-app` (TypeScript, Tailwind, App Router, no `src/`, `@/*` alias, npm)
- Modify: `app/globals.css`, `app/layout.tsx`, `package.json`
- Create: `public/grain.png`
- Delete: scaffold boilerplate (`app/page.tsx` content, `public/*.svg`)

**Interfaces:**
- Produces: CSS custom properties `--ground --ink --mute --line --line-2 --panel --black`, font variables `--font-serif --font-sans --font-mono`, utility classes `.col .wide .mono .serif`, `html.js` class set before hydration.

- [ ] **Step 1: Branch and scaffold**

```bash
git checkout -b v1
cd "$SCRATCH" && npx create-next-app@latest scaffold --ts --tailwind --eslint --app --no-src-dir --import-alias "@/*" --use-npm --skip-install --yes
rsync -a --exclude .git --exclude README.md --exclude node_modules "$SCRATCH/scaffold/" /Users/wilsondetorres/Projects/portfolio/
npm install
```

- [ ] **Step 2: Generate the grain tile**

A 256x256 PNG of monochrome noise at low alpha, made once with `sips` or a 20-line Node script using raw PNG encoding is overkill; use ImageMagick if present, else generate an SVG-free PNG via a tiny script with `zlib` and manual PNG chunks. Acceptable fallback for Task 1: a CSS-only placeholder (no grain) with a `// ponytail:` note, and the PNG lands in Task 6 polish. Do not use `feTurbulence`.

- [ ] **Step 3: Write `app/globals.css`**

```css
@import "tailwindcss";

:root {
  --ground: #171716; --ink: #ecebe6; --mute: #8f8e89;
  --line: #2a2a28; --line-2: #3a3a37; --panel: #0f0f0e; --black: #000;
  --ease: cubic-bezier(.77, 0, .18, 1);
  color-scheme: dark;
}

html { background: var(--ground); }
body {
  background: url("/grain.png") repeat, var(--ground);
  color: var(--ink);
  font-family: var(--font-sans), system-ui, sans-serif;
  font-weight: 300; font-size: 15.5px; line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
::selection { background: var(--ink); color: var(--ground); }
:focus-visible { outline: 2px solid var(--ink); outline-offset: 3px; }
a { color: inherit; text-decoration: underline; text-decoration-color: var(--line-2); text-underline-offset: .18em; transition: text-decoration-color .15s; }
a:hover { text-decoration-color: var(--ink); }
* { scrollbar-color: var(--line-2) var(--ground); }

.col  { width: min(620px, 86%); margin-inline: auto; }
.wide { width: min(800px, 96%); margin-inline: auto; }
.serif { font-family: var(--font-serif), Georgia, serif; font-weight: 400; letter-spacing: -.008em; }
.mono  { font-family: var(--font-mono), ui-monospace, monospace; font-size: 11px; letter-spacing: .06em; text-transform: uppercase; color: var(--mute); }
.hair { height: 1px; background: var(--line); }

/* Reveal: hidden start state only when JS is present */
html.js [data-reveal] { clip-path: inset(0 100% 0 0); }
html.js [data-reveal].in { animation: wipe .52s var(--ease) forwards; animation-delay: calc(var(--i, 0) * 80ms); }
@keyframes wipe { to { clip-path: inset(0 0 0 0); } }

html.js [data-reveal-frame] .bar { transform: scaleY(0); }
html.js [data-reveal-frame] .bar.top { transform-origin: top; }
html.js [data-reveal-frame] .bar.bot { transform-origin: bottom; }
html.js [data-reveal-frame] .still { opacity: 0; }
html.js [data-reveal-frame].in .bar { animation: bars .36s var(--ease) forwards; }
html.js [data-reveal-frame].in .still { animation: fade .4s ease-out .2s forwards; }
@keyframes bars { to { transform: scaleY(1); } }
@keyframes fade { to { opacity: 1; } }

/* Cut to black on route change */
.cut { position: fixed; inset: 0; background: var(--black); z-index: 50; pointer-events: none; animation: cut .12s steps(1, end) forwards; }
@keyframes cut { to { opacity: 0; visibility: hidden; } }

@media (prefers-reduced-motion: reduce) {
  html.js [data-reveal], html.js [data-reveal-frame] .bar, html.js [data-reveal-frame] .still { clip-path: none; transform: none; opacity: 1; animation: none; }
  .cut { display: none; }
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
```

- [ ] **Step 4: Write `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { EB_Garamond, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const serif = EB_Garamond({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-serif", display: "swap" });
const sans = Geist({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://wilsondetorres.com"),
  title: { default: "Wilson De Torres — AI Engineer", template: "%s · Wilson De Torres" },
  description: "AI engineer at Thinking Machines, Makati. Enterprise AI systems in production.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-[var(--ink)] focus:text-[var(--ground)] focus:px-3 focus:py-2">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Gate and commit**

Run: `npx tsc --noEmit && npm run build`
Expected: build succeeds, one static route.

```bash
git add -A && git commit -m "feat: scaffold Next.js app with tokens, fonts, and reveal/cut CSS"
```

---

### Task 2: Content model, content files, and the check

**Files:**
- Create: `content/types.ts`, `content/site.ts`, `content/after-hours.ts`, `content/work/index.ts`, `content/work/mr-bot.ts`, `content/work/training-simulator.ts`, `content/work/planning-assistant.ts`, `content/work/model-evaluation.ts`, `scripts/check-content.ts`
- Modify: `package.json` (add `tsx` dev dep, `"prebuild": "tsx scripts/check-content.ts"`, `"check": "tsx scripts/check-content.ts"`)

**Interfaces:**
- Produces: `Dossier` type (spec §6, plus `featured: boolean` and `nextSlug` derived by index), `dossiers: Dossier[]` ordered, `getDossier(slug)`, `site` `{ name, mark, role, org, place, email, links: {label, href}[] }`, `afterHours: { intro: string; videos: { id: string; title: string; place: string; year: string }[] }`.

- [ ] **Step 1: Write `content/types.ts`** exactly as spec §6 with `kind` values documented: `input | reasoning | extraction | routine | exception | data | output`.

- [ ] **Step 2: Write the four dossiers**

Sources and rules: `mr-bot` from the public NST story only (spec §14 default), `training-simulator` from the public OnePuhunan story with copy crediting the product and naming OnePuhunan as the client instance, `planning-assistant` and `model-evaluation` from the resume bullets in `PRODUCT.md`, `client.redacted: true`, `client.name: "Confidential client"`. Every `numbers[]` entry has a `source` string naming the story URL or "Resume, 2026". `whatIdChange` starts as one paragraph beginning with `[DRAFT]`. No banned strings.

- [ ] **Step 3: Write `scripts/check-content.ts`**

```ts
import { dossiers } from "../content/work/index";
import { afterHours } from "../content/after-hours";
import { site } from "../content/site";

const BANNED = ["1,900", "1900"];
const PROD = process.env.VERCEL_ENV === "production";
const fails: string[] = [];
const warns: string[] = [];

function walk(v: unknown, path: string) {
  if (typeof v === "string") {
    for (const b of BANNED) if (v.includes(b)) fails.push(`${path}: banned "${b}"`);
    if (v.includes("[DRAFT]")) (PROD ? fails : warns).push(`${path}: draft marker`);
  } else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${path}[${i}]`));
  else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) walk(x, `${path}.${k}`);
}

for (const d of dossiers) {
  const p = `work/${d.slug}`;
  if (!d.problem.length) fails.push(`${p}: problem empty`);
  if (!d.constraint.length) fails.push(`${p}: constraint empty`);
  if (!d.architecture.nodes.length) fails.push(`${p}: architecture.nodes empty`);
  if (!d.numbers.length) fails.push(`${p}: numbers empty`);
  if (!d.whatIdChange.length) (PROD ? fails : warns).push(`${p}: whatIdChange empty`);
  for (const n of d.numbers) if (!n.source) fails.push(`${p}: number "${n.value}" has no source`);
  if (d.client.redacted && d.client.name !== "Confidential client") fails.push(`${p}: redacted dossier names a client`);
  walk(d, p);
}
walk(afterHours, "after-hours");
walk(site, "site");

for (const w of warns) console.warn("warn:", w);
if (fails.length) { for (const f of fails) console.error("fail:", f); process.exit(1); }
console.log(`content ok: ${dossiers.length} dossiers, ${warns.length} warnings`);
```

- [ ] **Step 4: Prove the check fails**

Temporarily add `"1,900"` to any dossier string. Run: `npm run check`
Expected: `fail: work/...: banned "1,900"` and exit code 1. Revert the edit.

- [ ] **Step 5: Prove the check passes**

Run: `npm run check`
Expected: `content ok: 4 dossiers, 4 warnings` (the four `[DRAFT]` markers).

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "feat: typed content model, four dossiers, and prebuild content check"
```

---

### Task 3: Primitives and motion

**Files:**
- Create: `components/Slate.tsx`, `components/CutBand.tsx`, `components/LowerThird.tsx`, `components/Redacted.tsx`, `components/Frame.tsx`, `components/Still.tsx`, `components/Arrow.tsx`, `components/RevealObserver.tsx`, `app/template.tsx`

**Interfaces:**
- `Slate({ left, right, reveal? })` renders a flex row of two `.mono` spans.
- `CutBand({ label })` renders a full-width `--black` band, 180px tall, label centered in `.mono`.
- `LowerThird({ name, role })`.
- `Redacted()` renders `<span class="redact" aria-label="Client name withheld" />` with fixed width `9ch`, `background: var(--black)`, `border-radius: 2px`, `display: inline-block`, `height: .9em`, `vertical-align: -.1em`.
- `Frame({ ratio: "2.39" | "16/9", caption, subtitle?, children, reveal? })` renders `.wide` wrapper with `data-reveal-frame` when `reveal`, bars `.bar.top` and `.bar.bot` (14px, `--black`), a `.still` box with `aspect-ratio`, caption `.mono` top-left 14px inset, subtitle bottom-center with the backing band.
- `Still({ src, alt })` renders `next/image` `fill` `object-cover` when `src`, else a graded radial gradient placeholder `radial-gradient(120% 90% at 22% 78%, #3b2b1d 0%, #16130f 45%, #05070a 100%)`.
- `Arrow()` is an inline SVG, 12x12, stroke `currentColor`, `aria-hidden`.
- `RevealObserver()` client component: observes `[data-reveal], [data-reveal-frame]`, adds `in`, threshold `0.2`, `once`. Sets `--i` from a `data-i` attribute when present.
- `app/template.tsx` renders `<div className="cut" aria-hidden />`, `<RevealObserver />`, `{children}`.

- [ ] **Step 1: Write `components/RevealObserver.tsx`**

```tsx
"use client";
import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-frame]");
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { (e.target as HTMLElement).classList.add("in"); io.unobserve(e.target); }
    }, { threshold: 0.2 });
    els.forEach((el) => { if (el.dataset.i) el.style.setProperty("--i", el.dataset.i); io.observe(el); });
    return () => io.disconnect();
  }, []);
  return null;
}
```

- [ ] **Step 2: Write `app/template.tsx`**

```tsx
import { RevealObserver } from "@/components/RevealObserver";
export default function Template({ children }: { children: React.ReactNode }) {
  return (<><div className="cut" aria-hidden /><RevealObserver />{children}</>);
}
```

- [ ] **Step 3: Write the remaining primitives** per the Interfaces block, styling with Tailwind arbitrary values against the CSS variables (`bg-[var(--black)]`, `text-[var(--mute)]`). Keep each file under 60 lines.

- [ ] **Step 4: Smoke it on a temporary index**

Replace `app/page.tsx` with a page rendering one `Slate`, one `CutBand`, one `Frame` with a gradient `Still`, all with `reveal`. Run `npm run dev`, open the in-app browser, confirm: wipe plays once, bars close in, still fades, reload with reduced motion emulated shows everything instantly, navigating triggers the 120ms cut.

- [ ] **Step 5: Gate and commit**

Run: `npx tsc --noEmit && npm run build`

```bash
git add -A && git commit -m "feat: slate, cut band, frame, redaction, and reveal/cut motion primitives"
```

---

### Task 4: Index page

**Files:**
- Create: `components/SiteNav.tsx`, `components/DossierCard.tsx`, `components/DossierRow.tsx`, `components/VideoFacade.tsx`, `components/CopyEmail.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- `SiteNav({ back?: boolean })`: mark + name left; right side is three `.mono` anchor links `#work #after-hours #contact` or a single `Index` link when `back`.
- `DossierCard({ d: Dossier })`: `Frame` (2.39) with `Still`, caption `${d.client.region} · ${d.year} · 2.39:1`, subtitle `d.frame.subtitle`; then `Slate` and a title row (serif 34px left, first number right as serif 40px with `.mono` label). Whole card is a link to `/work/${slug}`.
- `DossierRow({ d })`: `Slate` (with `Redacted` when `d.client.redacted`), serif title 22px, deck one line, link.
- `VideoFacade({ id, title, place, year })` client component: thumbnail `https://i.ytimg.com/vi/${id}/hqdefault.jpg` via `next/image` (remote pattern added in Task 6) inside a 16/9 `Frame`; a drawn play triangle (SVG) button labeled `Play ${title}`; on click renders `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen title={title} />`.
- `CopyEmail({ email })` client: button shows the address; on click copies and swaps label to `Copied` for 1500ms.

- [ ] **Step 1: Build the scenes in `app/page.tsx`**

Order and content per spec §3: `00` hero (slate, serif h1 from `site.hero`, sub, `LowerThird`), `CutBand("01 / Work")`, `#work` featured cards then rows then two mention rows (voice agents, AI SDLC), `CutBand("02 / <label>")` side projects from `site.sideProjects`, `CutBand("03 / After hours")` `#after-hours` intro line and `VideoFacade` per video, `CutBand("04 / End credits")` `#contact` with `CopyEmail` and links, footer `.mono` `wilsondetorres.com · v1 · Makati`. Slates, h1, section titles, and frames carry `data-reveal`/`reveal`; prose does not.

- [ ] **Step 2: Check at 1440 and 390**

Open in the in-app browser at desktop, then `resize_window` to mobile. Confirm no horizontal scroll, column widths hold, cards stack, nav links wrap to a second line cleanly or collapse to two links.

- [ ] **Step 3: Gate and commit**

```bash
npx tsc --noEmit && npm run build && git add -A && git commit -m "feat: index page with five scenes"
```

---

### Task 5: Dossier pages and 404

**Files:**
- Create: `app/work/[slug]/page.tsx`, `components/SpecSheet.tsx`, `components/SceneIndex.tsx`, `components/ArchitectureFlow.tsx`, `components/Numbers.tsx`, `app/not-found.tsx`

**Interfaces:**
- `generateStaticParams()` returns `dossiers.map(d => ({ slug: d.slug }))`; `params` is a Promise in Next 16: `const { slug } = await params`. Unknown slug calls `notFound()`.
- `SpecSheet({ d })`: grid 3 cols desktop, 2 mobile; keys Role, Stack, Scale, Client (Redacted when redacted), Status, Public story (link when `publicUrl`).
- `SceneIndex({ ids })` client: on `min-width: 1100px` sticky in the left grid column, highlights the section whose heading is in view via IntersectionObserver; below 1100px renders as a horizontal `.mono` list above the body. Items are anchor links.
- `ArchitectureFlow({ a })`: nodes in a row with `Arrow` between, optional two-node branch at the end, panel background `--panel`, mono note beneath; stacks vertically under 800px.
- `Numbers({ items })`: rows, not tiles: serif value 40px, Geist label, `.mono` source. Under the grid one `.mono` line: "Only published or resume-stated figures. Every number carries its source."
- Body layout: `display:grid; grid-template-columns: 1fr min(620px, 86%) 1fr` at ≥1100px; break-out children use `grid-column: 1 / -1` with `.wide`.
- Sections have ids `problem constraint architecture numbers change`; headings are serif 22px with the `.mono` index to the left.
- Footer: `.hair`, then `Next` `.mono` and a link `NN / Title` to the next dossier (wraps).
- `not-found.tsx`: `SiteNav back`, serif "Scene missing.", one line, link to `/`.

- [ ] **Step 1: Write the page and components** per Interfaces.
- [ ] **Step 2: Check `/work/mr-bot`, `/work/planning-assistant` (bars render, aria-label present), `/work/nope` (404), at 1440 and 390.**
- [ ] **Step 3: Gate and commit**

```bash
npx tsc --noEmit && npm run build && git add -A && git commit -m "feat: dossier pages with scene index, architecture flow, numbers, and 404"
```

---

### Task 6: Meta, config, grain, and verification

**Files:**
- Create: `app/icon.svg`, `app/opengraph-image.tsx`, `app/work/[slug]/opengraph-image.tsx`, `app/sitemap.ts`, `app/robots.ts`, `public/grain.png` (if deferred from Task 1)
- Modify: `next.config.ts`, `app/layout.tsx` (Analytics if approved)

- [ ] **Step 1: `next.config.ts`**

```ts
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: { remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }] },
  async redirects() {
    return [{ source: "/:path*", has: [{ type: "host", value: "www.wilsondetorres.com" }], destination: "https://wilsondetorres.com/:path*", permanent: true }];
  },
};
export default nextConfig;
```

- [ ] **Step 2: OG images** with `ImageResponse`: charcoal ground, `.mono`-style slate top-left, serif title (font fetched from Google Fonts CSS at build), mono footer `wilsondetorres.com`. Default: name and role. Dossier: `d.title` and `d.deck`.
- [ ] **Step 3: `sitemap.ts`** lists `/` and each dossier; `robots.ts` allows all and points at the sitemap.
- [ ] **Step 4: `icon.svg`**: 64x64, charcoal rect, `WDT` in a monospace system stack, bone fill.
- [ ] **Step 5: Grain PNG** if not done. Confirm it tiles without a visible seam at 100 percent.
- [ ] **Step 6: Verification round, once, batched**

Run `npm run build`. Open `/` and `/work/mr-bot` in the in-app browser at desktop and mobile. Run `.claude/skills/impeccable/scripts/impeccable detect --json app components` once and fix mechanical findings. Run Lighthouse from Chrome DevTools or `npx lighthouse` on the local production server (`npm start`) for `/` and `/work/mr-bot`, mobile preset; target 95+. Fix in one batch, confirm with at most one more round.

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat: metadata, OG images, sitemap, redirects, grain"
```

---

### Task 7: Ship

- [ ] Push `v1`, open a PR to `main` with the wilsonDT account, merge after Wilson looks at the Vercel preview.
- [ ] Wilson creates the Vercel project from the GitHub repo, adds both domains, and updates Cloudflare per spec §12 (remove the LinkedIn redirect, DNS-only records as the Vercel panel shows).
- [ ] After merge: run `/impeccable polish` and `/impeccable audit` once, then the impeccable finish review and documenter to produce `DESIGN.md`.
- [ ] Replace `[DRAFT]` paragraphs and the placeholder hero line as Wilson's copy arrives; the production check enforces this.

## Self-review

- Spec coverage: routes (T4, T5), scenes (T4), dossier template (T5), tokens and type (T1), frames and devices (T3), redaction (T3, T5), grain (T1/T6, raster not turbulence), motion (T1, T3), content model and banned strings (T2), components (T3 to T5), meta (T6), a11y baseline (T1 skip link and focus, T6 audit), the check (T2), deployment (T7), open decisions carried as defaults (T2 for Mr. Bot depth, T6 for Analytics). Lighthouse and manual checks (T6).
- Deviations from spec, deliberate: wipes on slates, titles, and frames only, not on prose (craft floor). Grain as a raster tile, not `feTurbulence` (craft floor). Arrows drawn as SVG, not glyphs (craft floor). Numbers as rows with sources, not stat tiles (craft floor).
- Type consistency: `Dossier` fields used in T4 and T5 match T2 (`client.redacted`, `client.name`, `frame.subtitle`, `numbers[].source`, `architecture.nodes`).
