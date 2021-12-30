/*
 * @Author: actions
 * @Date: 2021-11-27 14:42:11
 * @LastEditors: actions
 * @LastEditTime: 2021-11-28 17:18:59
 * @Description:
 * @FilePath: \template-vite\vite.config.js
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/_mixin.scss";', // 添加公共样式
      },
    },
  },
});
