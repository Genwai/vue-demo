import { $http } from '@/config/const';

// 登录
function login(info) {
  return $http.post('/login', info)
    .then(res => res.data);
}

// 注册
function register(info) {
  return $http.post('/register', info)
    .then(res => res.data);
}

// 通过 token 获取用户信息
function getInfoByToken(token) {
  return $http.post('/info', {
    token,
  })
    .then(res => res.data);
}

export default {
  login,
  register,
  getInfoByToken,
};
