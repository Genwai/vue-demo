import Vue from 'vue';
import Router from 'vue-router';
import storage from '@/config/localstorage';
import env from '@/config/env';
import Login from '@/view/pages/login/login';
import IndexPage from '@/view/pages/index';
import Crash from '@/view/pages/crash/crash';

Vue.use(Router);
const routes = [
  {
    path: '/',
    name: 'IndexPage',
    meta: process.env.PROJECT_NAME,
    component: IndexPage,
  },
  {
    path: '/login',
    name: 'Login',
    meta: '登录',
    component: Login,
  },
  {
    path: '/crash',
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
      storage.clear();
      location.href = '#/login';
      location.reload();
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
