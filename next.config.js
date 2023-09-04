/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    }); 

    return config;
  },

  images: {
    domains: ['cdn.wallpapersafari.com', 'mcdn.wallpapersafari.com'],
  },
}

module.exports = nextConfig
