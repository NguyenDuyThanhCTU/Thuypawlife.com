/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
      "upload.wikimedia.org",
    ],
  },
  experimental: {
    serverActions: true,
  },
  output: "standalone",
};

module.exports = nextConfig;
