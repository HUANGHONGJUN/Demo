import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        // port: '3000', //默认值5173
        // open: true, //自动打开 
        proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
          // 正则表达式写法
          '^/api': {
            target: 'http://192.168.101.8:8888', // 后端服务实际地址
            changeOrigin: true, //开启代理
            rewrite: (path) => path.replace(/^\/api/, '')
          }
        }
      },
      // resolve:{
      //   alias:{
      //     '@':path.resolve(__dirname,'./public')
      //   }
      // }
})
