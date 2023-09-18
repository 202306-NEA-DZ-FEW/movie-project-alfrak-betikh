/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["image.tmdb.org", "via.placeholder.com"],
  },
};

module.exports = nextConfig;
