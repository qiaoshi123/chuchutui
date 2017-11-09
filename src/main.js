// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './asset/js/rem'                 //rem适配
import Vue from 'vue'                 //vue.js
import App from './App'               //App根组件
import router from './router'         //router路由
import vueHook from './router/router_hook' //router全局钩子函数配置
import store from './store'           //vuex
Vue.config.productionTip = false;

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
});
vueHook(router, vm);


