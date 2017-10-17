<template>
  <div class="login">
    <div class="bg"></div>
    <div class="account-container">
      <h2 class="title ng-binding">{{nowLogin?'登录':'注册'}} {{projectName}} 帐号</h2>
      <hr class="header-line">
      <form autocomplete="off">
        <div class="form-group">
          <label>用户名</label>
          <input type="text" v-model="info.account">
        </div>
        <div class="form-group">
          <label>密码
          </label>
          <input type="password" v-model="info.pasword">
        </div>
      </form>
      <el-button 
        type="primary" 
        class="signin-btn"
        :disabled="loading"
        @click="clickBtn()">{{nowLogin?'登录':'注册'}}{{loading?'中...':''}}
      </el-button>
    </div>
    <a class="change-page">
      {{ nowLogin?'还没有账号?':'已有账号'}} 
      <strong @click="change()">立即{{nowLogin?'注册':'登录'}}</strong>
    </a>
  </div>
</template>

<script>
import authApi from '@/model/api/auth';
import { setToken } from '@/config/http';
import env from '@/config/env';

export default {
  name: 'Login',
  data() {
    return {
      projectName: env.PROJECT_NAME,
      nowLogin: true,
      info: {
        account: '',
        pasword: '',
      },
      loading: false,
    };
  },
  created() {
  },
  methods: {
    clickBtn() {
      if (this.loading) return;
      if (this.nowLogin) {
        this.login();
      } else {
        this.register();
      }
    },
    change() {
      this.nowLogin = !this.nowLogin;
      document.title = `${this.projectName} - ${this.nowLogin ? '登录' : '注册'}`;
    },
    login() {
      this.loading = true;
      authApi.login(this.info)
        .then((token) => {
          setToken(token);
          this.$router.push({ name: 'IndexPage' });
        }, () => {
          this.loading = false;
          $noty.error('登录失败,请重试');
        });
    },
    register() {
      authApi.register(this.info);
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  padding-top: 140px;
  padding-bottom: 50px;
  .bg {
    position: fixed;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url('../../../assets/blue-mountain.jpg') no-repeat;
    background-size: cover;
  }
  .logo {
    margin-bottom: 10px;
    text-align: center;
    svg {
      width: 220px;
      height: 80px;
    }
  }
  .account-container {
    position: relative;
    width: 310px;
    margin: 0 auto;
    padding: 27px 20px 30px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 15px 30px 0 rgba(0,0,1,.1);
    .title {
      font-size: 17px;
      line-height: 24px;
      margin: 0;
      padding: 0 20px;
      text-align: center;
      color: #595f69;
      font-weight: 400;
    }
    .header-line {
      width: 120px;
      height: 1px;
      margin: 6px auto 14px;
      border: 0;
      background-color: #e4e7ed;
    }
    form .form-group {
      margin-bottom: 14px;
      label {
        line-height: 24px;
        display: block;
        margin-bottom: 5px;
        color: #9ba3af;
        a {
          line-height: 24px;
          text-decoration: none;
          color: #9ba3af;
          &.pull-right{
            float: right;
          }
        }
      }
      input {
        line-height: 1;
        width: 93%;
        height: 32px;
        margin: 0;
        padding: 0 10px;
        transition: border .25s ease;
        text-align: left;
        color: #3d444f;
        border: 1px solid #ccd1d9;
        border-radius: 2px;
        outline: 0;
        background-color: #fff;
        box-shadow: none;
      }
    }
    .signin-btn {
      width: 100%;
    }
  }
  .change-page {
    font-size: 14px;
    display: block;
    width: 310px;
    margin: 30px auto 0;
    padding: 16px;
    text-align: center;
    text-decoration: none!important;
    color: rgba(255,255,255,.9)!important;
    border: 1px solid rgba(255,255,255,.3);
    border-radius: 4px;
    background-color: rgba(255,255,255,.12);
    text-shadow: 0 1px 4px rgba(0,0,0,.1);
    strong{
      cursor: pointer;
    }
  }
}
</style>
