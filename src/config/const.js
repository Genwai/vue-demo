/* eslint-disable import/no-mutable-exports */
import Vue from 'vue';
import axios from 'axios';
import Noty from 'noty';
import 'noty/lib/noty.css';
import 'animate.css';

Noty.overrideDefaults({
  layout: 'topCenter',
  theme: 'relax',
  type: 'success',
  progressBar: false,
  closeWith: ['click', 'button'],
  animation: {
    open: 'animated fadeInDown',
    close: 'animated fadeOutUp',
  },
  timeout: 5000,
});

// 全局变量
window._ = require('lodash');
window.moment = require('moment');

window.moment.locale('zh-cn');
window.Noty = Noty;
window.$noty = {
  show(text, type) {
    return new Noty({ text, type }).show();
  },
  success(text) {
    this.show(text, 'success');
  },
  error(text) {
    this.show(text, 'error');
  },
};

// axios
Vue.prototype.$http = axios;

export {
  axios as $http,
};
