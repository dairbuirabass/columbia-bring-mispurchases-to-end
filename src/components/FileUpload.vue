<template>
  <div class="file-upload">
    <div class="md-accent">
      <md-card-header>
        <div class="md-title font">Want to know what colors would look best on you?</div>
        <div class="md-subheading">Try our color analysis tool. Upload a picture of your face</div>
        <md-field class="image-upload">
          <label class="text">Upload image</label>
          <md-file class="input" v-on:change="emitToParent" placeholder="Upload image" />
        </md-field>
        <div class="face-colors">
            <div v-bind:style="{ backgroundColor: colorEyes }" id="eyes" class="select-color"></div>
            <div v-bind:style="{ backgroundColor: colorEyes }" id="hair" class="select-color"></div>
            <div v-bind:style="{ backgroundColor: colorEyes }" id="skin" class="select-color"></div>
        </div>
      </md-card-header>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'FileUpload',
  computed: {
    ...mapState(['colorEyes']),
    ...mapGetters(['getEventById'])
  },
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
.md-card {
  width: 100%;
  margin: 0px;
  display: inline-block;
  vertical-align: top;
}
.font {
  font-family: 'Poppins', sans-serif;
}
.md-progress-bar {
  margin: 24px;
}
.image-upload {
  display: inline-block;
  width: 33%;
}
.face-colors {
  display: inline-block;
  margin-left: 2%;
  width: 31%;
  
  .select-color {
    height: 52px;
    width: 52px;
    background-color: grey;
    border-radius: 50%;
  }
}
</style>
