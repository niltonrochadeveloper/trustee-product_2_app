/** @type {import('next').NextConfig} */
import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "product_1_app",
        remotes: {},
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./products": "./src/components/products/index.tsx",
          "./categoy": "./src/pages/category/index.tsx",
          "./books": "./src/pages/books/index.tsx",
        },
        extraOptions: {
          debug: false, // `false` by default
          exposePages: false, // `false` by default
        },
        shared: {},
      })
    );

    return config;
  },
};

export default nextConfig;
