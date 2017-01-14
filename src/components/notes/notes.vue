<template>
  <div class="notes">
    <div class="note-list">
      <h1 class="title">Notes:</h1>
      <ul>
        <li class="note" v-for="note in notes">
          <a class="note-link" href="">{{note.title}}</a>
        </li>
      </ul>
    </div>
    <div class="sidebar">
      <v-search></v-search>
    </div>
  </div>
</template>

<script>
  import search from 'components/search/search.vue';
  const ERR_OK = 0;
  export default{
    data(){
      return {
        notes: {},
        categories: []
      };
    },
    components: {
      'v-search': search
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
  .notes
    margin: 10px 180px 0 180px
    min-height: 1050px
    display: flex
    .note-list
      margin-top: 30px
      flex: 1
      .title
        margin-bottom: 20px
        font-size: 24px
        color: rgb(38, 166, 238)
      .note
        margin: 0 0 15px 50px
        list-style: initial
        .note-link:hover
          border-bottom: 1px solid #000
    .sidebar
      flex: 0 1 300px
</style>
