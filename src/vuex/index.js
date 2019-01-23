import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex)

// 应用初始状态
const state = {
  showSidebar: false //侧边栏
}

export {
  state
}

// 创建 store 实例
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})