<!--
  公共广播组件
-->
<template>
  <div class="public-broad">
    <div class="public-broad-icon"></div>
    <div class="swiper-container broadcast-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import '../../asset/css/swiper.css';
  .public-broad{
    width: 100%;
    height: 0.94rem;
    font-size: 0.28rem;
    background: #ffffff;
  }
  .public-broad *{
    background: #ffffff;
  }
  .public-broad .public-broad-icon {
      background: url("../../asset/image/broadcast.png") no-repeat;
      background-size: 100% 100%;
      display: inline-block;
      width: 0.37rem;
      height: 0.34rem;
      margin-left: 0.38rem;
      margin-bottom: 0.3rem;

  }
  .swiper-container {
    display: inline-block;
    height: 100%;
    width: 6.38rem;
    margin-left: 0.28rem;
    background: #ffffff;
  }
  .swiper-slide{
    line-height: 0.94rem;
  }

</style>

<script>
  import Swiper from '../../asset/js/swiper';//细节:module export和 import不能混用，所以修改了swiper.js,将module export改为 export default
  export default{
    name:'broadcast',
    mounted:function () {
      new Swiper('.broadcast-container', {
        pagination: '.broadcast-pagination',
        paginationClickable: true,
        direction: 'vertical',
        loop:true,
        grabCursor: true,
        autoplay: 3000
      });
    }
  }

</script>
