<template>
  <div class="content">
    <div class="articles">
      <div class="article-list">
        <ul>
          <li v-for="article in articleRendered" class="article">
            <h3 class="title">
              <a href="#" class="title-link">{{article.title}}</a>
            </h3>
            <span class="date">{{article.date}}</span>
            <p class="excerpt">{{article.content}}</p>
          </li>
        </ul>
      </div>
      <v-pagination :pageNum="pageNum" v-on:getIndex="processIndex"></v-pagination>
    </div>
    <div class="sidebar">
      <div class="classify-list">
        <h4>Classifys</h4>
        <ul>
          <li v-for="classify in classifys">{{classify.name}}({{classify.num}})</li>
        </ul>
      </div>
      <div class="tag-list">
        <h4>Tags</h4>
        <span class="tag" v-for="tag in tags">{{tag}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import pagination from 'components/pagination/pagination.vue';
  const ERR_OK = 0;

  export default{
    data(){
      return {
        articles: [],
        classifys: {},
        tags: [],
        articleRendered: [],
      };
    },
    components: {
      'v-pagination': pagination
    },
    methods: {
      processIndex(index){
        let j = index * 5,
          k = (index + 1) * 5,
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
          this.classifys = res.data.classifys;
          this.tags = res.data.tags;
          this.articleRendered = res.data.articles.slice(0, 5);
        }
      })
    },
    computed: {
      pageNum(){
        let i = Math.floor(this.articles.length / 5) + 1;
        return i;
      },
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .content
    margin: 10px 180px 0 180px
    display: flex
    .articles
      flex: 1
      .article-list
        min-height: 650px
      .article
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
