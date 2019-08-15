<template>
  <div class="app-container">
     <!-- <a target="_blank" href="https://github.com/mgbq/vue-permission"><img
        style="position: absolute; top: 48px; right: 0; border: 0;"
        src="../../../static/img/report/forkme.png"
        alt="Fork me on GitHub"></a> -->
    <div class="item">
      <aside>各区县学校数据</aside>
      <nx-data-display :option="option" v-if="option.c == 1"></nx-data-display>
    </div>
    <div class="item">
       <aside>数据统计</aside>
      <nx-data-tabs :option="easyDataOption"></nx-data-tabs>
    </div>
    <div class="item">
      <aside>5年内入学人数对比</aside>
      <!-- <nx-data-icons :option="easyDataOption1"></nx-data-icons> -->
      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>
      <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
    </el-row>
    </div>
  </div>
</template>
<script>

import { allschool, update, add, delet } from '@/api/analysis'
import nxDataDisplay from '@/components/nx-data-display/nx-data-display'
import nxDataTabs from '@/components/nx-data-tabs/nx-data-tabs'
import nxDataIcons from '@/components/nx-data-icons/nx-data-icons'
import LineChart from '@/components/LineChart/LineChart'
import BarChart from '@/components/BarChart/BarChart'

const lineChartData = {
  newVisitis: {
    expectedData: [30855, 50885, 60885, 30485, 60885],
    actualData: [20885, 40885, 30885, 39885, 43885],
    gzData: [30885, 30522, 35020, 50885, 37885]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [220, 160, 151, 106, 145, 150, 130],
    gzData: [125, 88, 50, 154, 50, 50, 115]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130],
    gzData: [125, 88, 50, 154, 50, 50, 115]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130],
    gzData: [125, 88, 50, 154, 50, 50, 115]
  }
}


export default {
  name: 'report',
  components: {
    nxDataDisplay,
    nxDataTabs,
    nxDataIcons,
    LineChart,
    BarChart
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      option: {
        c: false,
        data: []  //各区县学校数据
      },
      easyDataOption: {
        span: 6,
        data: [
          {
            title: '小学学段人数',
            subtitle: '实时',
            count: 7953,
            allcount: 10222,
            text: '当前分类总记录数',
            color: 'rgb(49, 180, 141)',
            key: '类'
          },
          {
            title: '附件统计',
            subtitle: '实时',
            count: 3112,
            allcount: 10222,
            text: '当前上传的附件数',
            color: 'rgb(56, 161, 242)',
            key: '附'
          },
          {
            title: '文章统计',
            subtitle: '实时',
            count: 908,
            allcount: 10222,
            text: '评论次数',
            color: 'rgb(117, 56, 199)',
            key: '评'
          },
          {
            title: '新闻统计',
            subtitle: '实时',
            count: 908,
            allcount: 10222,
            text: '评论次数',
            color: 'rgb(59, 103, 164)',
            key: '新'
          }
        ]
      },
      easyDataOption0: {
        span: 6,
        borderColor: '#fff',
        data: [
          {
            name: '姓名1',
            src: 'static/img/mock/card/card-1.jpg',
            text: '介绍1'
          },
          {
            name: '姓名2',
            src: 'static/img/mock/card/card-2.jpg',
            text: '介绍2'
          },
          {
            name: '姓名3',
            src: 'static/img/mock/card/card-3.jpg',
            text: '介绍3'
          },
          {
            name: '姓名4',
            src: 'static/img/mock/card/card-4.jpg',
            text: '介绍4'
          }
        ]
      },
      easyDataOption1: {
        color: 'rgb(63, 161, 255)',
        span: 4,
        data: [
          {
            title: '今日注册',
            count: 12678,
            icon: 'icon-cuowu'
          },
          {
            title: '今日登录',
            count: 22139,
            icon: 'icon-shujuzhanshi2'
          },
          {
            title: '今日订阅',
            count: 35623,
            icon: 'icon-jiaoseguanli'
          },
          {
            title: '今日评论',
            count: 16826,
            icon: 'icon-caidanguanli'
          },
          {
            title: '今日评论',
            count: 16826,
            icon: 'icon-caidanguanli'
          },
          {
            title: '今日评论',
            count: 16826,
            icon: 'icon-caidanguanli'
          }
        ]
      },
      easyDataOption2: {
        color: 'rgb(63, 161, 255)',
        span: 4,
        discount: true,
        data: [
          {
            title: '错误日志',
            count: 12678,
            icon: 'icon-cuowu'
          },
          {
            title: '数据展示',
            count: 12678,
            icon: 'icon-shujuzhanshi2'
          },
          {
            title: '权限管理',
            count: 12678,
            icon: 'icon-jiaoseguanli'
          },
          {
            title: '菜单管理',
            count: 12678,
            icon: 'icon-caidanguanli'
          },
          {
            title: '权限测试',
            count: 12678,
            icon: 'icon-caidanguanli'
          },
          {
            title: '错误页面',
            count: 12678,
            icon: 'icon-caidanguanli'
          }
        ]
      }
    }
  },

  created() {
   //  console.log(this.option.data)
    this.allschool()
   //  var that = this;
   //  setTimeout(function () {
   //     that.allschool()
   //  },500);
 },
  mounted(){
   // this.allschool()
  },
  methods: {
    allschool() {
      allschool().then(response => {
        console.log(response)
        this.option.data = response.data
        this.option.c = true
        console.log(this.option)
      })
    },
  }
}
</script>

<style scoped>
.item {
  margin-bottom: 16px;
}

.app-container{
  width: 100%;
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
<style lang ="scss">
    @import '../../styles/data-tabs.scss';
    @import '../../styles/data-display.scss';
</style>