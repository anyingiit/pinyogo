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
        // 对.m.js .m.jsx .js .jsx文件匹配并进行处理
        test: /\.m?jsx?$/,
        exclude: /node_modules/,//排除对node_modules目录内文件的处理
        use: {
          loader: "babel-loader",// 使用babel对上述文件进行处理
          options: {// babel具体如何处理呢? 这里进行配置babel处理上述文件的方法
            plugins: [],// babel插件, 有各种各样的插件, 比如对es6转换为es5的插件, 比如有对jsx处理的插件, 比如有对TypeScript处理的插件
            presets: ['@babel/preset-env', "@babel/preset-react"] // 可以理解为捆绑包, 捆绑包内有一系列babel插件
            // 使用的捆绑包(presets)如下:
            //    @babel/preset-env 处理js文件插件, 能够处理ES6以及更高级语法
            //    @babel/preset-react 处理react相关, 主要是jsx
          }
        }
      },
      {
        // 对css文件启用loader, 使其能够在js文件中使用import等语法引入到js文件, 引入后可以直接使用
        //      使用方法: 直接在相应标签使用className标签属性, 传入字符串, 值为类名
        //  style-loader 和 css-loader
        //      css-loader: 作用主要是解析css文件, 引入后会返回css文件的字符串, 并且能够处理css中的@import和url语句，可以处理css-modules，并将结果作为一个js模块返回
        //      style-loader: 经过css-loader的转译，我们已经得到了完整的css样式代码，style-loader的作用就是将结果以style标签的方式插入DOM树中(注意, 是在运行时动态插入的, 不是在构件时插入的).
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