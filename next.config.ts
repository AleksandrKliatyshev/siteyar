import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.101'],
  output: 'export',  // Добавьте эту строку
  images: {
    unoptimized: true,  // Добавьте эту строку для работы изображений
  },
};

export default nextConfig;