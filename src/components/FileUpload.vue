<template>
  <div class="file-upload">
    <div class="md-accent">
      <md-card-header>
        <div class="md-title">Want to know what colors would look best on you?</div>
        <md-divider></md-divider>
        <br>
        <div class="md-subheading">Try our color analysis tool. Upload a picture of your face</div>
        <md-card-media class="media">
          <md-field>
            <label class="text">Upload image</label>
            <md-file class="input" v-on:change="emitToParent" placeholder="Upload image" />
          </md-field>
        </md-card-media>
      </md-card-header>
    </div>
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
.text{
  color:black;
  width: 100%;
}
.input{
  color:black;
  width: 400px;
}
.md-card {
    width: 100%;
    margin: 0px;
    display: inline-block;
    vertical-align: top;
  }
.media {
  width: 200px;
}
</style>
