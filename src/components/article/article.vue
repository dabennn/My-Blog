<template>
  <div class="article">
    <span class="back" onclick="window.history.go(-1)">
      <i class="icon-back"></i>
    </span>
    <article class="article-content markdown-body" ref="oContent" v-html="getContent"></article>
  </div>
</template>

<script>
  import marked from 'marked';
  import highlight from 'highlight.js';
  import 'github-markdown-css';

  const ERR_OK = 200;
  export default{
    data(){
      return {
        text: ''
      };
    },
    created(){
      window.scrollTo(0, 0);
      this.$http.get(this.url).then((res)=> {
        res = JSON.parse(res.body);
        if (res.code === ERR_OK) {
          this.text = res.data;
        }
      });
    },
    computed: {
      url(){
        let qry;
        let type;
        if (this.$route.path.match(/\/article\//)) {
          qry = this.$route.path.replace(/\/article\//, '');
          type = 'article';
        } else if (this.$route.path.match(/\/note\//)) {
          qry = this.$route.path.replace(/\/note\//, '');
          type = 'note';
        } else {
          return false;
        }
        let url = 'http://localhost/textphp/lleon/search.php?type=' + type + '&query=' + qry;
        return url;
      },
      getContent(){
        let code = document.querySelector('#code');
        marked.setOptions({
          renderer: new marked.Renderer(),
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
          highlight: function (code) {
            return require('highlight.js').highlightAuto(code).value;
          }
        });
        return marked(this.text);
      }
    },
    beforeRouteLeave(to, from, next){
      this.$store.commit('showHeader');
      next();
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import './../../../node_modules/highlight.js/styles/github-gist.css'
  .article
    min-height: 1050px
    margin: 30px 180px 0 180px
    .back
      display: inline-block
      font-size: 30px
      color: rgb(220, 220, 220)
      &:hover
        color: rgb(38, 166, 238)
        cursor: pointer
    .article-content
      margin-top: 30px
      &.markdown-body
        box-sizing: border-box
        min-width: 200px
        max-width: 980px
        margin-bottom: 30px
        padding: 0 45px 45px 0

</style>
