<template>
  <div id="app">
    <v-navbar></v-navbar>
    <v-header v-show="headerShow"></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import navbar from 'components/navbar/navbar.vue';
  import header from 'components/header/header.vue';
  import footer from 'components/footer/footer.vue';

  export default {
    name: 'app',
    data(){
      return {
      }
    },
    components: {
      'v-navbar': navbar,
      'v-header': header,
      'v-footer': footer
    },
    computed:{
      headerShow(){
        return this.$store.state.headerShow;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
