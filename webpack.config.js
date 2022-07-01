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
      // 对于css中url处理图像流程和在jsx文件中引入图像的处理过程详见图片 根目录/document/关于webpack对于引入图片和css中url引入图片的处理过程.jpg
      {
        // 对css文件启用loader, 使其能够在js文件中使用import等语法引入到js文件, 引入后可以直接使用
        //      使用方法: 直接在相应标签使用className标签属性, 传入字符串, 值为类名
        //  style-loader 和 css-loader
        //      css-loader: 作用主要是解析css文件, 引入后会返回css文件的字符串, 并且能够处理css中的@import和url语句，也可以处理css-modules，并将结果作为一个js模块返回
        //      style-loader: 经过css-loader的转译，我们已经得到了完整的css样式代码，style-loader的作用就是将结果以style标签的方式插入DOM树中(注意, 是在运行时动态插入的, 不是在构件时插入的).
        test: /\.css$/,
        use: [
          // 对css文件使用如下插件进行处理
          // 对于loader来说, 顺序是是十分重要的, 很多loader的输入实际上就是另一个插件的输出, 另外, 处理的顺序相对于代码的编写顺序的逆序的, 所以我们需要正确的从最终步骤到第一步编写代码
          //    而对于以下处理css的插件就是顺序处理典型的诠释
          //      style-loader是将字符串格式的css插入到最终页面的head表中的style标签, 而字符串格式的css不会凭空而来, 需要其他插件对css文件转换成字符串格式的css
          //      而css-loader就是一款能够对文件格式转换为字符串的插件, 并且该插件还能正确的处理@import, url(""), 对于url("图像")来说, 其值会被转换图像处理后的最终url, 对于@import来说, 其能正确的找到目标文件并将其添加至使用@import的文件中, 并最终整个文件还是会变成包含该文件所有css的字符串
          // 再次强调, 处理的顺序非常重要, 对于js中引入css的行为来说, 其会被两个loader捕获, 分别是`style-loader`以及`css-loader`, 然后其就开始调用链, 从后往前
          //      css文件 源文件-> css-loader  处理@import以及url("")并且最终得到所有css文件的字符串并且传递给下一个插件-> style-loader 获取到css字符串后其在客户端渲染时将css字符串插入到html的head的不同style中 -> 使用head中的style
          //      而对于url("图像")来说, 其会被先将其移交给能够处理这些资源的规则, 按照本案例来说, 就是下方的处理规则`{test: /\.(png|jpg|jpeg|gif)$/i, type: "asset/resource"}`, 其在处理完成后会返回图像最终处理的路径, 这个路径会被移交到当前链式处理的一环, 即`css-loader`, 然后`css-loader`使用这个路径对刚刚的`url("图像路径")的图像路径进行替换, 并将其添加到马上要移交到style-loader的css字符串中
          //        对于字体啊等其他文件也是同理, 会被移交到能够处理这些文件的规则捕获并且使用其中的loader进行处理
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          }
        ],
      },
      {
        // webpack5 内置特性 Asset Modules
        // 对png jpg jpeg gif等资源文件启用内置Asset Modules处理规则`asset/resource`, 这样可以在被webpack这一类资源文件进行处理(不论是通过js还是css), 实际上引用的结果就是其最终处理完毕的路径(即import abc from '../img/abc.png'; 实际上abc是字符串, webpack会复制这些文件到输出目录, 并且最终返回其图片相对于bundle.js的位置)
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      },
      {
        // webpack5 内置特性 Asset Modules
        // 和上方同理, 能够返回传入文件的最终路径到下一个处理链中
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource"
      }
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