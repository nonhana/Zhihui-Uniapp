<script setup lang="ts">
import HomePic1 from '@/static/imgs/home-pic1.png'
import HomePic2 from '@/static/imgs/home-pic2.png'
import DrawModule from '@/components/home/DrawModule.vue'
import StoryModule from '@/components/home/StoryModule.vue'

import { ref } from 'vue'
import Header from '@/components/common/Header.vue'

const keyword = ref<string>('')
const imgList = [HomePic1, HomePic2]

const search = (value: string) => {
  console.log(value)
}
</script>

<template>
  <tm-app>
    <Header />
    <view class="main">
      <view class="input">
        <tm-input v-model="keyword" :height="80" :searchWidth="120" @search="search" prefix="tmicon-search" searchLabel="搜索" />
      </view>
      <tm-carousel autoplay :margin="[0, 20]" :round="3" :width="670" :height="300" :list="imgList" />
      <DrawModule />
      <StoryModule />
    </view>

    <view class="AI-button">
      <text>AI</text>
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

  .input {
    margin-top: 20px;
  }
}

.AI-button {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  width: 44px;
  height: 44px;
  border-radius: 222px;
  opacity: 1;
  background: #f5dd7d;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
}
</style>
