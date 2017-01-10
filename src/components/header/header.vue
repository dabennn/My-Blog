<template>
  <div class="header">
    <v-navbar></v-navbar>
    <div class="introduction">
      <div class="text">Do not go gentle into that good night</div>
      <ul class="infomation">
        <li>
          <i class="icon-location"></i>
          <span class="text">Hangzhou,China</span>
        </li>
        <li>
          <a href="https://github.com/dabennn" style="color:#fff">
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
  import navbar from 'components/navbar/navbar.vue';
  import 'common/stylus/base.styl';

  export default{
    components: {
      'v-navbar': navbar
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    height: 255px
    width: 100%
    background-color: rgb(38, 166, 238)
    .introduction
      position: relative
      margin-left: 180px
      margin-top: 40px
      .text
        font-size: 32px
        color: #fff
      .infomation
        color: #fff
        margin-top: 55px
        li
          float: left
          margin-right: 25px
          .icon-location, .icon-github, .icon-email
            font-size: 22px
          .text
            vertical-align: text-top
            font-size: 14px
</style>
