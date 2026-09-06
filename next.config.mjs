/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

// If deploying to GitHub Pages under https://username.github.io/REPO_NAME,
// set basePath/assetPrefix to '/REPO_NAME'. Leave empty for Vercel or a custom domain.
const repoName = '/knownaxis'; // <-- change to your repo name, or set to '' if not needed

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? repoName : '',
  assetPrefix: isProd ? repoName : '',
  trailingSlash: true,
};

export default nextConfig;
