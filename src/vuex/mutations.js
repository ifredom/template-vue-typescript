import * as types from './mutation-types.js';
import {
    state as defState
} from './index';
// 使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
export default {
    [types.COM_SHOW_SIDE_BAR](state, payload) {
        state.showSidebar = payload
    }
};