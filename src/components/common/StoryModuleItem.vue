<script setup lang="ts">
import plus from '@/static/svgs/plus.svg'

defineProps<{
  img: string
  name: string
  desc: string
  mainColor: string
}>()
</script>

<template>
  <view :style="{ backgroundColor: mainColor + '4c' }" class="storymoduleitem-wrapper">
    <view class="cover">
      <image mode="aspectFit" :src="img" />
    </view>
    <view class="content">
      <text>{{ name }}</text>
      <text :style="{ color: mainColor + '33' }">{{ desc }}</text>
    </view>
    <view :style="{ backgroundColor: mainColor + 'cc' }" class="plus-button">
      <tm-image :width="24" :height="24" :src="plus" />
    </view>
  </view>
</template>

<style scoped lang="scss">
.storymoduleitem-wrapper {
  position: relative;
  width: 130px;
  height: 214px;
  border-radius: 16px;
  padding: 16px;
  .cover {
    position: absolute;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    image {
      width: 147px;
      height: 147px;
    }
  }
  .content {
    position: absolute;
    bottom: 32px;
    display: flex;
    flex-direction: column;
    height: 44px;
    color: #1b1c1e;
    text {
      &:nth-child(1) {
        font-size: 28rpx;
      }
      &:nth-child(2) {
        font-size: 24rpx;
      }
    }
  }
  .plus-button {
    position: absolute;
    right: 16px;
    bottom: 16px;
    height: 36px;
    width: 36px;
    border-radius: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
