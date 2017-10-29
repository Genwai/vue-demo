<template>
  <el-menu
    :collapse="isCollapse"
    class="left-nav"
    background-color="#1d364b"
    text-color="#9ba3af"
    active-text-color="#FFF">
    <el-submenu 
      :index="menu.link || menu.name" 
      v-for="menu in menus" 
      :key="menu.index">
      <template slot="title">
        <i :class="[menu.icon||'el-icon-menu']"></i>
        <span>{{menu.name}}</span>
      </template>
      <el-menu-item
        @click="handleMenuClick(sub_menu.link)"
        :index="sub_menu.link" 
        v-for="sub_menu in menu.sub_menu" 
        :key="sub_menu.index">{{sub_menu.name}}
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>

export default {
  name: 'LeftNav',
  props: ['menus', 'isCollapse'],
  data() {
    return {
    };
  },
  methods: {
    handleMenuClick(name) {
      this.$router.push({
        name,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.el-menu{
  border-right: none;
}

</style>

