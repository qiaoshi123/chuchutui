<!--
  公共底部Tab组件
-->
<template>
  <ul class="public-footer">
    <!--<router-link to="/">-->
      <!--<li class="footer-item home cur">-->
        <!--<span></span>-->
        <!--<p>首页</p>-->
      <!--</li>-->
    <!--</router-link>-->
    <!--<router-link to="/category">-->
      <!--<li class="footer-item category">-->
        <!--<span></span>-->
        <!--<p>分类</p>-->
      <!--</li>-->
    <!--</router-link>-->
    <!--<router-link to="/vipGuide">-->
      <!--<li class="footer-item vip">-->
        <!--<span></span>-->
        <!--<p>VIP</p>-->
      <!--</li>-->
    <!--</router-link>-->
    <!--<router-link to="/orderCenter">-->
      <!--<li class="footer-item orderCenter">-->
        <!--<span></span>-->
        <!--<p>订单中心</p>-->
      <!--</li>-->
    <!--</router-link>-->
    <router-link v-for="(item,index) in navList" :key="index" :to="item.url">
      <li class="footer-item" :class="[item.className,{cur:item.navType==curNavType}]" @click="clickNav(item)">
        <span></span>
        <p>首页</p>
      </li>
    </router-link>
  </ul>
</template>

<style>
  .public-footer {
    width: 100%;
    background: #fff;
    position: fixed;
    bottom: 0;
    z-index: 5;
  }

  .public-footer .footer-item {
    width: 25%;
    height: 0.96rem;
    display: inline-block;
    float: left;
  }

  .public-footer .footer-item span {
    width: 0.5rem;
    height: 0.5rem;
    margin: auto;
    margin-top: 0.1rem;
    display: block;
    background: url("../../asset/image/footerIcon.png") no-repeat;
    background-size: 3rem 1rem;
  }

  .public-footer .home span {
    background-position: 0 0;
  }

  .public-footer .home.cur span {
    background-position: 0 -0.5rem;
  }

  .public-footer .category span {
    background-position: -0.5rem 0;
  }

  .public-footer .category.cur span {
    background-position: -0.5rem -0.5rem;
  }

  .public-footer .vip span {
    background-position: -1rem 0;
  }

  .public-footer .vip.cur span {
    background-position: -1rem -0.5rem;
  }

  .public-footer .orderCenter span {
    background-position: -1.5rem 0;
  }

  .public-footer .orderCenter.cur span {
    background-position: -1.5rem -1.5rem;
  }

  .public-footer .footer-item p {
    width: 100%;
    font-size: 0.22rem;
    text-align: center;
  }
</style>

<script>
  export default{
    name: 'publicFooter',
    data(){
      return {
        navList: [
          {url: '/', title: '首页', className: 'home', navType:0},
          {url: '/category', title: '分类', className: 'category', navType: 1},
          {url: '/vipGuide', title: 'VIP', className: 'vip', navType: 2},
          {url: '/orderCenter', title: '订单中心', className: 'orderCenter', navType: 3}
        ]
      }
    },
    computed: {
      curNavType(){
        return 0;
      }
    },
    created(){

    },
    methods: {
      clickNav(item){
        console.log(item.navType);
      }
    }
  }
</script>
