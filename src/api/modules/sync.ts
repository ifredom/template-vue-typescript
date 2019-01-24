import Api from '../commonUtils';

// 同步
export const sync = (params: object) => {
  return Api.request('/sync', params, 'post');
};