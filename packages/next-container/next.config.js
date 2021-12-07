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
          dashboard: `dashboard@${domain}/dashboard/latest/remoteEntry.js`,
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
