import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.paysages-azureens.fr' }],
        destination: 'https://paysages-azureens.fr/:path*',
        permanent: true,
      },
    ];
  },
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
