const path = require("path")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, 'src/js/main.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash:8].js'
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
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
      },
      {
        // 对png jpg jpeg gif等资源文件启用内置处理规则`asset/resource`, 这样使用require引入此类文件时, webpack能够正确处理并且能够将其打包至输出文件夹
        // *另外, 对于css文件样式url语法引入图片, css, 字体等资源时, 无需使用任何loader, webpack5自己能够正确的处理并引用
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
}