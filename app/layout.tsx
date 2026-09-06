import type { Metadata, Viewport } from "next";
import { EB_Garamond, Geist, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { openGraph } from "@/lib/og";
import { site } from "@/content/site";
import card from "./og.jpg";
import "./globals.css";

const serif = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Geist({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wilsondetorres.com"),
  title: {
    default: "Wilson De Torres — AI Engineer",
    template: "%s · Wilson De Torres",
  },
  description:
    "AI engineer at Thinking Machines. Enterprise AI systems in production.",
  alternates: { canonical: "/" },
  openGraph: {
    ...openGraph,
    url: "/",
    // Turbopack skips the opengraph-image.alt.txt convention, so the card is wired here with its alt text. The hashed URL busts share caches when the card is re-rendered.
    images: [{ url: card.src, width: card.width, height: card.height, type: "image/jpeg", alt: `${site.name}, ${site.role} · ${site.org}. ${site.heroStem} ${site.heroTail[0]}` }],
  },
};

// Discord and Android tint their chrome with this.
export const viewport: Viewport = { themeColor: "#0a0a0a" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-[var(--ink)] focus:px-3 focus:py-2 focus:text-[var(--ground)]"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
