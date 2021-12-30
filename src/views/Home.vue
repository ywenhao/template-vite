<!--
 * @Author: actions
 * @Date: 2021-11-27 15:49:14
 * @LastEditors: actions
 * @LastEditTime: 2021-12-30 17:57:20
 * @Description: 
 * @FilePath: \template-vite\src\views\Home.vue
-->

<template>
  <Base>
    <div class="home">home</div>
  </Base>
  <el-button type="success" @click="add">count:{{ count }}</el-button>
</template>

<script setup>
import Base from '../layouts/base/Index.vue'
import { useGlobalStore } from '@/store/modules/global'
import { computed } from 'vue'

const globalStore = useGlobalStore()

const count = computed(() => globalStore.count)
const add = () => {
  if (count.value >= 10) {
    globalStore.$reset()
  } else {
    globalStore.count++
  }
}
</script>

<style lang="scss" scoped></style>
