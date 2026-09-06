import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next 16 allowlists image qualities; the poster asks for 85, everything else uses the default 75.
  images: { qualities: [75, 85], remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }] },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.wilsondetorres.com" }],
        destination: "https://wilsondetorres.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
