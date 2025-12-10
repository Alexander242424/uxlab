// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  turbopack: {
    rules: {

      "*.svg": {
        condition: {
          all: [

            { not: "foreign" },

            { not: { path: "*.url.svg" } },
          ],
        },
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },


    },
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
