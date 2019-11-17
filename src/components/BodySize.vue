<template>
  <div class="body-size">
     <!-- http://episodic-vuejs.s3-website.eu-central-1.amazonaws.com -->
    <iframe src="https://www.bodyvisualizer.com/" />
  </div>
</template>

<script>
export default {
  name: 'BodySize'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  iframe {
    width: 1200px;
    height: 600px;
    vertical-align: none;
  }
</style>
