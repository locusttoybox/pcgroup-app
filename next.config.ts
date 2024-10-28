import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // Add your environment variables here
    NODE_ENV: process.env.NODE_ENV,
  },

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
