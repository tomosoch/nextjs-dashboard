/** @type {import('next').NextConfig} */
const nextConfig = {};

// module.exports = nextConfig;
module.exports = {
    // ... rest of the configuration.
    output: 'standalone',
  }

// module.exports = {
//     generateBuildId: async () => {
//       // This could be anything, using the latest git hash
//       return process.env.GIT_HASH
//     },
//   }