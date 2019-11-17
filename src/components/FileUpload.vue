<template>
  <div class="file-upload">
        <div class="image-processing">
          <md-field class="image-upload">
            <label class="text">Upload image</label>
            <md-file class="input" v-on:change="emitToParent" placeholder="Upload image" />
          </md-field>
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
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins|Roboto&display=swap');

.text {
  color:black;
  width: 100%;
}
.input {
  color:black;
  width: 400px;
}
.font {
  font-family: 'Poppins', sans-serif;
}
.md-progress-bar {
  margin: 24px;
}
.face-colors {
  flex: 1;
  margin-left: 2%;
  width: 31%;
  
  .select-color-wrapper {
    display: flex;
    margin-bottom: 16px;
    align-items: center;
  }

  .select-color {
    height: 40px;
    width: 40px;
    background-color: #bebebe;
    border-radius: 50%;
  }
}
</style>
