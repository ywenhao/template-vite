/*
 * @Author: actions
 * @Date: 2021-11-27 14:42:11
 * @LastEditors: actions
 * @LastEditTime: 2022-01-04 09:39:51
 * @Description:
 * @FilePath: \template-vite\vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/_mixin.scss";', // 添加公共样式
      },
    },
  },
})
