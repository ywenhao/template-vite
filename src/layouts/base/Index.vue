<!--
 * @Author: actions
 * @Date: 2021-11-27 15:52:31
 * @LastEditors: actions
 * @LastEditTime: 2021-12-30 17:57:16
 * @Description: 
 * @FilePath: \template-vite\src\layouts\base\Index.vue
-->

<template>
  <div class="base-root">
    <Header></Header>
    <slot></slot>
  </div>
</template>

<script setup>
import Header from './Header.vue'
</script>

<style lang="scss" scoped></style>
