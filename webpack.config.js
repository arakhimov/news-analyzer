const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    about: './src/js/about/index.js',
    analytics: './src/js/analytics/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash].js',
  },
  module: {
    rules: [
      { 
        test: /\.js$/, // все js файлы
        use: { loader: "babel-loader" }, // весь JS обрабатывается пакетом babel-loader
        exclude: /node_modules/ // исключает папку node_modules
      },
      {
        test: /\.css$/, // все CSS-файлы
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'] // все CSS обрабатываются css-loader и postcss-loader
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/, // изображения css
        include: /background/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images',
          publicPath: '../images',
        }
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/, // изображения html
        include: /regular/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images',
          publicPath: './images',
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/, // шрифты
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            outputPath: 'fonts',
            publicPath: '../fonts',
        }
      }
    ]
  },
  plugins: [ 
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: 'index.html',
      // minify: {
      //   collapseWhitespace: true,
      //   removeComments: true
      // }
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/about.html',
      filename: 'about.html',
      // minify: {
      //   collapseWhitespace: true,
      //   removeComments: true
      // }
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/analytics.html',
      filename: 'analytics.html',
      // minify: {
      //   collapseWhitespace: true,
      //   removeComments: true
      // }
    }),
    new WebpackMd5Hash()
  ]
}