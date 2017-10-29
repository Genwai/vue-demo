<template>
  <div class="top-nav">
    <div class="login-user" >
      <el-dropdown @command="handleCommand" trigger="click">
        <span class="el-dropdown-link">
          {{user.name}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="PersonalCenter.Common">个人中心</el-dropdown-item>
          <el-dropdown-item divided command="Login">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="left-part project-name">
      <div>
        {{projectName}}
      </div>
    </div>
    <div class="left-part">
      <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item v-for="router in matched" :key="router.name">
          {{router.meta }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>
<script>
import env from '@/config/env';
import { setToken } from '@/config/http';

export default {
  name: 'TopNav',
  props: ['user'],
  data() {
    return {
      matched: [],
      projectName: env.PROJECT_NAME,
    };
  },
  created() {
    this.initBreadcrumb(this.$route);
  },
  methods: {
    handleCommand(cmd) {
      switch (cmd) {
        case 'Login': {
          setToken();
          this.$router.push({ name: cmd });
          break;
        }
        default:
          this.$router.push({ name: cmd });
      }
    },
    initBreadcrumb(route) {
      this.matched = route.matched;
    },
  },
  watch: {
    $route: {
      handler(newV) {
        this.initBreadcrumb(newV);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
$top-nav-height: 50px;
.top-nav{
  height: $top-nav-height;
  line-height: $top-nav-height;
  border-bottom: 1px solid #e4e7ed;
  &>div{
    border-left: 1px solid #e4e7ed;
    float: right;
    height: 100%;
    padding: 0 20px;
  }
  .login-user .el-dropdown-link{
    cursor: pointer;
  }
  .left-part{
    float: left;
    .breadcrumb{
      margin-top: 19px !important;
    }
  }
  .project-name{
    width: 160px;
    text-align: center;
    line-height: 50px;
    background-color: #1d364b;
    border-left: none;
    color: #FFF;
    font-weight: 600;
    font-size: 22px;
    height: 49px;
    border-bottom: 1px solid #bbb;
  }
}

</style>

