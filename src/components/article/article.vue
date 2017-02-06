<template>
  <div class="article">
    <span class="back" onclick="window.history.go(-1)">
      <i class="icon-back"></i>
    </span>
    <article class="article-content" ref="oContent" v-html="getContent"></article>
  </div>
</template>

<script>
  import marked from 'marked';

  const ERR_OK = 200;
  export default{
    data(){
      return {
        text: ''
      };
    },
    created(){
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
        let url = 'http://localhost/textphp/search.php?type=' + type + '&query=' + qry;
        return url;
      },
      getContent(){
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

</style>
