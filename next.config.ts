import { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // !! WARN !!
    // This allows builds to succeed even if there are type errors.
    ignoreBuildErrors: true,
  },

  
};

export default nextConfig;
