/**
 * Created by Administrator on 2017/11/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
console.log(mutations);
console.log(actions);

Vue.use(Vuex);

const state = {
    showFooterNav:true,
    curFooterNavType:0,
};
export default new Vuex.Store({
  state,
  actions,
  mutations
})
