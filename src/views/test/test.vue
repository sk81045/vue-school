<template>
  <div class="dashboard-container">
    <aside>教育局简介</aside>
    <div class="dashboard-text">
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;邢台市教育局，位于邢台市钢铁北路555号。综合管理全市高等教育、中等教育、基础教育、职业技术教育、成人教育、师范教育、幼儿教育、特殊教育等工作；负责全市普及九年义务教育、扫除青壮年文盲工作，并负责督导与评估等。
     </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 20px;
    line-height: 46px;
  }
}
aside {
    background: #eef1f6;
    padding: 8px 24px;
    margin-bottom: 20px;
    border-radius: 2px;
    display: block;
    line-height: 32px;
    font-size: 16px;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    color: #2c3e50;
    -webkit-font-smoothing: antialiased;
    font-weight: bold;
}
</style>
