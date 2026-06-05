import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/[lang]/[book]/[chapter]": ["./data/processed/**/*.json"],
    "/[lang]": ["./data/processed/**/*.json"],
  },
};

export default nextConfig;
