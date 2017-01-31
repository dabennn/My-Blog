<template>
  <div class="navbar" :class="{article_style : !articleStyle}">
    <h1 class="lleon">
      <router-link to="/home">lleon</router-link>
    </h1>
    <ul class="nav-list clearfix">
      <li class="nav-item" v-for="information in informations">
        <router-link class="nav-link" :class="linkStyle" :to="information.to">{{information.item}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

  export default{
    data(){
      return {
        informations: [
          {
            item: '首页',
            to: '/home'
          },
          {
            item: '分类',
            to: '/category'
          },
          {
            item: '笔记',
            to: '/notes'
          },
          {
            item: '关于',
            to: '/about'
          }
        ]
      };
    },
    computed: {
      articleStyle(){
        return this.$store.state.headerShow;
      },
      linkStyle(){
        return this.articleStyle ? 'link_common' : 'link_article';
      }
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
    &.article_style
      background-color: #fff
      color: rgb(38, 166, 238)
      &:after
        content: ''
        position: absolute
        top: 70px
        left: 0
        width: 100%
        height: 1px
        font-size: 0
        background: rgb(238, 238, 238)
    .lleon
      float: left
      margin: 0 0 0 180px
      height: 100%
      line-height: 65px
      font-size: 36px
      font-weight: 700
    .nav-list
      float: right
      margin: 25px 180px 0 0
      padding-left: 0
      list-style: none
      .nav-item
        float: left
        height: 30px
        margin-right: 25px
        line-height: 30px
        .nav-link
          width: 100%
          height: 100%
          padding: 0 5px 11px 5px
          font-size: 16px
          &.link_common
            color: rgba(255, 255, 255, 0.6)
            &:hover
              border-bottom: 2px solid #fff
              color: rgba(255, 255, 255, 1)
          &.link_article
            color: rgba(200, 200, 200, 0.9)
            &:hover
              color: rgba(38, 166, 238, 1)
          &.active
            color: rgba(255, 255, 255, 1)


</style>
