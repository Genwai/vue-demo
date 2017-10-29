import Vue from 'vue';
import LeftNav from '@/view/components/left-nav/left-nav';
import TopNav from '@/view/components/top-nav/top-nav';
import MenuPanel from '@/view/components/menu-panel/menu-panel';
import ListContainer from '@/view/components/list-container/list-container';
import EditPanel from '@/view/components/edit-panel/edit-panel';

const componentsTemp = {
  // 请按照 component 的字典顺序添加以下内容
  LeftNav,
  TopNav,
  MenuPanel,
  ListContainer,
  EditPanel,
};

const components = {};

Object.keys(componentsTemp).forEach((key) => {
  components[key] = Vue.component(key, componentsTemp[key]);
});

export default components;
