<!--
 * @Author: actions
 * @Date: 2021-11-27 15:52:38
 * @LastEditors: actions
 * @LastEditTime: 2021-12-30 17:57:14
 * @Description: 
 * @FilePath: \template-vite\src\layouts\base\Header.vue
-->

<template>
  <div class="base-header">Header doubleCount: {{ doubleCount }}</div>
</template>

<script setup>
import { useGlobalStore } from '@/store/modules/global'
import { storeToRefs } from 'pinia'

const globalStore = useGlobalStore()

const { doubleCount } = storeToRefs(globalStore)
</script>

<style lang="scss" scoped></style>
