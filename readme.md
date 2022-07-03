# 开发和构建

## 开发

```shell
yarn install
yarn dev
yarn test
```

## 构建

```shell
yarn install
yarn build
```

## 目录

```shell
docs 存放webpack打包后的可部署文件, 用于GitHub Page展示
documents 存放项目静态资源库, 页面设计图png以及psd
scr 项目代码
  components react组件, 内部每一个文件都是一个组件
    commons 通用组件
    ... 完整页面组件
  css 存放样式
    base 所有页面的基础样式, 如全局取消margin设定, 全局通用颜色等
    commons 通用组件的样式文件
    ... 根目录文件: 组件样式文件
  entry 存放用于webpack打包的入口文件 
  fonts 存放字体
  imgs 用于存放页面的基础图片, 如背景等
  template 用于承载react组件的模板页面
  upload 存放业务相关图片
.gigignore git忽略提交文件或目录
package.json npm package的配置文件, 存放了该项目使用了哪些npm模块清单, 项目基本信息, 项目快捷运行脚本
readme.md 项目帮助文件
tsconfig.json 配置tsc --watch 检查规则
webpack.config.js 配置webpack打包
yarn.lock yarn保存每个依赖是哪个版本
```

TODO

- [ ] 编写readme.md
    - [ ] 主要描述更目录下文件夹是干什么用的
    - [ ] 描述项目应用了哪些技术, 哪些地方设计的比较好, 例如Logo模块
    - [ ] [次要] 描述src下文件夹是干什么用的
- [ ] 使用css module解决目前css命名冲突问题
- [ ] [次要] 支持TypeScript

## 关于babel与TypeScript的关系

一般来说, 编译和类型检查是同时进行的, 这样也没什么问题, 但是会造成编译非常慢
为了解决这个问题, 使用了现行方案
---
在开发中, 第一个编译或者后续执行刷新后的每一次自动刷新
都会同时触发两个进程的操作

1. tsc --watch
2. webpack --config webpack.config.js

第一个负责ts的类型检查(其会遵循`根目录/tsconfig.json`中的规则进行检查)
第二个负责编译

在实际开发时, 大部分时间关注tsc --watch的进程即可, webpack --config webpack.config.js 只需要静默运行 摸摸编译即可

也就是说, 现在类型检查和编译没有关系了

那么也就是说在webpack.config.js中, 根本无需`ts-loader`, 在遍历流程中, 只需要`babel`即可

## 关于支持TypeScript + React的babel的运行流程

1. 解析`.tsx`中所有`jsx`, 并将解析后的代码交给下一个流程
2. 解析移交代码中的`TypeScript`为`ES6`标准的`JavaScript`, 并将解析后的代码交给下一个流程
3. 解析移交代码`ES6`标准的`JavaScript`, 解析为`ES5`标准的`JavaScript`