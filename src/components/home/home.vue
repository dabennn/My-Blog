<template>
  <div class="content">
    <div class="articles">
      <div class="article-list">
        <ul>
          <li v-for="article in articleRendered" class="article-item">
            <h1 class="title">
              <router-link to="/article" class="title-link">{{article.title}}</router-link>
            </h1>
            <span class="date">{{article.date}}</span>
            <p class="excerpt">{{article.excerpt}}</p>
          </li>
        </ul>
      </div>
      <v-pagination :pageNum="pageNum" v-on:getIndex="processIndex"></v-pagination>
    </div>
    <div class="sidebar">
      <v-search></v-search>
      <v-categoryList :categories="categories"></v-categoryList>
    </div>
  </div>
</template>

<script>
  import pagination from 'components/pagination/pagination.vue';
  import search from 'components/search/search.vue';
  import categoryList from 'components/categoryList/categoryList.vue';
  const ERR_OK = 0;

  export default{
    data(){
      return {
        articles: [],
        categories: {},
        articleRendered: []
      };
    },
    components: {
      'v-pagination': pagination,
      'v-search': search,
      'v-categoryList': categoryList
    },
    methods: {
      processIndex(index){
        let j = index * 8,
          k = (index + 1) * 8,
          l = this.articles.length,
          q = l < k ? l : k;
        this.articleRendered = [];
        for (let i = j; i < q; i++) {
          this.articleRendered.push(this.articles[i]);
        }
      }
    },
    created() {
      this.$http.get('api/articles').then((res)=> {
        res = res.body;
        if (res.errno === ERR_OK) {
          this.articles = res.data.articles;
          this.categories = res.data.categories;
          this.articleRendered = res.data.articles.slice(0, 8);
        }
      })
    },
    computed: {
      pageNum(){
        let i = Math.floor(this.articles.length / 8) + 1;
        return i;
      },
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
      .article-item
        width: 650px
        border-bottom: 1px solid rgb(238, 238, 238)
        margin: 30px 0 30px 0
        .title
          font-size: 24px
          color: rgb(38, 166, 238)
          .title-link
            display: inline-block
            position: relative
            &::before
              content: ''
              position: absolute
              width: 100%
              height: 2px
              bottom: -2px
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
          margin: 10px 0 10px 0
        .excerpt
          margin-bottom: 30px
    .sidebar
      flex: 0 1 300px
</style>
