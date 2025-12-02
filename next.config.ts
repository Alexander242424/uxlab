import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 👉 Игнорировать ESLint на продакшн-сборке
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 👉 Игнорировать ошибки TypeScript на продакшн-сборке
  typescript: {
    ignoreBuildErrors: true,
  },

  // 👉 Твоя SVG конфигурация
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
