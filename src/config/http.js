import { $http } from '@/config/const';
import storage from '@/config/localstorage';
import env from '@/config/env';

$http.defaults.baseURL = process.env.API_URL;
$http.interceptors.request.use(config => config, error => Promise.reject(error));
$http.interceptors.response.use(response => response, (error) => {
  const errorRes = _.get(error, 'response');
  if (!errorRes) return Promise.reject(error);
  // 401 全部跳转到登录页面
  const hash = location.hash;
  if (errorRes.status === 401) {
    if (hash !== '#/login') {
      storage.clear();
      location.href = '#/login';
      location.reload();
    }
  }
  if (errorRes.status === 500) {
    if (hash !== '#/crash') {
      location.href = '#/crash';
      location.reload();
      document.title = `${env.PROJECT_NAME} - 500`;
    }
  }
  return Promise.reject(errorRes);
});
// 设置 http headers token
/* eslint-disable */ 
function setToken(token) {
  if (token) {
    $http.defaults.headers['token'] = token;
    storage.token = token;
  } else {
    delete $http.defaults.headers['token'];
  }
}

setToken(storage.token);

export {
  setToken,
};
