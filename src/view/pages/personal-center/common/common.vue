<template>
  <el-row :gutter="20">
    <el-col :span="8" :offset="1" v-if="userDetail">
      <el-form ref="form" :model="userDetail" label-width="80px">
        <el-form-item label="账号">
        <el-input :disabled="true" v-model="userDetail.logon_account"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input :disabled="true" v-model="userDetail.name"></el-input>
        </el-form-item>
        <el-form-item label="部门">
          <el-input :disabled="true" v-model="userDetail.department.name"></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-input :disabled="true" v-model="userDetail.role.name"></el-input>
        </el-form-item>
        <el-form-item label="上次更新">
          <el-input :disabled="true" v-model="userDetail.update_date"></el-input>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: 'PersonalCenter',
  data() {
    return {
    };
  },
  computed: {
    userDetail() {
      return this.$store.state.userDetail;
    },
  },
};
</script>

<style scoped lang="scss">

</style>
