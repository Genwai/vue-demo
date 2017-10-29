
import { $http } from '@/config/const';

 // 分页获取部门
function getDepartmentsByQuery(query) {
  return $http.post('/Department/Search', query)
    .then(res => res.data);
}

// 通过 ID 获取部门
function getDepartmentById(id) {
  return $http.get(`/Department/${id}`)
    .then(res => res.data);
}

// 保存部门
function saveDepartment(department) {
  if (department.id) {
    return $http.put('/Department', department)
    .then(res => res.data);
  }
  return $http.post('/Department', department)
    .then(res => res.data);
}

// 获取所有部门
function getAllDepartments() {
  return $http.get('/Department/Select')
  .then(res => res.data);
}

export default {
  getDepartmentsByQuery,
  getDepartmentById,
  saveDepartment,
  getAllDepartments,
};
