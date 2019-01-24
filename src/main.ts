import Vue from 'vue';
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import App from './App.vue';
import router from './router';
import store from './store';
import Api from './api';


import '@/style/index.styl'; // global css
import './icons'; // icon
import './errorLog'; // error log
import './mock'; // simulation data

Vue.config.productionTip = false;
Vue.use(Api.install);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
