// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ВАЖНО: убираем кастомный webpack-конфиг, чтобы не ругалось
  // webpack(config) {
  //   return config;
  // },

  // Turbopack-конфиг (Next 16)
  turbopack: {
    rules: {
      // 1) По умолчанию все *.svg превращаем в React-компоненты через SVGR
      "*.svg": {
        condition: {
          all: [
            // Не трогаем node_modules — так быстрее
            { not: "foreign" },
            // Не трогаем наши "*.url.svg" — они будут картинками
            { not: { path: "*.url.svg" } },
          ],
        },
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },

      // 2) *.url.svg оставляем Turbopack’у "как есть" (дефолтный loader)
      //    Тут отдельное правило не нужно: они просто не попадают в верхнее.
    },
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
