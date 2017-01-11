<template>
  <div class="notes">
    <div class="note-list">
      <h2>Notes</h2>
      <ul>
        <li v-for="note in notes">{{note.title}}</li>
      </ul>
    </div>
    <div class="sidebar">
      <div class="search">search box</div>
      <div class="classify-list">
        <h4>Classify</h4>
        <ul>
          <li>html</li>
          <li>css</li>
          <li>javascript</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  const ERR_OK = 0;
  export default{
    data(){
      return {
        notes: {}
      };
    },
    created(){
      this.$http.get('/api/notes').then((res)=> {
        res = res.body;
        if (res.errno === ERR_OK) {
          this.notes = res.data.notes;
        }
      })
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
