<template>
  <div>
    <div class="product">
      <div class="product-img">
        <img src="https://image-shop.chuchutong.com/culiu.cdn/image/201711/03/5428e5fafa9a266e8f103706d4db2f621509697083_750_750.jpg?imageView2/2/w/480/h/480/ignore-error/1/|watermark/1/image/aHR0cDovL2Fkcy1jZG4uY2h1Y2h1Z3V3ZW4uY29tLzc0OGY5OTM2NzNkMTY0ZDE5Y2ZiNjA1Y2RkMjc4MzNh/dissolve/100/gravity/NorthWest/dx/0/dy/0/" alt="">
      </div>
      <div class="product-info">
        <p>111</p>
        <p>222</p>
        <p>333</p>
      </div>
    </div>

  </div>
</template>
<style>
  .product{

  }
  .product .product-img{
      display: inline-block;
  }
  .product .product-info {
    display: inline-block;
    height: 100%;
  }
  .product .product-info p{
    font-size: 0.28rem;
  }
  .product-img img{
    display: inline-block;
    width: 2.8rem;
  }

</style>

<script>
  export default{
    name:'productList'
  }

</script>
