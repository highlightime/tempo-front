/** @type {import('next').NextConfig} */

const Dotenv = require("dotenv-webpack");
const nextConfig = {
  images: {
    domains: ["fastly.picsum.photos", "*"],
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.plugins.push(new Dotenv({ silent: true }));

    return config;
  },
  basePath: "/tempo-front",
};

module.exports = nextConfig;
