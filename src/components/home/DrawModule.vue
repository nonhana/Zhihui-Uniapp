<script setup lang="ts">
import EditModule from '@/static/svgs/edit-module.svg'
import GraphModule from '@/static/svgs/graph-module.svg'
import ModuleItem from '@/components/common/ModuleItem.vue'
</script>

<template>
  <view class="drawmodule-wrapper">
    <view class="header">
      <text>绘画板块</text>
      <text>查看更多</text>
    </view>

    <view class="content">
      <ModuleItem :img="EditModule" name="AI引导" desc="涂鸦" />
      <ModuleItem :img="GraphModule" name="充实的素材库" desc="拼贴" />
    </view>
  </view>
</template>

<style scoped lang="scss">
.drawmodule-wrapper {
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
