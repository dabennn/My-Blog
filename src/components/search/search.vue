<template>
  <div class="search">
    <h1 class="title">Search:</h1>
    <input class="search-box" type="text" placeholder="Search" @keydown.enter="enter" ref="oSearchBox">
    <button class="search-btn" @click="searching" ref="oBtn">
      <i class="icon-search"></i>
    </button>
  </div>
</template>

<script>
  export default{
    methods: {
      enter(){
        this.$refs.oBtn.click();
      },
      searching(){
        if (this.$refs.oSearchBox.value !== '') {
          this.$refs.oSearchBox.value = '';
        }
        return;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .search
    margin-top: 30px
    .title
      margin:0 0 15px 0
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
</style>
