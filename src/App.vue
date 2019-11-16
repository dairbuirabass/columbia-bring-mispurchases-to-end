<template>
  <div id="app">
    <Topbar />
    <router-view />
  </div>
</template>

<script>
import Topbar from './components/Topbar'

export default {
  name: 'app',
  components: {
    Topbar
  }
}
</script>

<style src="./style.scss" lang="scss" />