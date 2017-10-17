/**
 * PREFIX
 */
const PREFIX = 'linkface_';
function formatKey(key) {
  return (PREFIX + key).toUpperCase();
}

/**
 * AUTH
 */
const TOKEN = formatKey('token');


/**
 * AppPlatform
 * 记住上次选择的平台和版本
 */

export default {
  // token
  get token() {
    return localStorage.getItem(TOKEN);
  },
  set token(t) {
    localStorage.setItem(TOKEN, t);
  },
  clear: () => {
    localStorage.clear();
  },
};
