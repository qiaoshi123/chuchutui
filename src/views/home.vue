<template>
    <div>
      <publicBanner></publicBanner>
      <broadcast></broadcast>
      <ul class="home-motive">
        <li>
          <img src="../asset/image/motive1.png" alt="">
        </li>
        <li>
          <img src="../asset/image/motive1.png" alt="">
        </li>
        <li>
          <img src="../asset/image/motive1.png" alt="">
        </li>
      </ul>
      <p class="home-today">
        <span class="home-today-inner">
          <span class="home-today-line"></span>
          <span class="home-today-title">今日精选</span>
          <span class="home-today-line"></span>
        </span>
      </p>
      <productList></productList>
    </div>

</template>

<style>
  .home-motive {
    width: 100%;
    height: 2.52rem;
  }
  .home-motive li{
    display: inline-block;
    float: left;
    margin-right: 0.045rem;
  }
  .home-motive li img{
    display: inline-block;
    width: 2.455rem;
  }
  .home-today{
    width: 100%;
    font-size: 0.34rem;
    margin-top: 0.5rem;
    text-align: center;
  }
  .home-today .home-today-inner {
    display: inline-block;
    vertical-align: middle;
    width: 3.26rem;
    margin: 0 auto;
  }
  .home-today .home-today-inner .home-today-title{
    width: 1.72rem;
    text-align: center;
  }
  .home-today .home-today-inner .home-today-line {
    display: inline-block;
    width: 0.76rem;
    border-top: 1px solid #000000;
    vertical-align: middle;
  }

</style>

<script>
  import publicBanner from '../components/common/banner.vue'
  import broadcast from '../components/common/broadcast.vue'
  import productList from  '../components/common/productList.vue'
  export default{
    name:'home',
    components:{publicBanner,broadcast,productList}
  }
</script>
