<template>
  <div class="content">
    <div class="articles">
      <div class="article-list">
        <ul class="aritcles">
          <li v-for="articles in articleRendered" class="article-item">
            <h2 class="title">
              <router-link :to="'/article/'+articles.index" class="title-link">{{articles.title}}</router-link>
            </h2>
            <span class="date">{{articles.date}}</span>
            <p class="excerpt">{{articles.excerpt}}</p>
          </li>
        </ul>
      </div>
      <v-pagination :pageNum="pageNum" v-on:getIndex="processIndex"></v-pagination>
    </div>
    <div class="sidebar">
      <v-search></v-search>
    </div>
  </div>
</template>

<script>
  import pagination from 'components/pagination/pagination.vue';
  import search from 'components/search/search.vue';
  const ERR_OK = 200;

  export default{
    data(){
      return {
        article: [],
        articleRendered: []
      };
    },
    components: {
      'v-pagination': pagination,
      'v-search': search
    },
    methods: {
      processIndex(index){
        let j = index * 8,
          k = (index + 1) * 8,
          l = this.article.length,
          q = l < k ? l : k;
        this.articleRendered = [];
        for (let i = j; i < q; i++) {
          this.articleRendered.push(this.article[i]);
        }
      }
    },
    created() {
      this.$http.get('http://localhost/textphp/data.php').then((res)=> {
        res = JSON.parse(res.body);
        if (res.code === ERR_OK) {
          this.article = res.data.articles.article;
          this.articleRendered = this.article.slice(0, 8);
        }
      })
    },
    computed: {
      pageNum(){
        let i = Math.floor(this.article.length / 8) + 1;
        return i;
      }
    },
    beforeRouteLeave(to, from, next){
      this.$store.commit('hiddenHeader', to.path);
      next();
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .content
    display: flex
    margin: 10px 180px 0 180px
    padding-bottom: 50px
    .articles
      flex: 1
      .article-list
        min-height: 1050px
        .aritcles
          padding-left: 0
          list-style: none
          .article-item
            width: 650px
            border-bottom: 1px solid rgb(238, 238, 238)
            margin: 30px 0 30px 0
            .title
              margin: 0
              font-size: 23px
              font-weight: 400
              color: rgb(38, 166, 238)
              .title-link
                display: inline-block
                position: relative
                &::before
                  content: ''
                  position: absolute
                  width: 100%
                  height: 2px
                  bottom: -4px
                  left: 0
                  background: rgb(38, 166, 238)
                  visibility: hidden
                  transform: scaleX(0)
                  transition: all 0.2s ease-in-out 0s
                &:hover::before
                  visibility: visible
                  transform: scaleX(1)
            .date
              display: inline-block
              font-size: 10px
              color: #999
              margin: 15px 0 13px 0
            .excerpt
              font-size: 15px
              margin: 0 0 30px 0
    .sidebar
      flex: 0 1 300px
</style>
