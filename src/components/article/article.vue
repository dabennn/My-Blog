<template>
  <div class="article">
    <h1 class="article-title">{{article.title}}</h1>
    <article class="article-content" ref="ocontent">
      {{article.excerpt}}
    </article>
  </div>
</template>

<script>
  import marked from 'marked';
  import mark from 'components/article/mark.json';

  const ERR_OK = 0;
  export default{
    data(){
      return {
        article: {}
      };
    },
    created(){
      this.$http.get('/api/articles').then((res)=> {
        res = res.body;
        if (res.errno === ERR_OK) {
          this.article = res.data.articles[0];
        }
      });
      this.$nextTick(()=>{
        this.$refs.ocontent.innerHTML = marked(mark.content);
      })
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .article
    margin: 40px 180px 0 180px
    .article-title
      font-size: 36px
      text-align: center
    .article-content
      margin-top: 30px
      dl, dt, h1, h2, h3, h4, h5, h6, ol, p, ul, pre
      display: block
      li
        display: list-item
      h1
        font-size: 2em
        margin: .67em 0
      h2
        font-size: 1.5em
        margin: .75em 0
      h3
        font-size: 1.17em
        margin: .83em 0
      h4, p, ul, ol, dl
        margin: 1.12em 0
      h5
        font-size: .83em
        margin: 1.5em 0
      h6
        font-size: .75em
        margin: 1.67em 0
      h1, h2, h3, h4, h5, h6, b, strong
        font-weight: bolder
      pre, code
        font-family: monospace
      pre
        white-space: pre

</style>
