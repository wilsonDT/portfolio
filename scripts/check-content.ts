// Fails the build when content breaks a rule. Runs as `prebuild`.
import { statSync } from "node:fs";
import { afterHours } from "../content/after-hours";
import { education, employers } from "../content/experience";
import { site } from "../content/site";
import { featured, restOfWork } from "../content/work";

const PROD = process.env.VERCEL_ENV === "production";
const fails: string[] = [];
const warns: string[] = [];

function walk(v: unknown, path: string) {
  if (typeof v === "string") {
    if (v.includes("[DRAFT]")) (PROD ? fails : warns).push(`${path}: draft marker`);
    if (path.endsWith(".href") && !v.startsWith("https://")) fails.push(`${path}: link is not https`);
  } else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${path}[${i}]`));
  else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) walk(x, `${path}.${k}`);
}

for (const w of featured) {
  const p = `work/${w.index}`;
  for (const k of ["title", "line", "did", "href"] as const) if (!w[k]) fails.push(`${p}: ${k} empty`);
  if (!w.figure.value || !w.figure.label) fails.push(`${p}: figure incomplete`);
}
if (site.heroTail.length !== 3) fails.push("site.heroTail: the title card's roll is keyed to three tails in globals.css");
for (const e of employers) {
  if (!e.roles.length) fails.push(`experience/${e.slug}: no roles`);
  for (const r of e.roles) if (!r.title || !r.start || !r.end) fails.push(`experience/${e.slug}: role incomplete`);
}

// The homepage share card is a still of the poster, rendered by `npm run og`. WhatsApp drops previews over about 300KB.
const card = statSync("app/og.jpg", { throwIfNoEntry: false });
if (!card) fails.push("app/og.jpg: missing, run `npm run og`");
else if (card.size > 300_000) fails.push(`app/og.jpg: ${card.size} bytes, over the 300KB preview ceiling`);

walk({ featured, restOfWork, employers, education, afterHours, site }, "content");

for (const w of warns) console.warn("warn:", w);
if (fails.length) {
  for (const f of fails) console.error("fail:", f);
  process.exit(1);
}
console.log(`content ok: ${featured.length} featured, ${employers.length} employers, ${warns.length} warnings`);
