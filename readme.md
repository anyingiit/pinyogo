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