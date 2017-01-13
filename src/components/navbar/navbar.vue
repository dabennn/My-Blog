<template>
  <div class="navbar clearfix">
    <h1 class="lleon"><a href="http://localhost:8080/#/home">lleon</a></h1>
    <ul class="nav-list clearfix">
      <li>
        <router-link to="/home">首页</router-link>
      </li>
      <li>
        <router-link to="/category">分类</router-link>
      </li>
      <li>
        <router-link to="/notes">笔记</router-link>
      </li>
      <li>
        <router-link to="/about">关于</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

  export default{
    data(){
      return {};
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .navbar
    position: relative
    top: 0
    left: 0
    width: 100%
    height: 65px
    background-color: rgb(38, 166, 238)
    color: #ffffff
    .lleon
      float: left
      margin-left: 180px
      height: 100%
      line-height: 65px
      font-size: 36px
      font-weight: 700
      a
        color: #fff
    .nav-list
      float: right
      margin: 25px 180px 0 0
      li
        float: left
        height: 30px
        margin-right: 25px
        line-height: 30px
        a
          width: 100%
          height: 100%
          padding: 0 5px 11px 5px
          font-size: 16px
          color: rgba(255, 255, 255, 0.6)
          &:hover
            border-bottom: 2px solid #fff
            color: rgba(255, 255, 255, 1)
        .active
          color: rgba(255, 255, 255, 1)


</style>
