<template>
  <div id="app">
    <Main msg="Point Of No Return"/>
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style>
#app {
  margin: 60px auto 0;
  max-width: 1080px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*
  #F44336
  #9E9E9E
  */
}
</style>
