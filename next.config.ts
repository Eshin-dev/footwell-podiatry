import type { NextConfig } from "next";

// BASE_PATH is set by actions/configure-pages in the workflow.
// It is "" for custom domain deployments and "/repo-name" for repo sites.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    // next/image optimization requires a server; disable for static export.
    unoptimized: true,
  },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
