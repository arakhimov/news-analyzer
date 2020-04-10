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
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.ts']
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
        test: /\.(png|jpe?g|gif|ico|svg)$/, // изображения
        use: [
          'file-loader?name=./images/[name].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {}
          },
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/, // шрифты
        loader: 'file-loader?name=./fonts/[name].[ext]'
      }
    ]
  },
  plugins: [ 
    new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
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