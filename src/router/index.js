import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Category from '@/views/category'
import VipGuide from '@/views/vipGuide'
import OrderCenter from '@/views/orderCenter'
Vue.use(Router);

var router=new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { navShow: true, cname: '一级页面' }
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
      meta: { navShow: true, cname: '一级页面' }
    },
    {
      path: '/vipGuide',
      name: 'vipGuide',
      component: VipGuide,
      meta: { navShow: true, cname: '一级页面' }
    },
    {
      path: '/orderCenter',
      name: 'orderCenter',
      component: OrderCenter,
      meta: { navShow: true, cname: '一级页面' }
    },
  ]
});
export default router
