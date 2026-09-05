// Fails the build when content breaks a rule. Runs as `prebuild`.
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
if (fails.length) {
  for (const f of fails) console.error("fail:", f);
  process.exit(1);
}
console.log(`content ok: ${dossiers.length} dossiers, ${warns.length} warnings`);
