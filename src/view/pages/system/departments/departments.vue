<template>
  <div class="departments">
   <list-container 
    @currentChange="currentChange" 
    @search="search"
    :pagination="pagination"
    :create-to="{name: 'System.Departments.Edit', params: {id: 'new'}}"
    v-loading="loading">
    <div slot="search">
      <el-row :gutter="24">
        <el-col :span="12">
           <el-form :model="query" label-width="20px">
            <el-form-item label="部门名称" label-width="85px">
              <el-input placeholder="请输入部门名称" v-model="query.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
         </el-col >
      </el-row>
     </div>
     <div slot="table">
       <el-table
        border
        stripe
        sortable="custom"
        @sort-change="sortChange"
        :default-sort="sort"
        :data="data"
        style="width: 100%"
        height="400"> 
        <el-table-column
          prop="date"
          label="序号"
          type="index"
          :index="countMethod">
        </el-table-column>
        <el-table-column
          sortable
          prop="name"
          label="部门名称">
        </el-table-column>
        <el-table-column
          prop="parent_name"
          label="上级部门">
        </el-table-column>
        <el-table-column
          prop="manage_name"
          label="主管名称">
        </el-table-column>
        <el-table-column
          prop="update_date"
          sortable
          label="更新时间">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button  @click="handleEdit(scope.row)" type="text" size="small" >编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
     </div>
   </list-container>
  </div>
</template>

<script>
import List from '@/view/components/list-container/list';
import departmentApi from '@/model/api/department';


export default {
  name: 'Departments',
  extends: List,
  data() {
    return {
    };
  },
  methods: {
    getData(query) {
      return departmentApi.getDepartmentsByQuery(query);
    },
    handleEdit(data) {
      console.log(data);
      this.$router.push({
        name: 'System.Departments.Edit',
        params: {
          id: data.id,
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">

</style>
