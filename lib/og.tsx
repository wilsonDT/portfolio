import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

// Google Fonts serves TTF to a client with no browser user agent; Satori needs TTF/OTF, not woff2.
async function googleFont(family: string, text: string) {
  const css = await (await fetch(`https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`)).text();
  const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
  if (!url) throw new Error(`no font url for ${family}`);
  return (await fetch(url)).arrayBuffer();
}

export async function ogCard({ slate, title, footer }: { slate: string; title: string; footer: string }) {
  const [serif, mono] = await Promise.all([
    googleFont("EB+Garamond", title),
    googleFont("JetBrains+Mono", `${slate}${footer}`.toUpperCase()),
  ]);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background: "linear-gradient(180deg, #17120d 0%, #0c0c0b 55%)",
          color: "#ecebe6",
        }}
      >
        <div style={{ fontFamily: "Mono", fontSize: 22, letterSpacing: 2, textTransform: "uppercase", color: "#8f8e89" }}>{slate}</div>
        <div style={{ fontFamily: "Serif", fontSize: title.length > 40 ? 68 : 92, lineHeight: 1.02, letterSpacing: -1, maxWidth: 1000 }}>{title}</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "Mono", fontSize: 22, letterSpacing: 2, textTransform: "uppercase", color: "#8f8e89" }}>
          <span>{footer}</span>
          <span>wilsondetorres.com</span>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Serif", data: serif, style: "normal", weight: 400 },
        { name: "Mono", data: mono, style: "normal", weight: 400 },
      ],
    },
  );
}
