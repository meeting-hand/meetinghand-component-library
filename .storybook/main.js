const path = require("path");

module.exports = {
  stories: ["../packages/**/*.stories.@(js|mdx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-links"],
  //   babel: async (options) => ({
  //     ...options,
  //     plugins: [
  //       "@babel/plugin-proposal-class-properties",
  //       "@babel/plugin-proposal-private-methods",
  //     ]
  //   }),
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../packages/"),
    });

    return config;
  },
};
