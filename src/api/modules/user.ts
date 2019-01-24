import Api from '../commonUtils';

// 登陆
export const login = (params: object) => {
  return Api.request('/admin/user_login', params, 'post');
};
// 用户信息
export const userInfo = (params: object) => {
  return Api.request('/admin/user_login', params, 'get');
};
// 改变用户头像
export const changeAvatar = (params: object) => {
  return Api.request('/admin/change_avatar', params, 'post');
};