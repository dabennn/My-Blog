<template>
  <div class="pagination clearfix">
    <ul class="page-list">
      <li class="page-index" v-for="(num,index) in pageNum" @click="getIndex(index)">
        <a href="" @click="go">{{num}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    props: [
      'pageNum'
    ],
    methods: {
      go(e){
        e.preventDefault();
      },
      getIndex(index){
        this.$emit('getIndex', index);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .pagination
    margin-top: 10px
    .page-index
      float: left
      margin-right: -1px
      border: 1px solid #999
      font-size: 13px
      font-weight: bold
      &:first-child
        border-radius: 3px 0 0 3px
      &:last-child
        border-radius: 0 3px 3px 0
      a
        display: inline-block
        width: 30px
        height: 30px
        line-height: 30px
        text-align: center
</style>
