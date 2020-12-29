const port = process.env.PORT || 3000;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = () => ({
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: "[name].[hash].js",
  },
  devtool: "eval",
  module: {
    rules: [
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localsConvention: "camelCase",
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  watch: false,
  devServer: {
    host: "localhost",
    port: port,
    hot: true,
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/',
    lazy: true,
    filename: 'main.js',
    watchOptions: {
      poll: true
    }
  },
});
