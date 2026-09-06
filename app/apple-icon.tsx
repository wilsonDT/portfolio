import { ImageResponse } from "next/og";
import { googleFont } from "@/lib/og";
import { site } from "@/content/site";

// The WDT mark from icon.svg at the size iOS and iMessage ask for. iOS rounds the corners itself.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function Icon() {
  const mono = await googleFont("JetBrains+Mono:wght@500", site.mark);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#ecebe6",
          fontFamily: "Mono",
          fontSize: 54,
          letterSpacing: 4,
        }}
      >
        {site.mark}
      </div>
    ),
    { ...size, fonts: [{ name: "Mono", data: mono, style: "normal", weight: 500 }] },
  );
}
