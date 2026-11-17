import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      { source: "/servicios", destination: "/servicios/principales", permanent: false },
      { source: "/nosotros", destination: "/nosotros/10-razones", permanent: false },
      { source: "/saber-mas", destination: "/saber-mas/faq", permanent: false },
    ];
  },
};

export default nextConfig;
