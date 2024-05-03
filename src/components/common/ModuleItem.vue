<script setup lang="ts">
defineProps<{
  img: string
  name: string
  desc: string
}>()
</script>

<template>
  <view class="moduleitem-wrapper">
    <tm-image preview :width="60" :height="60" :src="img" />
    <view class="content">
      <text>{{ name }}</text>
      <text>{{ desc }}</text>
    </view>
  </view>
</template>

<style scoped lang="scss">
.moduleitem-wrapper {
  position: relative;
  width: 130px;
  height: 50px;
  border-radius: 16px;
  border: 1px solid rgba(245, 221, 125, 1);
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  .content {
    display: flex;
    flex-direction: column;
    height: 60rpx;
    text {
      &:nth-child(1) {
        font-size: 28rpx;
        color: rgba(131, 115, 199, 1);
      }
      &:nth-child(2) {
        font-size: 24rpx;
        color: rgba(151, 152, 153, 1);
      }
    }
  }
}
</style>
