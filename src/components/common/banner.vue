

<template>
    <div class="swiper-container banner-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="http://ads-cdn.chuchuguwen.com/4d2e19394dcbdcd2769bdc3f1f3d4081?imageView2/1/w/750/h/750/format/jpeg/ignore-error/1/" alt="">
        </div>
        <div class="swiper-slide">
          <img src="http://ads-cdn.chuchuguwen.com/fe9bc45aa7738e2058ef1351fea70a6a?imageView2/1/w/750/h/750/format/jpeg/ignore-error/1/" alt="">
        </div>
        <div class="swiper-slide">
          <img src="http://ads-cdn.chuchuguwen.com/6747c6c65ccdb84bac1c3248ecc3379e?imageView2/1/w/750/h/750/format/jpeg/ignore-error/1/" alt="">
        </div>
      </div>
      <div class="swiper-pagination banner-pagination"></div>
    </div>
</template>

<style scoped>
  @import '../../asset/css/swiper.css';
  .swiper-container {
    width: 100%;
    height: 3.8rem;
  }
  .swiper-slide img {
    width: 100%;
  }
  .banner-pagination{
    font-size: 0;
    background: transparent;

  }
</style>

<script>
import Swiper from '../../asset/js/swiper';//细节:module export和 import不能混用，所以修改了swiper.js,将module export改为 export default
  export  default{
    name:'publicBanner',
    mounted:function () {
      new Swiper('.banner-container', {
        pagination : '.banner-pagination',
        width:window.innerWidth,
        loop:true,
        updateTranslate:true,
        autoplayDisableOnInteraction:false, // 用户操作swiper后，是否禁止autoplay，默认是true
        observer:true,
        observeParents:true,
        grabCursor: true,
        paginationClickable: true,
        autoplay: 3000
      })
    }
  }


</script>
