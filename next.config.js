const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  register: true,
  skipWaiting: true,
  // disable: process.env.NODE_ENV === "development",
  // register: true,
  // scope: "/app",
  // sw: "service-worker.js",
  //...
});


module.exports = withPWA({
  reactStrictMode: true,
  // pwa: {
  //   dest: "public",
  //   register: true,
  //   skipWaiting: true,
  // },

  webpack(config, { dev }) {
    config.module.rules.push(
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
    )
    // if (dev) {
    //   config.watchOptions = {
    //     poll: 2000,
    //     aggregateTimeout: 600,
    //     ignored: '**/node_modules'
    //   }
    // }
    return config
  },

});