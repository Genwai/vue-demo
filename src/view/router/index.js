import Vue from 'vue';
import Router from 'vue-router';
import storage from '@/config/localstorage';
import env from '@/config/env';
import { setToken } from '@/config/http';
import Login from '@/view/pages/login/login';
import IndexPage from '@/view/pages/index';
import Crash from '@/view/pages/crash/crash';

import PesonalCenter from '@/view/pages/personal-center/router';
import SystemCenter from '@/view/pages/system/router';

Vue.use(Router);
const routes = [
  {
    path: '/',
    name: 'IndexPage',
    meta: '首页',
    component: IndexPage,
    children: [
      PesonalCenter,
      SystemCenter,
    ],
  },
  {
    path: '/Login',
    name: 'Login',
    meta: '登录',
    component: Login,
  },
  {
    path: '/Crash',
    name: 'Crash',
    meta: '500',
    component: Crash,
  },
  {
    path: '*',
    redirect: {
      name: 'IndexPage',
    },
  },
];
const router = new Router({
  routes,
});

// 如果没有 token 跳转到 login
router.beforeEach((to, from, next) => {
  if (storage.token) {
    next();
  } else {
    const hash = location.hash;
    if (hash !== '#/login' && hash !== '#/crash') {
      setToken();
      // location.href = '#/login';
      // location.reload();
      router.push({
        name: 'Login',
      });
    } else {
      next();
    }
  }
});

router.afterEach((to) => {
  document.title = `${env.PROJECT_NAME} - ${to.meta}`;
  if (to.name === 'Login') {
    document.title = `${env.PROJECT_NAME} - 登录`;
  }
});

export default router;
