import * as Axios from 'axios';
import NProgress from 'nprogress';
import Qs from 'qs';

import router from '@/router';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://xiaomuzhu.top/api/'
    : 'http://xiaomuzhu.top/api/';

const axios = Axios.default.create({
  baseURL, // api请求的baseURL
  timeout: 0,
  // withCredentials: true, // 允许跨域 cookie
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  maxContentLength: 2000,
  transformResponse: [
    data => {
      try {
        data = JSON.parse(data);
      } catch (e) {
        data = {};
      }
      if (data.status === 403) {
        router.push('/login');
      }
      return data;
    },
  ],
});

axios.interceptors.request.use(
  (config: any) => {
    // 对请求参数做加密
    if (config.method === 'post' || config.method === 'get') {
    }
    return config;
  },
  (error: any) => {
    alert(error);
    return Promise.reject(error);
  },
);

// 返回数据的判断校验
axios.interceptors.response.use(
  response => {
    // console.log('返回的数据:' + JSON.stringify(response))
    // 返回错误标志
    if (response.data && response.data.code + '' !== '0') {
      alert(response.data.msg);
      return Promise.reject(new Error(response.data.msg));
    }
    return response;
  },
  error => {
    let requestData = eval('(' + error.response.config.data + ')');
    if (error.response.status === 404) {
      router.push('/index/404');
    } else if (error.response.status === 500) {
      router.push('/index/500');
    } else {
      // 返回 response 里的错误信息
      return Promise.reject(error);
    }
  },
);

// 防止快速点击,发起多次http请求
const requesting: any = {};

export default {
  install: function(Vue: any, Option: any) {
    Object.defineProperty(Vue.prototype, '$http', {
      value: Axios,
    });
  },
  request(url: string, params = {}, method = 'post') {
    const requestingId = url + method.toUpperCase() + new Date();
    if (requesting[requestingId]) {
      console.warn('请勿重复点击');
      return;
    }
    requesting[requestingId] = true;
    method = method.toUpperCase();

    return new Promise((resolve, reject) => {
      NProgress.start();
      axios({
        method: method,
        url: url,
        data: params,
      })
        .then(
          response => {
            NProgress.done();
            resolve(response.data);
            requesting[requestingId] = false;
          },
          err => {
            NProgress.done();
            reject(err);
          },
        )
        .catch(thrown => {
          NProgress.done();
        });
    });
  },
};
