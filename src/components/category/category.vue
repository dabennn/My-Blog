<template>
  <div class="category">
    <div class="categories-wrapper">
      <div v-for="category in categories">
        <h1 class="category-name">{{category.name}} :</h1>
        <ul>
          <li class="category-title" v-for="title in category.titles">
            <a href="" class="title-link">{{title}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="sidebar">
      <v-search></v-search>
      <v-categoryList :categories="categories"></v-categoryList>
    </div>
  </div>
</template>

<script>
  import search from 'components/search/search.vue';
  import categoryList from 'components/categoryList/categoryList.vue';
  const ERR_OK = 0;
  export default{
    data(){
      return {
        categories: []
      };
    },
    components: {
      'v-search': search,
      'v-categoryList': categoryList
    },
    created(){
      this.$http.get('/api/articles').then((res)=> {
        res = res.body;
        if (res.errno === ERR_OK) {
          this.categories = res.data.categories;
        }
      })
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .category
    margin: 10px 180px 0 180px
    display: flex
    .categories-wrapper
      margin-top: 30px
      flex: 1
      .category-name
        margin-bottom: 25px
        font-size: 24px
        color: rgb(38, 166, 238)
      .category-title
        margin: 0 0 15px 50px
        list-style: initial
        .title-link:hover
          border-bottom: 1px solid #000
    .sidebar
      flex: 0 1 300px
</style>
