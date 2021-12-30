/*
 * @Author: actions
 * @Date: 2021-11-27 15:47:04
 * @LastEditors: actions
 * @LastEditTime: 2021-12-30 17:57:44
 * @Description: 路由
 * @FilePath: \template-vite\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
