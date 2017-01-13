<template>
  <div class="about">
    <div class="about-content">
      <h2>About</h2>
      <p>introduction of self</p>
    </div>
    <div class="sidebar">
      <v-search></v-search>
    </div>
  </div>
</template>

<script>
  import search from 'components/search/search.vue';
  export default{
    data(){
      return {};
    },
    components: {
      'v-search': search
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .about
    display: flex
    margin: 10px 180px 0 180px
    min-height: 1050px
    .about-content
      margin: 0
      flex: 1
    .sidebar
      flex: 0 1 300px
</style>
