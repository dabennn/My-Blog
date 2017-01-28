<template>
  <div class="header">
    <div class="introduction">
      <div class="text">Do not go gentle into that good night</div>
      <ul class="information clearfix">
        <li>
          <i class="icon-location"></i>
          <span class="text">Hangzhou,China</span>
        </li>
        <li>
          <a href="https://github.com/dabennn">
            <i class="icon-github"></i>
            <span class="text">dabennn</span>
          </a>
        </li>
        <li>
          <i class="icon-email"></i>
          <span class="text">dabennn07@gmail.com</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    height: 142px
    padding-top: 48px
    color: #fff
    width: 100%
    background-color: rgb(38, 166, 238)
    .introduction
      position: relative
      margin-left: 180px
      .text
        font-size: 32px
      .information
        margin: 65px 0 0 0
        list-style: none
        padding-left: 0
        li
          float: left
          margin-right: 25px
          .icon-location, .icon-github, .icon-email
            font-size: 22px
          .text
            vertical-align: text-top
            font-size: 14px
</style>
