// 个人中心
import PersonalCenter from '@/view/pages/personal-center/index';
import ChangePwd from '@/view/pages/personal-center/change-pwd/change-pwd';
import Common from '@/view/pages/personal-center/common/common';

const Router = {
  name: 'PersonalCenter',
  path: 'PersonalCenter',
  meta: '个人中心',
  component: PersonalCenter,
  children: [{
    name: 'PersonalCenter.Common',
    path: 'Common',
    component: Common,
    meta: '基本信息',
  },
  {
    name: 'PersonalCenter.ChangePwd',
    path: 'ChangePwd',
    component: ChangePwd,
    meta: '修改密码',
  }],
};

export default Router;
