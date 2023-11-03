// /* eslint-disable func-names, no-useless-escape, object-shorthand */
// const path = require('path');

// const os = require('os');

// // Get paths.
// const paths = require('../core/paths');

// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const baseConfig = {
//   devtool: false,
//   externals: {},
//   module: {
//     rules: [
//       {
//         test: /\.(css|scss)$/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           {
//             loader: 'css-loader',
//           },
//         ],
//         include: [paths.src],
//       },
//       {
//         test: /\.(js|jsx|ts|tsx)$/,
//         use: [
//           {
//             loader: 'eslint-loader',
//           },
//         ],
//         enforce: 'pre',
//         include: [paths.src],
//         exclude: [paths.libs],
//       },
//       {
//         test: /\.(js|jsx)$/,
//         use: [
//           {
//             loader: 'babel-loader',
//             options: {
//               cacheDirectory: path.resolve(os.tmpdir(), 'babel-loader'),
//             },
//           },
//         ],
//         include: [paths.src],
//         exclude: [paths.libs],
//       },
//       {
//         test: /\.(ts|tsx)$/,
//         use: [
//           {
//             loader: 'babel-loader',
//             options: {
//               cacheDirectory: path.resolve(os.tmpdir(), 'babel-loader'),
//             },
//           },
//           'ts-loader',
//         ],
//         include: [paths.src],
//         exclude: [paths.libs],
//       },
//       {
//         test: /\.(eot|ttf|woff|woff2)(\?.+)?$/,
//         use: ['file-loader'],
//         include: [paths.src],
//       },
//       {
//         test: /\.svg$/,
//         use: ['@svgr/webpack', 'file-loader'],
//         include: [paths.img, paths.libs],
//       },
//       {
//         test: /\.(png|jpg|jpeg|gif|ttf)(\?.+)?$/,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 8192,
//             },
//           },
//         ],
//         include: [paths.img, paths.libs],
//       },
//       {
//         // Add support for mjs in framer-motion.
//         type: 'javascript/auto',
//         test: /\.mjs$/,
//         use: [
//           {
//             loader: 'babel-loader',
//             options: {
//               cacheDirectory: path.resolve(os.tmpdir(), 'babel-loader'),
//             },
//           },
//         ],
//         include: /framer-motion/,
//       },
//     ],
//   },
//   resolve: {
//     symlinks: false,
//     cacheWithContext: false,
//     extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
//     alias: {
//       '@helpers': paths.helpers,
//       '@stories': paths.stories,
//       '@img': paths.img,
//       '@core': paths.core,
//       '@hoc': paths.hoc,
//       '@hooks': paths.hooks,
//       '@mockApi': paths.mockApi,
//       '@fonts': paths.fonts,
//       '@state': paths.state,
//       // TODO: remove legacy references
//       '@legacy': paths.legacy,
//       '@state': paths.state,
//       '@libs': paths.libs,
//       '@decorators': paths.decorators,
//     },
//   },
//   resolveLoader: {
//     modules: ['node_modules', path.resolve(__dirname, 'loaders')],
//   },
// };

// module.exports = baseConfig;
