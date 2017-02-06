<template>
  <div class="search clearfix">
    <h1 class="title">Search:</h1>
    <input class="search-box" type="text" placeholder="Search" @keydown.enter="enter" v-model.trim="value"
           @keyup="asyncSearch">
    <button class="search-btn" @click="searching" ref="oBtn">
      <i class="icon-search"></i>
    </button>
    <span class="search-result">
      <ul class="search-list">
          <li class="search-item" v-for="item in searchResult">
            <router-link class="search-link" to="item.path">{{item.title}}</router-link>
          </li>
      </ul>
    </span>
  </div>
</template>

<script>
  let ERR_OK = 200;
  export default{
    data(){
      return {
        value: '',
        searchResult: []
      }
    },
    methods: {
      enter(){
        this.$refs.oBtn.click();
      },
      searching(){
        if (this.value !== '') {
          this.value = '';
        }
        return;
      },
      asyncSearch(){
        this.$http.get('http://localhost/textphp/search.php?keyword=' + this.value).then((res)=> {
          res = JSON.parse(res.body);
          if (res.code === ERR_OK) {
            this.searchResult = res.data;
          }
        })
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .search
    position: relative
    margin-top: 30px
    .title
      margin: 0 0 15px 0
      font-size: 20px
      color: rgb(38, 166, 238)
    .search-box
      width: 220px
      padding: 7px 0 7px 8px
      font-size: 14px
      border-radius: 3px
      border: 1px solid rgb(220, 220, 220)
    .search-btn
      padding: 7px 11px 4px 11px
      vertical-align: top
      font-size: 16px
      color: #fff
      cursor: pointer
      border-radius: 3px
      border: 1px solid transparent
      &:hover
        background: rgb(38, 166, 238)
    .search-result
      position: absolute
      top: 75px
      display: inline-block
      width: 273px
      z-index: 100
      background: #ffffff
      border: 1px solid rgb(220, 220, 220)
      border-radius: 3px
      .search-list
        list-style: none
        margin: 13px 0 13px 0
        padding-left: 18px
        .search-item
          margin: 7px 0 7px 0
          .search-link
            padding-bottom: 1px
            &:hover
              border-bottom: 1px solid #000000
</style>
