<template>
  <el-row :gutter="24">
    <el-col :span="5" class="left-menu">
      <div class="nav">
        <ul>
          <li 
            v-for="menu in menus" 
            :key="menu.name" 
            :class="{active: menu.name === globalRoute.name}"
            @click="handleClick(menu.name)">
            {{menu.meta}}
          </li>
        </ul>
      </div>
    </el-col>
    <el-col :span="18">
      <edit-panel :title="globalRoute.meta">
        <slot></slot>
      </edit-panel>
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: 'MenuPanel',
  props: ['menus'],
  data() {
    return {
      globalRoute: {},
    };
  },
  methods: {
    initRoute(globalRoute) {
      this.globalRoute = globalRoute;
    },
    handleClick(name) {
      this.$router.push({
        name,
      });
    },
  },
  created() {
    this.initRoute(this.$route);
  },
  watch: {
    $route: {
      handler(newV) {
        this.initRoute(newV);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.left-menu{
  .nav{
    ul{
      list-style-type: none;
      font-size: 14px;
      box-shadow: 0 1px 4px 0 rgba(204,209,217,.3);
      padding: 0;
      border-radius: 4px;
      margin-bottom: 10px;
      margin-top: 0;
      li{
        &:first-child{
          border-radius: 4px 4px 0 0;
        }
        &:last-child{
          border-radius: 0px 0px 4px 4px;
        }
        position: relative;
        box-sizing: border-box;
        height: 40px;
        line-height: 40px;
        color: #9ba3af;
        background-color: #f5f7fa;
        text-shadow: 0 1px 0 hsla(0,0%,100%,.9);
        padding: 0 10px;
        border: 1px solid #e4e7ed;
        cursor: pointer;
        margin-bottom: -1px;
        &.active {
          background-color: #fff;
          color: #3d444f;
        }
      }
    }
  }
}
</style>

