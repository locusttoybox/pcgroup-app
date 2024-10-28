import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
    cssModules: true,
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    webpack: (config, { dev, isServer }) => {
      // Customize the webpack config before returning
      return config;
    },
    async redirects() {
      return Promise.resolve([
        {
          source: '/old-page',
          destination: '/new-page',
          permanent: true,
        },
      ]);
    
},
}


export default nextConfig;
