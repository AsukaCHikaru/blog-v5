import Webpack from "webpack";
import { resolve } from "path";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

const config: Webpack.Configuration = {
  context: resolve(__dirname, "src"),
  entry: "./index.tsx",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.client.json",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    plugins: [
      new TsconfigPathsPlugin({ configFile: "./tsconfig.client.json" }),
    ],
  },
};

export default config;
