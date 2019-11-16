<template>
  <div class="file-upload">
    <md-card class="md-primary">
      <md-card-header>
        <div class="md-title">Upload image</div>
        <md-card-media>
          <md-field>
            <label>Upload files</label>
            <md-file v-on:change="emitToParent" placeholder="Hello" />
          </md-field>
        </md-card-media>
      </md-card-header>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'FileUpload',
  methods: { 
    emitToParent (event) {
      this.$emit('childToParent', event)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-card {
    width: 1300px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
