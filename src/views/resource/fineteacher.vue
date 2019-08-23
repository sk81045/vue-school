<template>
  <div class="container">
    <div class="iconfon-container pull-height">
     <h3 style="color:red;">修改./src/config/env.js中的iconfontVersion地址即可实时调用阿里云在线图标库</h3>
    <ul class="icon-list" >
        <li v-for="(o, index) in 14" :key="o" :offset="index > 0 ? 2 : 0">
<div class="list">         
 <img src="https://element.eleme.cn/2.0/static/hamburger.50e4091.png" class="image">
 <span class="icon-name">icon-daohanglanmoshi02</span>
</div>
        </li>
    </ul>
    <img class="iconfon-explace" src="" alt="">
</div>
  </div>
</template>


<script>
export default {
  name: 'iconfont',
  data() {
    return {}
  },
  created() {},
  mounted() {},
  props: [],
  methods: {},
  components: {}
}
</script>

<style lang="scss" scoped>
.iconfon-container {
  padding: 15px;
}
.iconfon-container > ul.icon-list {
  margin: 15px auto;
  overflow: hidden;
  list-style: none;
  padding: 0;
  display: table;
  border: 1px solid #eaeefb;
  border-radius: 4px;
}

.iconfon-container .content > ul:not(.timeline) {
  margin: 10px 0;
  padding: 0 0 0 20px;
  font-size: 14px;
  color: #5e6d82;
  line-height: 2em;
}
.icon-list li {
  float: left;
  width: 13%;

  height: 290px;
  line-height: 120px;
  color: #666;
  font-size: 13px;
  transition: color 0.15s linear;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin-right: -1px;
  margin-bottom: -1px;
}
.icon-list li span {
  display: inline-block;
  line-height: normal;
  vertical-align: middle;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  color: #99a9bf;
}
.icon-list li i {
  display: block;
  font-size: 36px !important;
  margin-bottom: 15px;
  color: #606266;
}
.icon-list li .icon-name {
  display: inline-block;
  padding: 0 12px;
  font-size: 12px !important;
  height: 1em;
  color: #606266;
}
.iconfon-explace {
  width: 100%;
}
</style>

<style>
  .el-col-8 {
    width: 99.33333%;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>