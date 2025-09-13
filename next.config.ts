import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  // Force static export to avoid Serverless Functions on Vercel
  output: "export",
  // Required for static export when using next/image; safe even if unused
  images: { unoptimized: true },
};

export default nextConfig;
