<template>
  <div class="category">
    <div class="categories-wrapper" ref="wrapper">
      <div v-for="(item,index) in category">
        <h1 class="category-name">
          <a :id="'anchor'+index">{{item.name}} :</a>
        </h1>
        <ul class="category-lists">
          <li class="category-title" v-for="title in item.titles">
            <router-link :to="'/article/'+title.index" class="title-link">{{title.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="sidebar">
      <v-search></v-search>
      <v-categoryList :category="category" :wrapper="this.$refs.wrapper"></v-categoryList>
    </div>
  </div>
</template>

<script>
  import search from 'components/search/search.vue';
  import categoryList from 'components/categoryList/categoryList.vue';
  const ERR_OK = 200;
  export default{
    data(){
      return {
        category: []
      };
    },
    components: {
      'v-search': search,
      'v-categoryList': categoryList
    },
    created() {
      this.$http.get('http://localhost/textphp/data.php').then((res) => {
        res = JSON.parse(res.body);
        if (res.code === ERR_OK) {
          this.category = res.data.articles.category;
        }
      })
    },
    beforeRouteLeave(to, from, next){
      this.$store.commit('hiddenHeader', to.path);
      next();
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .category
    margin: 10px 180px 0 180px
    min-height: 1050px
    display: flex
    .categories-wrapper
      margin-top: 30px
      flex: 1
      .category-name
        margin: 0 0 25px 0
        font-size: 24px
        color: rgb(38, 166, 238)
      .category-lists
        padding-left: 0
        margin-bottom: 25px
        .category-title
          margin: 0 0 15px 50px
          list-style: initial
          .title-link:hover
            border-bottom: 1px solid #000
    .sidebar
      flex: 0 1 300px
</style>
