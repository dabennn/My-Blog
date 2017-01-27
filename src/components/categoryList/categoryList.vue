<template>
  <div class="classifys">
    <h1 class="title">Categories:</h1>
    <ul class="clearfix">
      <li class="category-item" v-for="(item,index) in category">
        <a href="" :class="[item.num !== 0 ? hasNum : noNum]" @click.prevent="goAnchor('#anchor'+index,wrapper)">{{item.name}}</a>
        <span class="num">( {{item.num}} )</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import mixin from 'common/js/mixin.js';

  export default{
    data(){
      return {
        hasNum: 'hasNum',
        noNum: 'noNum'
      };
    },
    props: [
      'category', 'wrapper'
    ],
    mixins: [mixin]
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .classifys
    margin-top: 40px
    .title
      margin-bottom: 15px
      font-size: 20px
      color: rgb(38, 166, 238)
    .category-item
      display: inline-block
      width: 200px
      height: 45px
      line-height: 45px
      padding: 0 15px
      margin-bottom: -1px
      border: 1px solid rgb(220, 220, 220)
      &:first-child
        border-radius: 3px 3px 0 0
      &:last-child
        border-radius: 0 0 3px 3px
      .hasNum
        font-size: 14px
        color: rgb(38, 166, 238)
        &:hover
          border-bottom: 1px solid rgb(38, 166, 238)
      .noNum
        font-size: 14px
        color: rgb(200, 200, 200)
        cursor: default
      .num
        float: right
        font-size: 12px


</style>
