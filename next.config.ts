import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.101'],
  output: 'export',
  basePath: '/siteyar',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;