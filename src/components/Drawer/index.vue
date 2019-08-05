<template>
 <div class="drawer">
 <div class="mask"></div>
 <!-- 不同方向使用不用的动画名称，如果抽屉在左边，则进入方向是朝 → -->
 <transition :name="this.direction=='left'?'slide-right':'slide-left'">
  <div
  class="drawer_body"
  v-if="drawerVisible"
  :style="{'right':direction=='right'?'0':'auto',
  'left':direction=='left'?'0':'auto',
  'width':width+'px',
  'background':background}"
  >drawer</div>
 </transition>
 </div>
</template>
<style scoped>
/*
* ...
*这里省略了写过的样式
*/
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
 will-change: transform;
 transition: transform 300ms;
 position: absolute;
 width: 100vw;
 height: 100vh;
 overflow: hidden;
}
.slide-right-enter,
.slide-right-leave-active {
 transform: translate(-100%, 0);
}
.slide-left-leave-active,
.slide-left-enter {
 transform: translate(100%, 0);
}
</style>

<script>
export default {
 props: {
 // 是否显示drawer
 drawerVisible: Boolean,
 // drawer方向
 direction: {
  type: String,
  validator(val) {
  return ["right", "left"].indexOf(val) !== -1;
  }
 },
 // drawer宽度
 width: {
  type: Number,
  default: 400
 },
 // drawer背景色
 background: {
  type: String,
  default: "#ffffff"
 },
 // 是否显示遮罩层
 mask: {
  type: Boolean,
  default: true
 }
 }
};
</script>
