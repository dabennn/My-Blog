<template>
  <div class="article">
    <!--<h1 class="article-title">{{article.title}}</h1>-->
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
    },
    beforeRouteLeave(to,from,next){
      this.$store.commit('showHeader');
      next();
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

</style>
