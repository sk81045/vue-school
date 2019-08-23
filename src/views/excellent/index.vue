<template>
  <div class="container">
  <el-table
    :data="tableData5"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="课程名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="所属学校">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="课程代号">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="讲师">
            <span>{{ props.row.teacher }}</span>
          </el-form-item>
          <el-form-item label="适合学段">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="授课时间">
            <span>{{ props.row.lecture_time }}</span>
          </el-form-item>
          <el-form-item label="课程描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
          <el-form-item label="教材图片">
           <span> <img  :src="img"></span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="课程代号"
      prop="id">
    </el-table-column>
    <el-table-column
      label="课程名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="学科"
      prop="subject">
    </el-table-column>
    <el-table-column
      label="讲师"
      prop="teacher">
    </el-table-column>
    <el-table-column
      label="描述"
      prop="desc">
    </el-table-column>
  </el-table>
  </div>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .container {
    padding: 30px;
    background: #fff;
    border: 1px solid #e4e4e4;
    border-radius: 5px;
    margin: 10px;
}
</style>

<script>
  export default {
    data() {
      return {
        img:'',
        tableData5: [{
          id: '12987122',
          name: '《高一英语同步基础课程》',
          subject: '英语',
          teacher: '李老师',
          category: '高三',
          desc: '互动教学法，让学习变简单',
          lecture_time: '每周一/三/五 09:00',
          shop: '互动教学法，让学习变简单',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '《高二数学同步提高下学期课程》',
          subject: '数学',
          teacher: '李老师',
          category: '高三',
          desc: '互动教学法，让学习变简单',
          lecture_time: '每周一/三/五 11:00',
          shop: '互动教学法，让学习变简单',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '《高二英语同步基础下学期课程》',
          subject: '英语',
          teacher: '李老师',
          category: '高三',
          desc: '互动教学法，让学习变简单',
          lecture_time: '每周一/三/五 14:00',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '《高考数学总复习第一第二轮课程》',
          subject: '语文',
          teacher: '李老师',
          category: '高三',
          desc: '互动教学法，让学习变简单',
          lecture_time: '每周一/三/五 15:00',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }]
      }
    }
  }
</script>