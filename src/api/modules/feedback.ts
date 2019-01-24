import Api from '../commonUtils';

// 反馈
export const feedback = (params: object) => {
  return Api.request('/article/detail', params, 'get');
};
