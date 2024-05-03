<script setup lang="ts">
import StoryModuleItem from '../common/StoryModuleItem.vue'
import storyModule1 from '@/static/imgs/story-module1.png'
import storyModule2 from '@/static/imgs/story-module2.png'
</script>

<template>
  <view class="storymodule-wrapper">
    <view class="header">
      <text>故事板块</text>
      <text>查看更多</text>
    </view>

    <view class="content">
      <StoryModuleItem name="小星星睡着了" desc="它会发生什么呢" main-color="#FBCFE8" :img="storyModule1" />
      <StoryModuleItem name="小公主离开了城堡" desc="旷野会有蘑菇吗" main-color="#BDAFFA" :img="storyModule2" />
    </view>
  </view>
</template>

<style scoped lang="scss">
.storymodule-wrapper {
  position: relative;
  width: 684rpx;
  .header {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
    text {
      &:nth-child(1) {
        font-size: 36rpx;
        color: rgba(6, 22, 28, 1);
      }
      &:nth-child(2) {
        font-size: 28rpx;
        color: rgba(189, 175, 250, 1);
      }
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
  }
}
</style>
