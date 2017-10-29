<template>
  <div class="app-container"
     v-loading="loading"
     element-loading-text="基础数据加载中...">
    <el-container style="height: 100%" v-if="!loading">
      <el-header height="50px">
        <top-nav :user="user"></top-nav>
      </el-header>
      <el-container>
        <el-aside width="200px" style="background-color: #1d364b">
          <left-nav :menus="user.menu"></left-nav>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { setToken } from '@/config/http';
import authApi from '@/model/api/auth';

export default {
  name: 'IndexPage',
  data() {
    return {
      user: {
        functions: [],
        menus: [],
        name: null,
      },
      loading: true,
    };
  },
  created() {
    // 此处是顶层数据的分发处，此处基础数据如果没有拿到的话，无法正常进入系统，跳转到登录页面
    const promises = [];
    promises.push(authApi.getInfoByToken());
    promises.push(authApi.getAllFunctions());
    promises.push(authApi.getAllMenus());
    Promise.all(promises).then(
      ([user, funs, menus]) => {
        this.loading = false;
        this.user = user;
        // 去除掉没有下级的一级导航
        this.user.menu = _.filter(this.user.menu, menu => menu.sub_menu.length);
        // 将三个顶层数据缓存在数据管理机里
        this.$store.commit('setUser', user);
        this.$store.commit('setMenus', menus);
        this.$store.commit('setFunctions', funs);
        // 获取用户详情会 pedding 于 power 接口，需要在这里获取
        authApi.getDetailById(this.$store.state.user.id)
          .then((userDetail) => {
            this.userDetail = userDetail;
            // 讲用户详情也缓存起来
            this.$store.commit('setUserDetail', userDetail);
            if (this.user.menu.length === 0) {
              this.$message.error('该账号没有菜单可以进入, 请联系管理员增加菜单权限');
            }
            // 默认进入第一个路由
            if (this.user.menu.length !== 0 && this.$route.name === 'IndexPage') {
              this.$router.push({ name: this.user.menu[0].sub_menu[0].link });
            }
            this.loading = false;
          });
      },
      () => {
        this.$message.error('获取用户信息、功能点、菜单出错, 请联系管理员核实');
        setToken();
        this.$router.push({ name: 'Login' });
      });
  },
};
</script>

<style lang="scss">
/*本文件用于设置全局样式 */
.app-container{
  height: 100%;
}
.el-container{
  .el-header{
    padding: 0px;
  }
}

</style>
