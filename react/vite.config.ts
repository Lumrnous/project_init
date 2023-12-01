import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import requireTransform from 'vite-plugin-require-transform';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    requireTransform({
      fileRegex: /.ts$|.tsx$/
    }),
  
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build:{
    chunkSizeWarningLimit: 1600,   // 如果你打包的时候， 有文件超过了 1600k, 项目打包户提示错误
    rollupOptions:{
      output:{
        // echarts , react-dom , react, axios
        manualChunks:{
           echarts:['echarts','react-echarts-core'],
           immer:['immer','immutable','use-immer'],
           react:['react','react-dom'],
           axios:['axios']
        }
      }
    }
  },
  server:{
    host:'0.0.0.0',
    port:8081,  //端口号
    open:true,   //是否项目启动就在浏览器打开
    proxy:{
      // '/test':{
      //   target:'https://test.iot.store',//后端真实服务器地址
      // },
      //看到：  http://localhost:8081/api/getAllChcsService
      // 实际： http://127.0.0.1:3000/api/getAllChcsService
      '/api':{
        target:'http://127.0.0.1:3000',//后端真实服务器地址
        changeOrigin:true,//允许跨域
      }
    }
  },
})
