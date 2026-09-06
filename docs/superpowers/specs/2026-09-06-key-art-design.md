# Portfolio v2: Key Art

Date: 2026-09-06
Owner: Wilson De Torres
Status: hero shipped in the `key-art` branch, PR #5; the scenes below follow in their own PRs
Replaces the index composition of `2026-09-06-quiet-cut-design.md`. Everything not mentioned here (tokens, type, the frosted nav, `/experience`, grain, accessibility, deployment) stands.

## 1. Why

Wilson's read of v1.3: minimal, but bland. A sentence and a name card in the top-left of an empty column read like a blog; nothing happened on open and nothing stayed in memory. He wanted composition and negative space used with intent, cinematic in the sense of type, layout, and color grading, and nothing performative.

The first direction round misread "film" as the physical object. A negative-strip hero (perforation rails, orange-mask negatives, edge print) was built and rejected the same day as old-looking; that reading is now ruled out in PRODUCT.md. The second round dealt three modern-cinema compositions (a focus pull, key art, a grading pass) and Key Art was chosen: the index opens as a one-sheet.

## 2. Decisions

| Topic | Decision |
|---|---|
| Composition | The first viewport is a poster. One graded picture fills it and fades into the page ground at its foot; the title sits in the lower third; a billing block carries the facts; employer marks run along the bottom edge where a poster keeps its distributors. No header above content, no metric tiles. |
| Key art | Wilson's own graded still (an observation deck, him small and turned away under converging window mullions). Shipped as a 2560px JPEG under `public/key-art/` with its origin embedded in the file; the 3840x2160 source PNG stays out of the repo. `object-position` 52% 38% keeps him in the centre column on phones. |
| Title | The hero sentence in EB Garamond at up to 60px, centred, its top at 58svh so it reads at about 62% of the viewport. Balanced to two lines on phones. |
| Billing block | A list in Geist uppercase, centred: the name as star billing at about a third of the title (up to 17.5px, 0.28em tracking, ink), then `AI Engineer · Thinking Machines`, then the three aggregate figures on one line with values a step larger than labels (13px and 11px, one tracking of 0.12em, tabular numerals, muted). A condensed poster face is a possible later expansion, not adopted. |
| Distributor row | The four employer marks at 32px, centred and pinned to the foot by a flexible row, under a `Worked at` caption. |
| Scrim | One gradient: a band at 90% held over the nav to 6% and gone by 32%, clear through the middle, rising from 40% to 88% at 70% and into the ground at the foot. The grain tile rides on top so texture is continuous from picture to page. |
| Motion | One arrival, CSS only: the picture from a flat log state to its grade over 1.2s while the title's tracking settles from 0.08em over 1.1s, then the credits and marks rise. Only when `html.js` is present; reduced motion and no-JS get the finished poster at first paint. |
| Ground | The page gradient's head moves from #121211 to #0a0a0a; the poster covers the lift the top used to carry. Recorded in PRODUCT.md. |
| About | Loses its three figures, which the billing block now carries. The paragraph and the `View experience` link stay. |
| Nav | Unchanged: bare over the picture, frosted once scrolled. Whether it joins the poster is open. |
| Removed | The `LowerThird` component and the hero wipe. `LogoStrip` takes size, label, and alignment props. |
| Not film | Film means the cinematic aesthetic of type, layout, composition, and grading. No perforations, negatives, orange mask, edge print, reel or projector effects. |

## 3. Copy

Nothing new written. The title is the LinkedIn line; the credits reuse the resume figures and the labels the About figures carried.

## 4. Next

The two featured engagements as their own one-sheets (picture, one line, one number, credits, the story link), then side projects, after hours, and end credits in the same world, then `/experience` inherits it. Stills for the featured one-sheets are Wilson's to supply; every picture slot works without one.

## 5. Verification

`tsc --noEmit`, `npm run lint`, `npm run check`, and the impeccable detector pass with no findings. Index checked at 1440 and 390: no horizontal overflow, layout shift 0, reduced motion and no-JS render the complete poster. Lighthouse mobile on the production build, three runs: performance 89, 94, 96 (v1.3: 92 to 96), accessibility 100, SEO 100; the largest paint is the picture at 2.8 to 3.4s instead of the hero text. A finish review of the first viewport returned eight findings (nav contrast over the picture, grain continuity at the poster's foot, title placement, credit tracking and registers, mark size, list semantics, the product record); all are fixed in the branch's second commit.
