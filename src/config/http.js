import { $http } from '@/config/const';
import storage from '@/config/localstorage';
import router from '@/view/router';

$http.defaults.baseURL = process.env.API_URL;

const progressStart = _.debounce(() => {
  Progress.start();
}, 1000);
// 结束请求进度条
const progressFinish = _.debounce(() => {
  Progress.finish();
}, 4000);

// 设置 http headers token
/* eslint-disable */ 
function setToken(token) {
  if (token) {
    $http.defaults.headers['authorization'] = `Bearer ${token}`;
    storage.token = token;
  } else {
    storage.clear();
    delete $http.defaults.headers['authorization'];
  }
}

$http.interceptors.request.use(config => {
  progressStart();
  return config;
}, error => Promise.reject(error));
$http.interceptors.response.use(response => {
  progressFinish();
  return response;
}, (error) => {
  const errorRes = _.get(error, 'response');
  if (!errorRes) return Promise.reject(error);
  // 401 全部跳转到登录页面
  const hash = location.hash;
  if (errorRes.status === 401) {
    if (hash !== '#/login') {
      setToken();
      router.push({
        name: 'Login'
      });
    }
  }
  if (errorRes.status === 500) {
    if (hash !== '#/crash') {
      router.push({
        name: 'Crash'
      });
    }
  }
  return Promise.reject(errorRes);
});

setToken(storage.token);

export {
  setToken,
};
