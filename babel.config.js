module.exports = function (api) {
  api.cache(true);

  const presets = ["@babel/preset-env", "@babel/preset-react"];

  const plugins = [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-runtime",
    [
      "babel-plugin-react-css-module",
      {
        webpackHotModuleReloading: true
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
