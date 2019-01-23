import formMiddlePromise from './myutil';

// 需要代理的地址前，需要前缀 /proxyapi ，代理参数配置于/config/index.js
let base = 'http://www.easy-mock.com/mock/59a8d6c14006183e48ef9caa/answer';

let mockApi = {
  localWebpackService: 'http://localhost:8869/mock'
};

export { base };
export { mockApi };

// mock接口-登录
export const MockLogin = (params:any) => {
  return formMiddlePromise(`${mockApi.localWebpackService}/login`, params, 'post');
};
