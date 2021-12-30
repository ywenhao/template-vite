/*
 * @Author: actions
 * @Date: 2021-11-27 18:09:30
 * @LastEditors: actions
 * @LastEditTime: 2021-11-28 18:11:49
 * @Description:
 * @FilePath: \template-vite\src\store\modules\user.js
 */

import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
  }),
  getters: {},
  actions: {
    setToken(payload) {
      this.token = payload
    },
  },
})
