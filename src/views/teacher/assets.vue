
<template>
    <div class="app-container">
        <div class="crumbs">
        </div>
        <div class="container">
            <el-tabs type="border-card" @tab-click="handleClick" v-loading="listLoading">
                  <el-tab-pane label="教师年龄分布"  lazy>
                    <div class="charts">
            <div class="second">
        <div>
          <ve-pie :data="chartData" width="100%" height="860px" radius='70%' :settings="chartSettings"></ve-pie>
        </div>
      </div>
    </div>
  </el-tab-pane>
  <el-tab-pane label="教师学历分布" lazy>
    
      <div class="charts">
      <div class="second">
        <div>
          <ve-bar :data="chartData" width="100%" height="860px" :settings="chartSettings"></ve-bar>
        </div>
      </div>
    </div>

  </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

  import { ageDistr } from '@/api/teacher'
  import VeLine from 'v-charts/lib/line'

  export default{
    data(){
      return {
        listLoading:false,
        chartSettings: {
        radius: ['260'],
         offsetY: '350',
         fontSize: '18'  
        },
        chartData: {
        },
        chartData2: {
        columns: ['年代', '人数'],
        rows: [
          {'年代': '90后', '人数': 300},
          {'年代': '80后', '人数': 300},
          {'年代': '70后', '人数': 150},
          {'年代': '60后', '人数': 150},
          {'年代': '50后', '人数': 100},
        ]
      }
      }
    },

    created: function () {
      this.http()
    },
    mounted() {        

    }, 

    methods: {
      
      handleClick: function (index) {
      console.log(index.index)
      // this.typeArr = ['line', 'column', 'pie']
      // this.index = 0
      this.http(index.index)

      },

      changeType: function () {
        this.index++
        if (this.index >= this.typeArr.length) {
          this.index = 0
        }
        this.chartSettings = {type: this.typeArr[this.index]}
      },

      chartEvents: function (index){
          console.log(index)
      },

      http(index = 0){
       // this.listLoading = true
        if(index == 0){
          this.chartData = this.chartData2
          ageDistr().then(response => {
            this.chartData.rows = response.rows
           
          }) 
        }else if(index == 1) {
          this.chartData = this.chartData2
          ageDistr().then(response => {
            console.log(response.rows)
             this.chartData.rows = response.rows
          }) 
        }

        // this.listLoading = false
      }
  },

  }
</script>
<style lang="scss">
  .charts {
    .first, .second, .third, .forth, .five {
      width: 70%;
      display: flex;
      div {
        flex: 1;
      }
    }
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
</style>