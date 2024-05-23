/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'dclaevazetcjjkrzczpc.supabase.co',
  //       // port: '',
  //       // pathname: '/account123/**',
  //     },
  //   ],
  // },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        // protocol: 'https',
        // hostname: 'https://source.unsplash.com/8gVv6nxq6gY/1080x800',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
