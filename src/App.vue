<template>
  <div>
    <router-view/>
    <publicFooter></publicFooter>
  </div>
</template>

<script>
  import publicFooter from './components/common/footer.vue';
  export default {
    name: 'app',
    components:{publicFooter}
  }
</script>

<style>
  @import 'asset/css/common.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

