<template>
    <div class="app-container">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-message"></i> tab选项卡</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-tabs v-model="message">
                <el-tab-pane :label="`未读消息(${unread.length})`" name="first">
                    <el-table :data="unread" :show-header="false" style="width: 100%">
                        <el-table-column>
                            <template slot-scope="scope">
                                <span class="message-title">{{scope.row.title}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="date" width="180"></el-table-column>
                        <el-table-column width="120">
                            <template slot-scope="scope">
                                <el-button size="small" @click="handleRead(scope.$index)">标为已读</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="handle-row">
                        <el-button type="primary">全部标为已读</el-button>
                    </div>
                </el-tab-pane>
                <el-tab-pane :label="`已读消息(${read.length})`" name="second">
                    <template v-if="message === 'second'">
                        <el-table :data="read" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <template slot-scope="scope">
                                    <span class="message-title">{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" width="150"></el-table-column>
                            <el-table-column width="120">
                                <template slot-scope="scope">
                                    <el-button type="danger" @click="handleDel(scope.$index)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="handle-row">
                            <el-button type="danger">删除全部</el-button>
                        </div>
                    </template>
                </el-tab-pane>
                <el-tab-pane :label="`回收站(${recycle.length})`" name="third">
                    <template v-if="message === 'third'">
                        <el-table :data="recycle" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <template slot-scope="scope">
                                    <span class="message-title">{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" width="150"></el-table-column>
                            <el-table-column width="120">
                                <template slot-scope="scope">
                                    <el-button @click="handleRestore(scope.$index)">还原</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="handle-row">
                            <el-button type="danger">清空回收站</el-button>
                        </div>
                    </template>
                </el-tab-pane>
            </el-tabs>
        </div>

   <el-radio-group v-model="direction">
  <el-radio label="ltr">从左往右开</el-radio>
  <el-radio label="rtl">从右往左开</el-radio>
  <el-radio label="ttb">从上往下开</el-radio>
  <el-radio label="btt">从下往上开</el-radio>
</el-radio-group>

<el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  点我打开
</el-button>

<el-drawer
  title="古月中学"
  :visible.sync="drawer"
  :direction="direction"
  :before-close="handleClose">
  <img src="https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=cb23135ccb3d70cf58f7a25f99b5ba65/562c11dfa9ec8a13d73a1685f503918fa0ecc0b7.jpg">
 <div class="context">
  <span>学校简介</span>
  <p>古月中学，位于河北省平山县古月镇关山脚下·.....那里三面环山，西边是一条河自南向北流如岗南水库。</p>
</div>
</el-drawer>


    </div>
</template>

<script>
    export default {
      name: 'tabs',
      data() {
        return {
          message: 'first',
          showHeader: false,
          unread: [{
            date: '2018-04-19 20:00:00',
            title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
          }, {
            date: '2018-04-19 21:00:00',
            title: '今晚12点整发大红包，先到先得'
          }],
          read: [{
            date: '2018-04-19 20:00:00',
            title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
          }],
          recycle: [{
            date: '2018-04-19 20:00:00',
            title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
          }],
        drawer: false,
        direction: 'rtl',
        }
      },
      methods: {
        handleRead(index) {
          const item = this.unread.splice(index, 1)
          console.log(item)
          this.read = item.concat(this.read)
        },
        handleDel(index) {
          const item = this.read.splice(index, 1)
          this.recycle = item.concat(this.recycle)
        },
        handleRestore(index) {
          const item = this.recycle.splice(index, 1)
          this.read = item.concat(this.read)
        },

    handleClose(done) {
            done();
  
      }

      },
      computed: {
        unreadNum() {
          return this.unread.length
        }
      }
    }

</script>

<style>
.message-title{
    cursor: pointer;
}
.handle-row{
    margin-top: 30px;
}
.container {
    padding: 30px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
}
.crumbs, .plugins-tips {
    margin-bottom: 20px;
}
.img{
    width: 100%;
}
.el-drawer__header {
    font-size: 30px;
}
.context{
    margin: 10px;
    color: #72767b;
}
</style>

