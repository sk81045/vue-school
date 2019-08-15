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


<el-drawer
  :title="context.title"
  :visible.sync="drawer"
  :direction="direction">
  <img  :src="context.img">
 <div class="context">
  <span>{{context.title}}</span>
  <p>{{context.text}}</p>
</div>
</el-drawer>

</div>
</template>
<style type="text/css">
.el-drawer__header {
    font-size: 30px;
}
.context{
    margin: 10px;
    color: #72767b;
}  
</style>>
<script>
import { getSchoolList, update, add, delet, query} from '@/api/school'
import AMap from 'AMap'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello',
      markers: [],
      dialogTableVisible: false,  
      gridData: [{}],
      markerData: [
          {'id': 1001,'long': 114.466947, 'lat': 37.090748},
          {'id': 1002,'long': 114.45976, 'lat': 37.056887},
          {'id': 1003,'long': 114.500867,'lat': 37.053892},
        ],
      context:{'img':'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=cb23135ccb3d70cf58f7a25f99b5ba65/562c11dfa9ec8a13d73a1685f503918fa0ecc0b7.jpg','title':'古月中学','text':'古月中学，位于河北省平山县古月镇关山脚下·.....那里三面环山，西边是一条河自南向北流如岗南水库。'},
      drawer: false,
      direction: 'rtl',  
    }
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
        mapStyle:'amap://styles/darkblue',
        // features: [ 'road', 'point']
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
      this.listLoading = true
      query(index.target.Id).then(response => {
        this.context = response.data
        this.drawer = true
        console.log('response',response.data)
      })
    },



  }
}
</script>