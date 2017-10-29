import env from '@/config/env';

const PREFIX = `${env.PREFIX}_`;

function formatKey(key) {
  return (PREFIX + key).toUpperCase();
}

const TOKEN = formatKey('token');

export default {
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
