/** @type {import('next').NextConfig} */
const packageJson = require("./package.json");
const packageJsonDeps = packageJson.dependencies;
const path = require("path");

module.exports = {
  reactStrictMode: true,
  webpack5: true,
  webpack(config, options) {
    const { ModuleFederationPlugin } = options.webpack.container;
    const { isServer } = options;

    config.plugins.push(
      new ModuleFederationPlugin({
        name: "container",
        remotes: {
          dashboard: "dashboard@http://localhost:8083/remoteEntry.js",
        },
        shared: {
          ...packageJsonDeps,
          react: {
            singleton: true,
            eager: true,
            requiredVersion: packageJsonDeps.react,
          },
          "react-dom": {
            singleton: true,
            eager: true,
            requiredVersion: packageJsonDeps["react-dom"],
          },
        },
      })
    );

    return config;
  },
};
