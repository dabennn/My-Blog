<template>
  <div class="footer">
    <span class="copyright">&copy;2017 lleon</span>
    <a class="icon" href="https://github.com/dabennn">
      <i class="icon-github"></i>
    </a>
    <a href="" class="top" @click.prevent="top">Top</a>
  </div>
</template>

<script>
  export default{
    methods: {
      top(){
        window.scrollTo(0, 0);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer
    margin: 0 180px 0 180px
    height: 100px
    line-height: 100px
    text-align: center
    color: #999
    border-top: 1px solid rgb(238, 238, 238)
  .copyright
      float: left
      font-size 12px
    .icon
      font-size: 30px
    .top
      float: right
      font-size: 14px
      &:hover
        color: rgb(38, 166, 238)
</style>
