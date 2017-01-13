<template>
  <div class="pagination clearfix">
    <ul class="page-list">
      <li class="page-index prev" v-if="pageNum > 2" @click="toPrev" :class="{inactive:select === 0}">
        <a class="page-link" href="" @click.prevent="">«</a>
      </li>
      <li class="page-index" :class="{selected:select === index}" v-for="(num,index) in pageNum"
          @click="getIndex(index)">
        <a class="page-link" href="" @click.prevent="">{{num}}</a>
      </li>
      <li class="page-index next" v-if="pageNum > 2" @click="toNext" :class="{inactive:select === pageNum - 1}">
        <a class="page-link" href="" @click.prevent="">»</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        select: 0
      };
    },
    props: [
      'pageNum'
    ],
    methods: {
      getIndex(index){
        this.select = index;
        this.$emit('getIndex', this.select);
      },
      toPrev(){
        if (this.select !== 0) {
          this.select--;
          this.$emit('getIndex', this.select);
        }
        return;
      },
      toNext(){
        if (this.select !== this.pageNum - 1) {
          this.select++;
          this.$emit('getIndex', this.select);
        }
        return;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .pagination
    margin-top: 40px
    .page-index
      float: left
      display: inline-block
      width: 30px
      height: 30px
      line-height: 30px
      text-align: center
      margin-right: -1px
      border: 1px solid rgb(220, 220, 220, 0.5)
      color: rgb(38, 166, 238)
      &.prev, &.next
        line-height: 1.6
      &.inactive
        color: rgb(238, 238, 238)
        cursor: default
      &.selected
        background: rgb(38, 166, 238)
        color: #fff
      &:first-child
        border-radius: 3px 0 0 3px
      &:last-child
        border-radius: 0 3px 3px 0
      .page-link
        display: inline-block
        width: 100%
        height: 100%
        font-size: 13px
        font-weight: bold
        font-family: "Arial"
</style>
