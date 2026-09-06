// Renders the homepage share card, the poster as a still, to app/og.jpg. app/layout.tsx wires it into the metadata with its alt text.
// Run `npm run og` after changing the hero line or the key art. The prebuild check keeps the file under 300KB.
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createElement as h } from "react";
import { ImageResponse } from "next/og";
import { site } from "../content/site";
import { googleFont, ogSize } from "../lib/og";

const { width: W, height: H } = ogSize;
const ink = "#ecebe6";
const mute = "#8f8e89";
const ground = "#0a0a0a";
const title = [site.heroStem, site.heroTail[0]];
const line = `${site.role} · ${site.org}`;

async function main() {
  const art = readFileSync(site.keyArt.src.replace(/^\//, "public/"), "base64");
  // A 16:9 still is 675px tall at this width. The poster's focus point places the 45px it loses.
  const artH = Math.round((W * 9) / 16);
  const top = -Math.round(((artH - H) * parseFloat(site.keyArt.focus.split(" ")[1])) / 100);
  const [serif, mono] = await Promise.all([
    googleFont("EB+Garamond", title.join("")),
    googleFont("JetBrains+Mono", `${site.name}${line}`.toUpperCase()),
  ]);
  const abs = { position: "absolute" as const, top: 0, left: 0, width: W, height: H };
  const png = await new ImageResponse(
    h(
      "div",
      { style: { ...abs, display: "flex", background: ground, color: ink } },
      h("img", { src: `data:image/jpeg;base64,${art}`, width: W, height: artH, style: { position: "absolute", top, left: 0 } }),
      // The poster's scrim, same stops as .scrim in globals.css.
      h("div", {
        style: {
          ...abs,
          background: `linear-gradient(to bottom, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.9) 6%, rgba(10,10,10,0) 32%, rgba(10,10,10,0) 40%, rgba(10,10,10,0.88) 70%, ${ground} 100%)`,
        },
      }),
      h(
        "div",
        { style: { ...abs, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", paddingBottom: 54 } },
        h(
          "div",
          { style: { display: "flex", flexDirection: "column", fontFamily: "Serif", fontSize: 74, lineHeight: 1.05, letterSpacing: "-0.015em", textAlign: "center" } },
          ...title.map((t) => h("div", null, t)),
        ),
        h("div", { style: { marginTop: 30, fontFamily: "Mono", fontSize: 21, letterSpacing: "0.28em", textTransform: "uppercase" } }, site.name),
        h("div", { style: { marginTop: 10, fontFamily: "Mono", fontSize: 15, letterSpacing: "0.12em", textTransform: "uppercase", color: mute } }, line),
      ),
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Serif", data: serif, style: "normal", weight: 400 },
        { name: "Mono", data: mono, style: "normal", weight: 400 },
      ],
    },
  ).arrayBuffer();

  // ponytail: sips is macOS-only; swap for sharp if this ever has to run in CI.
  const tmp = join(mkdtempSync(join(tmpdir(), "og-")), "card.png");
  writeFileSync(tmp, Buffer.from(png));
  execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "88", tmp, "--out", "app/og.jpg"], { stdio: "ignore" });
  console.log(`app/og.jpg: ${statSync("app/og.jpg").size} bytes`);
}

main();
