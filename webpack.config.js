// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/popup/Popup.js",
  output: {
    path: path.resolve(__dirname, "build/popup"),
    filename: "popup.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
