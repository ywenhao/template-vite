/*
 * @Author: actions
 * @Date: 2021-12-30 17:10:27
 * @LastEditTime: 2022-01-04 09:48:39
 * @LastEditors: actions
 * @Description:
 * @FilePath: \template-vite\windi.config.js
 */
import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  extract: {
    include: ['src/**/*.{html,vue,jsx,tsx,svelte}'],
  },
})
