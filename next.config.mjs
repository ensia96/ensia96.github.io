/** @type {import('next').NextConfig} */
const nextConfig = {
  // output, basePath, and images are required for GitHub Pages.
  // See https://github.com/gregrickaby/nextjs-github-pages
  output: "export",
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    if (!isServer) config.resolve.fallback = { fs: false, module: false };
    return config;
  },
};

export default nextConfig;
