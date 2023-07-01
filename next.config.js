/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;

// next-dev.js:25 Warning: Prop `className` did not match. Server: "sc-ftvSup dBwQT" Client: "sc-bczRLJ ucJrK"
