<template>
  <div class="content">
    <div class="articles">
      <h2>Article</h2>
      <div class="article-list">
        <ul>
          <li>
            <h3 class="title">article-title</h3>
            <span class="date">date</span>
            <p class="excerpt">some article excerpts</p>
          </li>
        </ul>
      </div>
      <div class="page-index">1,2,3</div>
    </div>
    <div class="sidebar">
      <div class="classify-list">
        <h4>Classify</h4>
        <ul>
          <li>html</li>
          <li>css</li>
          <li>javascript</li>
        </ul>
      </div>
      <div class="tag-list">
        <h4>Tag</h4>
        <span class="tag">tag-html</span>
        <span class="tag">tag-css</span>
        <span class="tag">tag-js</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {};
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .content
    margin:0 180px 0 180px
</style>
