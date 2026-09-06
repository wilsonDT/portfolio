# Portfolio v1.2: The Quiet Cut

Date: 2026-09-06
Owner: Wilson De Torres
Status: implemented in the `quiet-cut` branch, PR #3
Refines `2026-09-06-short-cut-design.md`. Everything not mentioned here stands.

## 1. Why

Wilson's read of v1.1: the index turned into a wall of text from the Work scene down, and the numbered mono labels, arrow glyphs and repeated role lines read as generic "cinematic" theming. He asked for a coherent, easy-to-navigate page in the same world: cinematic, minimal, black. Trimming beat moving Work to its own page; the featured numbers are the proof a visitor came for and stay one scroll away.

## 2. Decisions

| Topic | Decision |
|---|---|
| Section numbers | Gone. No `00 / Cold open`, `01 / Work`, no per-card index in the UI. Scenes open with a column-width hairline and a serif title at up to 40px (`About`, `Work`, `Side projects`, `After hours`, `End credits`). The right slot holds one mono line: context or a link. An 11px mono word was tried first and did not register as a section change while scrolling. |
| About | New scene between the hero and Work: a paragraph assembled from Wilson's resume sentences (placeholder until he writes his own), a `View experience` link in the right slot, and three aggregate figures from the resume: 7+ client engagements, ₱1.8M projected annual client savings, 54% cut in LLM token usage. Labels reuse the wording of the experience bullets. |
| Cut bands | Removed. The pause between scenes is 112px of ground plus the hairline. |
| Hero | Serif line at up to 64px, lower third, logo strip. The sub sentence and the hero slate are cut; the lower third already said all of it. |
| Work header | The employer heading, role line and `Experience →` link above the cards are cut; the scene slate carries `Thinking Machines · 2025`. |
| Featured card | Frame, then title and one line, what Wilson did in one short line, one big number right-aligned, `Read the story · host`. The client, industry and year are the frame's archival caption. |
| Frames | Centered in the 800px break-out (an `m-0` utility had been overriding the auto margins). 2.39:1 frames drop to 16:9 below 640px. Placeholder stills are graded warm or cool per card so two frames never read as one shot. |
| Links | No arrow or external-link glyphs. Inline links underline; mono meta links brighten on hover. Hosts and the footer line are lowercase mono. |
| Nav | Geist 13px, muted, current page in ink, mark without a box. Mono stays for slates, captions and meta only. |
| Body | Geist 400, not 300; light weight thinned out on the dark ground. New token `--ink-2` (#cfcec8) for secondary body copy. |
| Motion | Reveals only on the hero group (line, lower third, logos) and on frames (bars close, still fades). Text below frames is static. The hero group wipes in with a CSS-only animation on load, no observer, so the largest text paints at first render instead of after hydration. Frames keep the IntersectionObserver. |
| Logo strip | Each logo reserves its real width at 36px tall, read from the PNG header at build time, so nothing below the strip shifts when the files load. The old fixed 200px placeholder wrapped the strip onto several rows on phones and then collapsed it, which moved the About scene. |
| Location | No city on the index, in metadata, or on the OG cards; Wilson markets himself as global and remote. The lower third reads `AI Engineer · Thinking Machines`, the footer `wilsondetorres.com · v1`. Employer locations on `/experience` stay as facts. |
| Email | The address is the button; a mono `Copy` beside it becomes `Copied`. No label above it. |
| Experience page | No slate above the heading; the range sits under it. Year ranges use an en dash. `Story` links underline instead of carrying an arrow. |

## 3. Copy cut, not rewritten

- Hero sub sentence removed.
- Training simulator line: "An AI roleplay coach for frontline staff: personas that push back, a feedback agent, a knowledge assistant. Shipped at OnePuhunan as Pocket Branch Manager."
- Rice leaf detection: "magna cum laude" dropped from the index; it stays under Education on `/experience`.

## 4. Verification

`npm run check`, `npm run lint`, `tsc --noEmit`, `npm run build` pass. The trim took the index from 4384px to 3809px at 1440 before the About scene added a screen of its own. Index and `/experience` inspected at 1440 and 390; frames centered; the impeccable detector reports no findings on `app` and `components`. Lighthouse mobile on the production build: index 92 to 96 performance over three runs, experience 96, accessibility 100, SEO 100, layout shift 0 on both. The first cut of this branch scored 70 on the index: a 0.17 layout shift from the logo strip's 200px placeholders and a hero hidden until hydration; both are fixed above.
