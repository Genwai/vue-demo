// 系统管理
import System from '@/view/pages/system/index';
import Departments from '@/view/pages/system/departments/departments';
import Department from '@/view/pages/system/departments/department/department';
import Menus from '@/view/pages/system/menus/menus';
import Menu from '@/view/pages/system/menus/menu/menu';
import Employees from '@/view/pages/system/employees/employees';
import Employee from '@/view/pages/system/employees/employee/employee';
import Roles from '@/view/pages/system/roles/roles';
import Role from '@/view/pages/system/roles/role/role';

const Router = {
  name: 'System',
  path: 'System',
  meta: '系统管理',
  component: System,
  children: [
    {
      name: 'System.Departments',
      path: 'Departments',
      meta: '部门管理',
      component: Departments,
    },
    {
      name: 'System.Departments.Edit',
      path: 'Departments/:id',
      meta: '部门编辑',
      component: Department,
    },
    {
      name: 'System.Menus',
      path: 'Menus',
      meta: '菜单管理',
      component: Menus,
    },
    {
      name: 'System.Menus.Edit',
      path: 'Menus/:id',
      meta: '菜单编辑',
      component: Menu,
    },
    {
      name: 'System.Employees',
      path: 'Employees',
      meta: '员工管理',
      component: Employees,
    },
    {
      name: 'System.Employees.Edit',
      path: 'Employees:/id',
      meta: '员工编辑',
      component: Employee,
    },
    {
      name: 'System.Roles',
      path: 'Roles',
      meta: '员工管理',
      component: Roles,
    },
    {
      name: 'System.Roles.Edit',
      path: 'Roles:/id',
      meta: '角色编辑',
      component: Role,
    },
  ],
};

export default Router;
