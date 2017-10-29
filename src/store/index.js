import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import login from './modules/login';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

// 此处是状态管理的顶层位置，需要在这里做一些应用级别的操作
export default new Vuex.Store({
  state: {
    user: null,
    // 所有菜单
    menus: [],
    // 所有功能点
    fuctions: [],
    // 用户详情
    userDetail: null,
  },
  actions,
  getters,
  modules: {
    login,
  },
  mutations,
  strict: debug,
});
