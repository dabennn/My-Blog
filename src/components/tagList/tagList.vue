<template>
  <div class="tags">
    <div class="tag-list">
      <h4>Tags</h4>
      <span class="tag" v-for="tag in tags">{{tag}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{};
    },
    props:[
      'tags'
    ]
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
