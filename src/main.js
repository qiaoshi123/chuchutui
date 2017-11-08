// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './asset/js/rem'                 //rem适配
import Vue from 'vue'                 //vue.js
import App from './App'               //App根组件
import router from './router'         //router路由

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App}
})
