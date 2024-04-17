<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { UserInfo } from '@/types'

const menu_top = ref<string>('')
const menu_height = ref<string>('')

const userInfo = ref<UserInfo>({
  user_id: 1,
  user_name: 'non_hana',
  user_avatar: 'https://avatars.githubusercontent.com/u/22167538?v=4',
})

onMounted(() => {
  const MenuButton = uni.getStorageSync('MenuButton')
  menu_top.value = `${MenuButton.top}px`
  menu_height.value = `${MenuButton.height}px`
})
</script>

<template>
  <view class="header-wrapper">
    <image class="avatar" :src="userInfo.user_avatar" mode="aspectFill" />
    <view class="container">
      <text class="note">早上好鸭</text>
      <text class="name">{{ userInfo.user_name }}</text>
    </view>
  </view>
</template>

<style scoped lang="scss">
.header-wrapper {
  position: absolute;
  top: v-bind('menu_top');
  height: v-bind('menu_height');
  line-height: v-bind('menu_height');
  padding-left: 20px;
  display: flex;
  align-items: center;

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .note {
      font-size: 14px;
      color: #999;
    }

    .name {
      font-size: 16px;
      color: #333;
    }
  }
}
</style>
