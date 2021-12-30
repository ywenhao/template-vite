/*
 * @Author: actions
 * @Date: 2021-11-27 16:32:35
 * @LastEditors: actions
 * @LastEditTime: 2021-12-30 17:57:18
 * @Description:
 * @FilePath: \template-vite\src\utils\request.js
 */

import axios from 'axios'
import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()
const { baseURL, timeout } = window.$config.api || {}
const api = axios.create({
  withCredentials: true,
  baseURL,
  timeout,
})

api.interceptors.request.use(
  (config) => {
    const token = userStore.token
    if (token) {
      config.headers.token = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => {
    const { data } = response
    if (data.code == 200) {
      return data
    } else {
      return Promise.reject(new Error(data.message))
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default api
