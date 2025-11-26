import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  transpilePackages: [
    "@mui/material",
    "@mui/system",
    "@mui/styled-engine-sc",
  ],
};

export default nextConfig;