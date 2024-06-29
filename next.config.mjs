// output, basePath, and images are required for GitHub Pages.
// See https://github.com/gregrickaby/nextjs-github-pages

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // TODO(hojoon): replace repository name and change base path
  basePath: "/blog",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
