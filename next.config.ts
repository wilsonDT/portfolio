import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }] },
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
