const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },

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