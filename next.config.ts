import type { NextConfig } from "next";
import path from "path";

const projectRoot = path.resolve(__dirname);

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Prevent Next from treating ~/Downloads as the monorepo root (breaks CSS/asset paths).
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
