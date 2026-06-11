import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/paysagiste-:city',
        destination: '/paysagiste/:city',
      },
    ];
  },
};

export default nextConfig;
