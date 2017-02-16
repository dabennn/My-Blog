<template>
  <div class="about">
    <div class="about-content">
      <p>有志者事竟成，破釜沉舟，百二秦关终属楚</p>
      <p>苦心人天不负，卧薪尝胆，三千越甲可吞吴</p>
      <h1 class="contact">Contact</h1>
      <ul class="infos">
        <li v-for="item in info" class="info">
          {{item.name}} : <a :href="item.path" class="info-link">{{item.user}}</a>
        </li>
        <li class="info">邮箱 : dabennn07@gmail.com</li>
      </ul>
      <h1 class="dev">Development Environment</h1>
      <div v-for="item in IDE">
        <h2>{{item.name}}</h2>
        <div>
          <span v-for="tag in item.content" class="tag">{{tag}}</span>
        </div>
      </div>
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
      return {
        info: [
          {
            name: 'GitHub',
            user: '@dabennn',
            path: 'https://github.com/dabennn'
          },
          {
            name: '新浪微博',
            user: '@爱看电影的徐先森',
            path: 'http://weibo.com/2514155741/profile?topnav=1&wvr=6'
          },
          {
            name: '豆瓣',
            user: '@爱看电影的徐先森',
            path: 'https://www.douban.com/people/82623567/'
          },
          {
            name: '博客',
            user: '@lleon',
            path: 'http://lleon.xyz'
          }
        ],
        IDE: [
          {
            name: 'language',
            content: [
              'Javascript', 'php', 'Node.js', 'MySQL'
            ]
          },
          {
            name: 'editor',
            content: [
              'WebStorm', 'Sublime Text', 'Aptana Studio'
            ]
          },
          {
            name: 'system',
            content: ['window']
          },
          {
            name: 'other',
            content: ['Git', 'Google Chrome', 'XAMPP']
          }
        ]
      };
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
      margin: 20px 0 0 0
      flex: 1
      .contact
        position: relative
        margin-top: 30px
        &:before
          position: absolute
          bottom: -15px
          width: 600px
          height: 1px
          background: rgb(238, 238, 238)
          content: ''
      .infos
        margin-top: 50px
        .info
          margin-bottom: 10px
          .info-link
            color: rgb(38, 166, 238)
            &:hover
              border-bottom: 1px solid rgb(38, 166, 238)
      .dev
        margin-top: 30px
        margin-bottom: 50px
        position: relative
        &:before
          position: absolute
          bottom: -15px
          width: 600px
          height: 1px
          background: rgb(238, 238, 238)
          content: ''
      .tag
        display: inline-block
        padding: 10px 13px
        border: 1px solid rgb(238, 238, 238)
        border-radius: 3px
        margin-right: 10px
        cursor: pointer
        &:hover
          background: rgb(38, 166, 238)
          color: #fff
    .sidebar
      flex: 0 1 300px
</style>
