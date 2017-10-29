<template>
  <el-row :gutter="20">
    <el-col :span="8" :offset="1">
      <el-form :model="changePwdForm" label-width="80px">
        <el-form-item label="" label-width="85px" v-if="error.length">
          <el-alert :title="error" type="error" center show-icon></el-alert>
        </el-form-item>
        <el-form-item label="旧密码" label-width="85px">
          <el-input type="password" placeholder="请输入原始密码" v-model="changePwdForm.oldPwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" label-width="85px">
          <el-input type="password" placeholder="请输入新密码, 至少 6 位" v-model="changePwdForm.newPwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" label-width="85px">
          <el-input type="password" placeholder="请确认新密码" v-model="changePwdForm.newPwdConfirm" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="" label-width="85px">
           <el-button type="primary" 
            @click="confirm" 
            :disabled="passwodInvalid">确定</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import authApi from '@/model/api/auth';

export default {
  name: 'PersonalCenter',
  data() {
    return {
      userDetail: null,
      changePwdForm: {},
      error: '',
    };
  },
  computed: {
    passwodInvalid() {
      this.error = '';
      if (!this.changePwdForm.oldPwd
        || !this.changePwdForm.newPwd
        || !this.changePwdForm.newPwdConfirm) return true;
      if (this.changePwdForm.newPwd.length < 6) {
        return true;
      }
      if (this.changePwdForm.newPwd !== this.changePwdForm.newPwdConfirm) {
        this.error = '新旧密码不同';
        return true;
      }
      return false;
    },
  },
  methods: {
    confirm() {
      authApi.changePassword(this.changePwdForm)
        .then(() => {
          this.$message({
            message: '密码修改成功',
            type: 'success',
          });
          this.changePwdForm = {};
        }, (res) => {
          this.$message.error(res.data.message);
        });
    },
  },
};
</script>

<style scoped lang="scss">

</style>
