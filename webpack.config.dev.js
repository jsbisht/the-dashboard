const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/lib/index.js"),
  output: {
    path: path.resolve(__dirname, "./dist/lib"),
    filename: "index.js",
    library: "",
    libraryTarget: "commonjs"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {}
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  }
};
