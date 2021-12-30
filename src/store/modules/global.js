/*
 * @Author: actions
 * @Date: 2021-11-27 16:21:27
 * @LastEditors: actions
 * @LastEditTime: 2021-12-30 17:57:50
 * @Description:
 * @FilePath: \template-vite\src\store\modules\global.js
 */

import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    count: 1,
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2
    },
  },
  actions: {
    add() {
      this.count++
    },
  },
})
