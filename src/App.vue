<template>
  <div>
    <router-view/>
    <publicFooter v-show="showFooterNav"></publicFooter>
  </div>
</template>

<script>
  import publicFooter from './components/common/footer.vue';
  import { mapState, mapActions,mapMutations } from 'vuex'
  export default {
    name: 'app',
    components:{publicFooter},
    computed:{
      ...mapState(['showFooterNav'])
    }
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

