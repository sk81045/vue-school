<template>
  <div class="hello">
    <div style="height:933px" id="container" tabindex="0"></div>
 
  <!-- Table -->
<el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

<el-dialog title="学校信息" :visible.sync="dialogTableVisible">
  <el-table :data="gridData">
    <el-table-column property="date" label="日期" width="150"></el-table-column>
    <el-table-column property="name" label="姓名" width="200"></el-table-column>
    <el-table-column property="address" label="地址"></el-table-column>
  </el-table>
</el-dialog>
  </div>

</template>

<script>
import { getSchoolList, update, add, delet } from '@/api/school'
import AMap from 'AMap'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello',
      markers: [],
      dialogTableVisible: false,  
      gridData: [],
      markerData: [
          {'id': 1001,'long': 114.466947, 'lat': 37.090748},
          {'id': 1002,'long': 114.45976, 'lat': 37.056887},
          {'id': 1003,'long': 114.500867,'lat': 37.053892},
        ]
    }
  },
  created(){
   
  },
  mounted () {
    this.fetchData()
   
  },
  methods: {
    fetchData(page,parPage) {
      this.listLoading = true
      getSchoolList(page,parPage).then(response => {
        this.markerData = response.data.data
        this.init()
      })
    },

    init: function () {
     this.map  = new AMap.Map('container', {
        center: [114.49828,37.074856],
        resizeEnable: true,
        zoom: 10,
        mapStyle:'amap://styles/darkblue'
      })

    for (var i = 0; i < 5; i++) {
      console.log(this.markerData[i].long)
      var text = new AMap.Text({
        text:this.markerData[i].title,
        anchor:'center', // 设置文本标记锚点
        draggable:true,
        cursor:'pointer',
        angle:3,
        style:{
            'background-color': '#003366',
            'border-width': 0,
            'text-align': 'center',
            'font-size': '15px',
            'color': '#00CCFF'
        },
        position: [parseFloat(this.markerData[i].long),parseFloat(this.markerData[i].lat)]
    });

      text.Id = this.markerData[i].id
      text.on('click', this.mapClick)

      this.markers.push(text)

    }

      this.map.add(this.markers)
    },

    mapClick: function (index){
      console.log('this.dialogTableVisible',index.target.Id)
      this.dialogTableVisible = true
    },



  }
}
</script>