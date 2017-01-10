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

  const ERR_OK = 0;

  export default {
    name: 'app',
    data(){
      return {
        article: {}
      }
    },
    components: {
      'v-header': header,
      'v-footer': footer
    },
    created() {
      this.$http.get('api/article').then((res)=> {
        res = res.body;
        if (res.errno === ERR_OK) {
          this.article = res.data;
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
