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

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/beforeAndAfter',
        destination: '/before-and-after',
        permanent: true,
      },
      // Old /areas hub → /locations hub
      {
        source: '/areas',
        destination: '/locations',
        permanent: true,
      },
      // Old /areas/:city → /locations/:city
      {
        source: '/areas/:city',
        destination: '/locations/:city',
        permanent: true,
      },
      // Old /services-near-you hub → /locations hub
      {
        source: '/services-near-you',
        destination: '/locations',
        permanent: true,
      },
      // Old flat slugs: /services-near-you/collision-repair-garland-tx → /locations/garland/collision-repair
      { source: '/services-near-you/collision-repair-:city-tx', destination: '/locations/:city/collision-repair', permanent: true },
      { source: '/services-near-you/custom-paint-refinishing-:city-tx', destination: '/locations/:city/custom-paint-refinishing', permanent: true },
      { source: '/services-near-you/auto-restoration-:city-tx', destination: '/locations/:city/auto-restoration', permanent: true },
      { source: '/services-near-you/paintless-dent-repair-:city-tx', destination: '/locations/:city/paintless-dent-repair', permanent: true },
      
      // Redirect deprecated services to /services
      { source: '/services-near-you/headlight-restoration-:city-tx', destination: '/services', permanent: true },
      { source: '/services-near-you/lease-return-reconditioning-:city-tx', destination: '/services', permanent: true },
      { source: '/locations/:city/headlight-restoration', destination: '/services', permanent: true },
      { source: '/locations/:city/lease-return-reconditioning', destination: '/services', permanent: true },
      { source: '/services/headlight-restoration', destination: '/services', permanent: true },
      { source: '/services/lease-return-reconditioning', destination: '/services', permanent: true },
      
      // New services redirects if old slugs exist
      { source: '/services-near-you/scratch-paint-chip-repair-:city-tx', destination: '/locations/:city/scratch-paint-chip-repair', permanent: true },
      { source: '/services-near-you/bumper-repair-:city-tx', destination: '/locations/:city/bumper-repair', permanent: true },
      { source: '/services-near-you/adas-calibration-:city-tx', destination: '/locations/:city/adas-calibration', permanent: true },
      { source: '/services-near-you/rust-repair-:city-tx', destination: '/locations/:city/rust-repair', permanent: true },
      { source: '/services-near-you/auto-insurance-claim-repair-:city-tx', destination: '/locations/:city/auto-insurance-claim-repair', permanent: true },
      { source: '/services-near-you/hail-repair-:city-tx', destination: '/locations/:city/hail-repair', permanent: true },
    ];
  },
};

export default nextConfig;
