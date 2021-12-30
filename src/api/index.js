/*
 * @Author: actions
 * @Date: 2021-11-27 17:10:58
 * @LastEditors: actions
 * @LastEditTime: 2021-11-27 19:07:35
 * @Description:
 * @FilePath: \template-vite\src\api\index.js
 */

import api from '@/utils/request'

export function test(data) {
  return api.post('/aaa', data, { params: { isHide: 0 } })
}
