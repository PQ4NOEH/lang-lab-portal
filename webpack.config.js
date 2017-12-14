var path = require("path");
module.exports = {
  entry: {
    app: ["./src/main.js"]
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  watch:true
};
