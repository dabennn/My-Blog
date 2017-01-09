<template>
  <div class="header">
    <div class="navbar">
      <span class="icon-name">lleon</span>
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/notes">Notes</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
    <div class="introduction">
      <div class="my-word">nothing is impossible</div>
      <ul>
        <li><i class="local"></i>loacation</li>
        <li><i class="git-ico"></i>github</li>
        <li><i class="email"></i>google.email</li>
      </ul>
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

</style>
