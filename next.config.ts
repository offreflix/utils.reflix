import type { NextConfig } from "next";

const nextConfig: NextConfig = { 
  webpack: (config, { isServer }) => {
    // Configuração para PDF.js
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
      };
    }

    // Configuração para workers
    config.module.rules.push({
      test: /pdf\.worker\.entry\.js$/,
      use: { loader: 'worker-loader' },
    });

    return config;
  },
  /* config options here */
};

export default nextConfig;
