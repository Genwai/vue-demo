// mutations
const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setMenus(state, menus) {
    state.menus = menus;
  },
  setFunctions(state, functions) {
    state.functions = functions;
  },
  setUserDetail(state, userDetail) {
    state.userDetail = userDetail;
  },
};

export default mutations;
