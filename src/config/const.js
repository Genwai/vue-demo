/* eslint-disable import/no-mutable-exports */
import Vue from 'vue';
import axios from 'axios';
// import 'animate.css';
import VueProgressBar from 'vue-progressbar';

Vue.use(VueProgressBar, {
  color: '#3890ff',
  failedColor: 'red',
  height: '2px',
});
window.Progress = window.VueProgressBarEventBus.$Progress;

// 全局变量
window._ = require('lodash');
window.moment = require('moment');

// window.moment.locale('zh-cn');

// axios
Vue.prototype.$http = axios;

export {
  axios as $http,
};
