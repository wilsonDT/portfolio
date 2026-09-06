# Portfolio v1.1: The Short Cut

Date: 2026-09-06
Owner: Wilson De Torres
Status: approved in chat, implemented in the `short-cut` branch
Supersedes the dossier sections of `2026-09-05-portfolio-design.md`. Everything not mentioned here (tokens, type, frames, grain, motion, redaction bars, accessibility, deployment) stands.

## 1. Why

Wilson decided on 2026-09-06 to stop writing case studies for client work. Dossiers put every private engagement one paragraph away from an NDA question, and the index they produced read as long and monotonous. References he pointed at: bryllim.com/projects and /experience (flat lists, one line per item, links out) and apoorvgupta.com (black ground, employer logo strip under the hero, a "confidential artifacts over a call" line instead of case studies).

## 2. Decisions

| Topic | Decision |
|---|---|
| Dossiers | Removed. `/work/[slug]`, its content, and its components are deleted. No redirects: nothing was live. |
| Index scope | Short. Roughly three screens: hero with logo strip, two featured public engagements, side projects, after hours, end credits. |
| Featured work | Only public, linkable engagements: Mr. Bot (NST Apparel) and the training simulator (OnePuhunan). Each card links to the Thinking Machines story, carries one public figure, and keeps its letterboxed frame for the stills. |
| Everything else | Lives on `/experience` as bullets under the role, the way the resume does it. The index closes the Work scene with a plain pointer, "Everything else is in Experience", and says nothing about NDAs anywhere on the site. |
| Experience page | New route. Employers newest first, roles with dates, resume bullets as short prose, no skill tags, education at the end. Same skin. |
| Logo strip | Under the lower third: every employer including internships, read from the same list as the experience page. Logo file when supplied, mono wordmark until then. |
| Nav | One nav everywhere: Work · Experience · After hours · Contact, absolute anchors. |
| Cut bands | 120px instead of 220px. |
| Copy | Wilson's sentences only. Entry lines reuse the accepted decks; "what I did" and experience bullets are resume bullets cut to size. |

## 3. Content model

- `content/work.ts`: `Featured[]` with index, title, client, industry, year, line, did, href, figure, frame. Plus `restOfWork`, the closing line.
- `content/experience.ts`: `Employer[]` with slug, name, short, optional logo, location, roles; each role has title, type, start, end, bullets (text, optional href). Plus `education`.
- `content/after-hours.ts`: videos only. The intro line is gone until Wilson writes one.
- `content/site.ts`: unchanged except `mentions` is gone.

## 4. Rules the build enforces

`scripts/check-content.ts` runs as `prebuild` and fails on: a banned string anywhere (`1,900`, `1900`); a `[DRAFT]` marker in a production build; a link that is not https; a featured entry missing title, line, did, href, or figure; an employer with no roles or an incomplete role.

Rules kept by hand, from PRODUCT.md: no client names for private work; the AI SDLC framework is "helped build it", no numbers; the Databricks pipeline bullet stays off until Wilson opts in; the current engagement is not on the site.

## 5. What Wilson supplies

- Logos are in place as PNG in `public/logos/` (`thinking-machines.png`, `fit-senpai.png`, `dlrc.png`, `dost-asti.png`), supplied 2026-09-06. Replace a file to update a logo; a missing file falls back to the wordmark. Rendering is monochrome via CSS: single-colour marks are flattened to white, colourful seals are inverted grayscale. Casper Studios gets one entry plus one file when it starts.
- One sentence for the DLRC internship.
- Stills and a second After-hours video, as before.

## 6. Verification

`npm run check`, `npm run lint`, `npm run build`. Index and `/experience` opened at 1440 and 390: nav works from both pages, anchors land, the strip wraps on mobile, reduced motion still shows everything. Lighthouse mobile 95+ on both routes.
