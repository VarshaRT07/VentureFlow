import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  dangerouslyAllowSVG:true,
   images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*'
      }
    ]
   },
   logging:{
    fetches:{
        fullUrl: true
    }
  },
  devIndicators:{
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right"
  }
};

export default nextConfig;
