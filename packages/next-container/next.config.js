/** @type {import('next').NextConfig} */
const packageJson = require("./package.json");
const packageJsonDeps = packageJson.dependencies;

const domain = process.env.DASHBOARD_APP_URL;

module.exports = {
  reactStrictMode: true,
  webpack5: true,
  webpack(config, options) {
    const { ModuleFederationPlugin } = options.webpack.container;

    config.plugins.push(
      new ModuleFederationPlugin({
        name: "container",
        remotes: {
          // dashboard: `dashboard@${domain}/dashboard/latest/remoteEntry.js`,
          // marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
          marketing: "marketing@http://localhost:8081/remoteEntry.js",
        },
        shared: {
          ...packageJsonDeps,
          react: {
            eager: true,
          },
          "react-dom": {
            eager: true,
          },
        },
      })
    );

    return config;
  },
};
