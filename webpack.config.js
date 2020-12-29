const webpack = require("webpack");
const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
// va chercher le mode de l'environnement dans la commande effectuée
const developmentConfig = require(`./build-utils/webpack.development.js`);
const productionConfig = require(`./build-utils/webpack.production.js`);

const commonConfig =  {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    //adds the created bundles between script tags in the output file
    new webpack.ProgressPlugin(),
    new ESLintPlugin({
      emitError: true,
      failOnError: true
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  optimization: {
    //creats also a bundle from vendors
    splitChunks: {
      // include all types of chunks
      chunks: "all",
    },
  },
};

//environment and presets arguments with their default values are given
module.exports = (env = "production") => {
  if(env.development) {
    return merge(commonConfig, developmentConfig);
  }else if (env.production) {
    return merge(commonConfig, productionConfig);
  } else {
    throw new Error('No matching configuration was found!');
  }
};
