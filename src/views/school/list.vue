<template>

  <div class="app-container">
<el-button type="primary" @click="handleAdd" >添加</el-button>
  <el-table
    v-loading="listLoading"
    :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))" 
    style="width: 100%">
    <el-table-column
      label="学校"
      prop="title">
    </el-table-column>
    <el-table-column
      label="学生人数"
      prop="studentnum">
    </el-table-column>
    <el-table-column
      label="教师人数"
      prop="teachernum">
    </el-table-column>
    <el-table-column
      label="类型"
      prop="type">
    </el-table-column>
    <el-table-column
      label="地区"
      prop="address">
    </el-table-column>

    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>

      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <div class="pages" style="margin: 30px; text-align: center;">
      <el-pagination  background 
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[10, 50, 100, 200, 300, 500]"
      layout="sizes, prev, pager, next"
      :total="total"
      >
    </el-pagination>
  </div>

    <el-dialog title="用户信息" :visible.sync="dialogFormVisible">

      <el-form :model="form">

        <el-form-item label="学校" :label-width="formLabelWidth">
          <el-input v-model="form.title" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="类型" :label-width="formLabelWidth">
          <el-input v-model="form.type" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="地区" :label-width="formLabelWidth">
          <el-input v-model="form.address" auto-complete="off"></el-input>
        </el-form-item>

      </el-form>


      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
    </div>
    </el-dialog>

</div>
</template>
<style type="text/css">
  .app-container{
    width: 90%;
  }
  .el-popover__title {
    font-size: 25px;
  }
</style>

<script>
import { getSchoolList, update, add, delet } from '@/api/school'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      formLabelWidth: '80px',
      form: {},
      listLoading: true,
      currentPage:1, //初始页
      pageSize:10,    //    每页的数据
      total:0,
      tableData: [{
          date: '2016-05-02',
          name: '桥西17中',
          studentnum: '2500', 
          teachernum: '80', 
          type: '初中',
          address: '石家庄桥西'
        }],
      search: '',
      state: '',
      dialogFormVisible: false,
    }
  },
  created() {
    this.fetchData()
  },

  methods: {
    fetchData(page,parPage) {
      console.log('create')
      this.listLoading = true
      getSchoolList(page,parPage).then(response => {
        this.tableData = response.data.data
        this.pageSize = response.data.per_page
        this.total = response.data.total
        this.currentPage = response.data.current_page
        this.listLoading = false

      })
    },

    handleSizeChange: function (size) {   // 初始页currentPage、初始每页数据数pagesize和数据data
          this.pageSize = size;
          console.log(this.pageSize)      //每页下拉显示数据
          this.fetchData(0,this.pageSize)
    },

    handleCurrentChange: function(currentPage){
          this.currentPage = currentPage;
          console.log(this.currentPage)   //点击第几页
          this.fetchData(this.currentPage,this.pageSize)
    },

    handleEdit(index, row) {
        this.form = row
        this.state = 1
        this.dialogFormVisible = true
    },

    handleAdd() {
        this.form = {}
        this.state = 2
        this.dialogFormVisible = true
    },


    handleDelete(index, row) {
        delet(row.id).then(response => {
          if(response.code == 20000){
            this.alertMSG('已经删除','success')
            window.reload()
          }else{
            this.alertMSG('接口错误','warning')
          }
        })
    },

    cancel() {
        this.dialogFormVisible = false
    },

    submit() {
      if(this.state == 1){
        update(this.form).then(response => {
          if(response.code == 20000){
            this.alertMSG('学校信息修改成功!','success')
            this.dialogFormVisible = false
          }else{
            this.alertMSG('接口错误','warning')
          }
        })
      }else{
        console.log(this.form)
        add(this.form).then(response => {
          if(response.code == 20000){
            this.alertMSG('学校添加成功!','success')
            this.dialogFormVisible = false
          }else{
            this.alertMSG('接口错误','warning')
          }
        })
      }     
    },

    alertMSG(msg,type) {
        this.$message({
          showClose: true,
          message: msg,
          type: type
        });
    },

  }
}
</script>
