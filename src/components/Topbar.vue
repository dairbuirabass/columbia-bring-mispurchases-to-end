<template>
  <div class="topbar">
    <md-toolbar class="md-primary">
      <h3 class="md-title"></h3>
      <div class="md-toolbar-section-end">
        <md-button class="md-icon-button">
          <md-icon>refresh</md-icon>
        </md-button>
        <md-button class="md-icon-button">
          <md-icon>more_vert</md-icon>
        </md-button>
      </div>
    </md-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .md-toolbar{
    width: 100%;
  }
</style>
