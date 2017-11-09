/**
 * Created by Administrator on 2017/11/9.
 * 此js配置一些 vue-router全局钩子函数
 * 参数:vue根实例
 * 引用:
 * 父级调用:main.js
 */
export default function (router,vm) {

  router.beforeEach((to, from, next) => {
    //路由跳转时判断是不是四个底部Tab页，通过store.state.showFooterNav控制显示隐藏;通过store.state.curFooterNavType来控制哪个是选中态。
    var showFooterNavPool = ['home', 'category', 'vipGuide', 'orderCenter'];
    if (showFooterNavPool.indexOf(to.name) > -1) {
      vm.$store.commit('changeShowFooterNav', true);
      vm.$store.commit('changeCurFooterNavType', showFooterNavPool.indexOf(to.name))
    } else {
      vm.$store.commit('changeShowFooterNav', false);
    }
    next()
  });

}
