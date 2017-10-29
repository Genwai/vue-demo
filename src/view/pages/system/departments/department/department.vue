<template>
  <edit-panel :title="title" v-loading="loading">
    <el-row :gutter="20">
      <el-col :span="8" :offset="1">
        <el-form :model="data" label-width="80px" :rules ="rules">
          <el-form-item label="部门名称" label-width="85px" prop="name">
            <el-input placeholder="请输入部门名称" v-model="data.name"></el-input>
          </el-form-item>
          <el-form-item label="上级部门" label-width="85px">
            <el-select v-model="data.parent_id" placeholder="请选择上级部门">
              <el-option
                v-for="item in departments"
                :key="item.id"
                :label="item.name"
                :value="item.id"
                v-if="item.id !== data.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="部门负责人" label-width="85px">
             <el-select v-model="data.manage_id" placeholder="请选择部门负责人">
              <el-option
                v-for="item in data.employees"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
           <el-form-item label="部门说明" label-width="85px">
            <el-input  type="textarea" placeholder="请输入部门说明" v-model="data.desc"></el-input>
          </el-form-item>
          <el-form-item label="" label-width="85px">
            <el-button type="primary"  @click="save" :disabled="!valid">保存</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </edit-panel>
</template>

<script>
import departmentApi from '@/model/api/department';
import Edit from '@/view/components/edit-panel/edit';

export default {
  name: 'Department',
  extends: Edit,
  data() {
    return {
      name: '部门',
      departments: [],
      rules: {
        name: [
          { required: true, message: '请输入部门名称', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    handleDetDetail() {
      return departmentApi.getDepartmentById(this.id);
    },
    handleSave() {
      return departmentApi.saveDepartment(this.data)
        .then(() => {
          if (this.isNew) {
            this.$router.push({
              name: 'System.Departments',
            });
          }
        });
    },
    getAllDepartments() {
      this.loading = true;
      departmentApi.getAllDepartments()
        .then((departments) => {
          this.loading = false;
          this.departments = departments;
        }, () => {
          this.loading = false;
          this.$message.error('获取上级部门失败, 请重试');
        });
    },
  },
  computed: {
    valid() {
      return this.data.name;
    },
  },
  mounted() {
    this.getAllDepartments();
  },
};
</script>

<style scoped lang="scss">

</style>
