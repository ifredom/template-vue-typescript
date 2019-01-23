import * as types from './mutation-types.js';

export default {
  setShowSidebar({ commit }, isShow) {
    commit(types.COM_SHOW_SIDE_BAR, isShow);
  }
};
