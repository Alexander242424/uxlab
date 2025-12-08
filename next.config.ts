// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      // 1) *.svg как React-компоненты (SVGR)
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
      // 2) *.svg?url как обычный файл (URL-строка)
      "*.svg?url": {
        loaders: ["file-loader"],
        as: "*.url",
      },
    },
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  webpack(config) {
    // Отключаем дефолтную обработку svg, чтобы не конфликтовать
    const fileLoaderRule = config.module.rules.find((rule: any) =>
        rule.test?.test?.(".svg"),
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // 1) SVG как React-компонент через SVGR
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] }, // важно: без ?url
      use: ["@svgr/webpack"],
    });

    // 2) SVG как файл (URL) через file-loader, если добавлен ?url
    config.module.rules.push({
      test: /\.svg$/i,
      resourceQuery: /url/, // только если ?url в импорте
      type: "asset/resource",
    });

    return config;
  },
};

export default nextConfig;
