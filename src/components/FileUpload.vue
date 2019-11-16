<template>
  <div class="file-upload">
    <h3>Upload image</h3>
		<md-field>
      <label>Upload files</label>
			<md-file v-on:change="emitToParent" placeholder="A nice input placeholder" />
    </md-field>
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
h3 {
  margin: 40px 0 0;
}
</style>
