import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pure-front static export for now (e.g. Cloudflare Pages / Netlify / S3).
  // Forms are stubbed client-side; backend can be added later by removing this.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
