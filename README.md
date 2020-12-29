# Base React Project Setup

## Project Setup

This project assumes you have [Node.js v14](http://nodejs.org/) or greater installed which comes
the latest [yarn](https://classic.yarnpkg.com/en/) 1.22.5 or greater installed as well.

## Getting Started

1. Install dependencies: `yarn install`
2. Run `yarn dev`

## Dependencies

- [Babel](https://babeljs.io/): compiles recent js to js compatible with old browsers
- [babel-loader](https://github.com/babel/babel-loader): needed to use Babel with Webpack
- [compression-webpack-plug](https://github.com/webpack-contrib/compression-webpack-plugin): compresses webpack bundles
- [css-loader](https://github.com/webpack-contrib/css-loader): needed by Webpack to compile CSS in one bundle
- [ESLint](https://eslint.org/): Linter for JavaScript
- [file-loader](https://github.com/webpack-contrib/file-loader): resolves import and require() on a file for Webpack
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin): appends the styles and scripts tags of Webpack bundles in the html files
- [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/): extracts CSS into separate files.
- [Prettier](https://prettier.io/): Code formatter
- [prop-types](https://github.com/facebook/prop-types): Type checking for React props
- [React](https://fr.reactjs.org/): JS framework
- [react-router-dom](https://github.com/ReactTraining/react-router): needed to use routes in React
- [style-loader](https://github.com/webpack-contrib/style-loader): needed by Webpack to inject CSS into the DOM
- [Webpack](https://webpack.js.org/): bundler
