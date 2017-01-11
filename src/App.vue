<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import header from 'components/header/header.vue';
  import footer from 'components/footer/footer.vue';

  export default {
    name: 'app',
    data(){
      return {

      }
    },
    components: {
      'v-header': header,
      'v-footer': footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
