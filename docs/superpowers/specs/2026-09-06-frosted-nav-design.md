# Portfolio v1.3: The Frosted Bar

Date: 2026-09-06
Owner: Wilson De Torres
Status: implemented in the `frosted-nav` branch
Refines `2026-09-06-quiet-cut-design.md`. Everything not mentioned here stands.

## 1. Why

Two things Wilson noticed on the v1.2 index. On a phone the nav scrolls away with the hero, so the only way to navigate is back to the top. On a wide screen the page reads as a thin strip: the text column is 620px and the break-out frames were 800px, a 90px step on each side, so the "narrow text, wide media" rhythm never showed. He asked whether the width wanted a sidebar, and floated liquid glass and the OpenAI and Anthropic headers for the nav.

The column itself is not the problem. At 15.5px Geist it runs about 83 characters a line, already the long end of comfortable, so widening it would hurt reading. A sidebar is furniture for a docs site; this page has five scenes. The nav should travel with the reader, and the frames should break out for real.

## 2. Decisions

| Topic | Decision |
|---|---|
| Nav | One sticky bar, 48px tall, the mark and the same four Geist links aligned to the text column. Bare at the top of the page, so the first viewport is unchanged. Once scrolled it frosts: the ground at 76% over a 14px backdrop blur, with a hairline beneath that matches the hairline every scene opens with. |
| Hide and return | The bar slides away while scrolling down and returns on the first scroll up, like Safari's own bar. A click on a nav link holds it in place for the jump. Tabbing into a hidden bar brings it back. Under prefers-reduced-motion it snaps. |
| Current scene | On the index, the link for the scene under a line a third of the way down the viewport is lit in ink (Work, After hours, Contact); at the foot of the page, Contact. On /experience the page link is lit as before. |
| Glass | Frosted, not liquid: translucency yes, specular edges and refraction no. The shine is the loudest UI trend of the year, and this site refuses loud. |
| No hamburger | The mark and four links fit in one row down to 360px, with 48px tap targets. |
| Frames | The break-out measure grows from 800px to 960px; the text column stays at 620px. Below 1000px a frame is still 96% of the viewport. Image `sizes` follow. |
| Not done | No sidebar, no bottom pill, no wider text column. Copy untouched; content is a later pass. |

## 3. Verification

`tsc --noEmit`, `npm run lint`, `npm run check` and `npm run build` pass. The impeccable detector reports no findings on the changed files. Index checked at 1440 and 390 with a scripted scroll: the bar is bare at the top, frosted and hidden after scrolling down, back after scrolling up, Work and Contact light at the right positions, a click on Work keeps the bar and lands the title 112px below it, and focus into a hidden bar shows it. Main and hero positions are unchanged from v1.2. No test framework was added; the scripted browser check is the check.
