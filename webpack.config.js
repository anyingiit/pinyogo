const path = require("path")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  entry: path.resolve(__dirname, 'src/js/main.jsx'),
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.[hash:8].js'
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'docs'),
    },
    port: 9000
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // @babel/preset-env 处理js文件插件, 能够处理ES6以及更高级语法
            // @babel/preset-react 处理react相关, 主要是jsx
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          }
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/imgs'),
          to: 'imgs'
        },
        {
          from: path.resolve(__dirname, 'src/upload'),
          to: 'upload'
        },
        {
          from: path.resolve(__dirname, 'src/fonts'),
          to: 'fonts'
        },
        // {
        //   from: path.resolve(__dirname, 'src/css'),
        //   to: 'css'
        // }
      ]
    })
  ],
}