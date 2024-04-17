<script lang="ts" setup>
import { onHide, onLaunch, onShow, onTabItemTap } from '@dcloudio/uni-app'
onLaunch(() => {
  // 获取胶囊按钮的坐标
  const get_Menu = uni.getStorageSync('MenuButton')
  if (!get_Menu) {
    const res = uni.getMenuButtonBoundingClientRect()
    uni.setStorageSync('MenuButton', res)
  }
  // 监听页面跳转变化
  const watchRouter = () => {
    console.log('路由进行跳转')
  }
  uni.addInterceptor('navigateTo', {
    // 监听跳转
    success() {
      watchRouter()
    },
  })
  uni.addInterceptor('redirectTo', {
    // 监听关闭本页面跳转
    success() {
      watchRouter()
    },
  })
  uni.addInterceptor('switchTab', {
    // 监听tabBar跳转
    success() {
      watchRouter()
    },
  })
  uni.addInterceptor('navigateBack', {
    // 监听返回
    success() {
      watchRouter()
    },
  })
})
onShow(() => {})
onHide(() => {})
onTabItemTap((e) => {
  console.log(e.pagePath)
})
</script>

<style>
/* #ifdef APP-PLUS-NVUE */
@import './tmui/scss/nvue.css';
/* #endif */
/* #ifndef APP-PLUS-NVUE */
@import './tmui/scss/noNvue.css';
/* #endif */
</style>
