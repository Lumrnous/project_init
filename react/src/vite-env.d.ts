/// <reference types="vite/client" />
declare module 'vite-plugin-require-transform' {
    const value: unknown; // 根据模块的实际导出类型进行修改
    export default value;
  }
  