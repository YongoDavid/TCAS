import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Remove or adjust experimental flags to match the installed Next.js types.
  // experimental: {
  //   serverActions: true,
  // },
};

export default nextConfig;
