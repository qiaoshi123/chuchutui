import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Category from '@/views/category'
import VipGuide from '@/views/vipGuide'
import OrderCenter from '@/views/orderCenter'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/vipGuide',
      name: 'vipGuide',
      component: VipGuide
    },
    {
      path: '/orderCenter',
      name: 'orderCenter',
      component: OrderCenter
    },
  ]
})
