/*
 * @Author: actions
 * @Date: 2021-11-27 14:42:11
 * @LastEditors: actions
 * @LastEditTime: 2021-12-30 17:57:00
 * @Description:
 * @FilePath: \template-vite\src\main.js
 */
import { createApp } from 'vue'
import './assets/scss/index.scss'
import App from './App.vue'
import router from './router'
import { setupStore } from './store'

const app = createApp(App)
app.use(router)
app.use(setupStore)
app.mount('#app')
