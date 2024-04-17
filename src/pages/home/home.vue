<script setup lang="ts">
import { ref } from 'vue'
import Header from '@/components/common/Header.vue'

const keyword = ref<string>('')

const search = (value: string) => {
  console.log(value)
}
</script>

<template>
  <tm-app>
    <Header />
    <view class="main">
      <tm-input v-model="keyword" :searchWidth="120" @search="search" prefix="tmicon-search" searchLabel="搜索" />
    </view>
  </tm-app>
</template>

<style scoped lang="scss">
.main {
  position: relative;
  padding: 0 20px;
  margin-top: 100px;
  height: 100vh;
  background-color: #fff;
}
</style>
