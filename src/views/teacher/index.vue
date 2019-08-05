<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="姓名">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="职务" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="联系电话" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.mobile }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="性别" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.create_time }}</span>
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

  </div>
</template>

<script>
import { getList,test } from '@/api/table'

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
      list: null,
      listLoading: true,
      currentPage:1, //初始页
      pageSize:10,    //    每页的数据
      total:0
    }
  },
  created() {
    this.fetchData()
  },

  methods: {
    fetchData(page,parPage) {
      this.listLoading = true
      getList(page,parPage).then(response => {
        console.log(response.data.per_page)
        this.list = response.data.data
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
    }

  }
}
</script>
