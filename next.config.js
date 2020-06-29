/* eslint-disable */
// Ref: https://github.com/cyrilwanner/next-compose-plugins
// Ref: https://nextjs.org/docs/api-reference/next.config.js/static-optimization-indicator

const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
  // Memo: take out pretender indicator when running `yarn dev`
  devIndicators: {
    autoPrerender: false,
  },
};

module.exports = withPlugins(
  [
    [
      withImages,
      {
        webpack(config, options) {
          return config;
        },
      },
    ],
    // [
    //   withTM,
    //   {
    //     transpileModules: ["gsap", "aos"],
    //   },
    // ],
  ],
  nextConfig
);
