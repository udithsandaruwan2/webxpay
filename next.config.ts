import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 90],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      { source: "/careers/hero-office.png", destination: "/careers/hero-office.webp", permanent: true },
      { source: "/media/hero_ryan_perera.png", destination: "/media/hero_ryan_perera.webp", permanent: true },
      { source: "/media/hero_ryan_perera_mobile.png", destination: "/media/hero_ryan_perera_mobile.webp", permanent: true },
      { source: "/solutions/app/whole.png", destination: "/solutions/app/whole.webp", permanent: true },
      { source: "/solutions/xsplit/img.png", destination: "/solutions/xsplit/img.webp", permanent: true },
      { source: "/home/empower/screen.png", destination: "/home/empower/screen.webp", permanent: true },
      { source: "/common/crypto-logo.png", destination: "/common/crypto-logo.webp", permanent: true },
      { source: "/xpos/banner.png", destination: "/xpos/banner.webp", permanent: true },
      { source: "/xpos/2.png", destination: "/xpos/2.webp", permanent: true },
      { source: "/xpos/1.png", destination: "/xpos/1.webp", permanent: true },
      { source: "/xgateway/1.png", destination: "/xgateway/1.webp", permanent: true },
      { source: "/home/security/laptop.png", destination: "/home/security/laptop.webp", permanent: true },
      { source: "/home/coresolution/xpos-updated.png", destination: "/home/coresolution/xpos-updated.webp", permanent: true },
      { source: "/about-us/commerce/human.jpg", destination: "/about-us/commerce/human.webp", permanent: true },
      { source: "/about-us/commerce/purpose.jpg", destination: "/about-us/commerce/purpose.webp", permanent: true },
      { source: "/solutions/xsupplier/img.jpg", destination: "/solutions/xsupplier/img.webp", permanent: true },
      { source: "/solutions/xpaylink/img.jpg", destination: "/solutions/xpaylink/img.webp", permanent: true },
      { source: "/solutions/xqr/img.jpg", destination: "/solutions/xqr/img.webp", permanent: true },
    ];
  },
};

export default nextConfig;
