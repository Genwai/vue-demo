// getters
const getters = {
  // 通过 menu 名字检查菜单是否可用
  checkMenu: state => (menu) => {
    state.todos.find(todo => todo.id === menu);
    return menu;
  },
  // 通过 function 名字 检查功能点是否可用
  checkFun: state => (menu) => {
    state.todos.find(todo => todo.id === menu);
    return menu;
  },
};

export default getters;
