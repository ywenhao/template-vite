/*
 * @Author: actions
 * @Date: 2021-11-27 16:11:55
 * @LastEditors: actions
 * @LastEditTime: 2021-12-30 17:57:47
 * @Description:
 * @FilePath: \template-vite\src\store\index.js
 */
import { createPinia } from 'pinia'

const store = createPinia()

export const setupStore = (app) => {
  app.use(store)
}
