import Vue from 'vue';
import router from '@/view/router';
import store from '@/store';
import App from '@/App';
import 'normalize.css';
import '@/assets/svgs/svg';
import '@/config/http';
import 'element-ui/lib/theme-default/index.css';
import ElementUI from 'element-ui';

Vue.config.productionTip = false;
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
