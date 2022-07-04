// 该文件名时提前定义好的, 该文件会被tsconfig.json(即typescript包)自动识别并且导入
// 该文件的作用就是定义TypeScript内建规则不包括的文件类型, 以及定义引入他们时候的类型
declare module '*.scss';
declare module '*.scss' {
  const content: Record<string, undefined>;
  export default content;
}

declare module '*.sass';
declare module '*.scss' {
  const content: Record<string, undefined>;
  export default content;
}