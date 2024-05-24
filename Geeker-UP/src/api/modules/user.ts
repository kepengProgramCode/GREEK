import { ResPage, User } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";

/**
 * @name 用户管理模块
 */
// 获取用户列表
export const getUserList = params => {
  return http.post<ResPage<User.ResUserList>>(`/User/GetUsers`, params);
};

// 获取树形用户列表
export const getUserTreeList = (params: User.ReqUserParams) => {
  return http.post<ResPage<User.ResUserList>>(PORT1 + `/user/tree/list`, params);
};

// 新增用户
export const addUser = (params: { u_id: string }) => {
  return http.post(`/User/RegisterUser`, params);
};

// 批量添加用户
export const BatchAddUser = (params: FormData) => {
  return http.post(PORT1 + `/user/import`, params);
};

// 编辑用户
export const editUser = params => {
  debugger;
  return http.post(`/User/UpdateUser`, params);
};

// 删除用户
export const deleteUser = (params: { u_id: string[] }) => {
  return http.post(PORT1 + `/user/delete`, params);
};

// 切换用户状态
//这个地方，无法直接传递基础类型的参数字段，需要拼接成对应的请求字符串，凭借过程如下，目前还不知道什么原因
export const changeUserStatus = params => {
  debugger;
  return http.post(`/User/UpdateUserStatus` + `?` + `u_id=` + params.u_id + "&" + "status=" + params.status);
};

// 重置用户密码
export const resetUserPassWord = (params: { u_id: string }) => {
  return http.post(PORT1 + `/user/rest_password`, params);
};

// 导出用户数据
export const exportUserInfo = (params: User.ReqUserParams) => {
  return http.download(PORT1 + `/user/export`, params);
};

// 获取用户状态字典
export const getUserStatus = () => {
  //return http.get<User.ResStatus[]>(PORT1 + `/user/status`);
  return http.get<User.ResStatus[]>(`/User/GetUsersStatus`);
};

// 获取用户性别字典
export const getUserGender = () => {
  return http.get<User.ResGender[]>(`/User/GetUsersGender`);
  //return http.get<User.ResGender[]>(PORT1 + `/user/gender`);
};

// 获取用户部门列表
export const getUserDepartment = () => {
  return http.get<User.ResDepartment[]>(PORT1 + `/user/department`, {}, { cancel: false });
};

// 获取用户角色字典
export const getUserRole = () => {
  return http.get<User.ResRole[]>(PORT1 + `/user/role`);
};
