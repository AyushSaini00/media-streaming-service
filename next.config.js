/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        // pathname: "a/**",
      },
      {
        protocol: "https",
        hostname: "scontent.fblr1-4.fna.fbcdn.net",
        port: "",
        // pathname: "a/**",
      },
    ],
  },
};

module.exports = nextConfig;
