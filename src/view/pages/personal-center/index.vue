<template>
  <menu-panel :menus="menus">
    <router-view/>
  </menu-panel>
</template>

<script>

import Router from './router';

export default {
  name: 'PersonalCenter',
  data() {
    return {
      menus: Router.children,
    };
  },
};
</script>

<style scoped lang="scss">

</style>
