import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services.html",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/jewelry-repair.html",
        destination: "/jewelry-repair",
        permanent: true,
      },
      {
        source: "/watch-services.html",
        destination: "/watch-services",
        permanent: true,
      },
      {
        source: "/contact-us.html",
        destination: "/contact-us",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
