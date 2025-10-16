/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // ✅ Allow optimization of Google-hosted profile avatars (from testimonials)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },

};

export default nextConfig;
