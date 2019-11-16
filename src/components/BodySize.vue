<template>
  <div class="body-size">
     <!-- http://episodic-vuejs.s3-website.eu-central-1.amazonaws.com -->
    <iframe src="http://files.is.tue.mpg.de/erachlin/sina/body_sizing_site/" height="720" width="792" />
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
    width: 792px;
    height: 720px;
  }
</style>
