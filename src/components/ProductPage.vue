<template>
  <div class="pdp">
		<div class="product">
      <md-card-header>
        <div class="cloth">
          <div class="sweater">
            <router-link to='/product'>
              <img src="../assets/clothes/1.jpeg" class="img">
            </router-link>
          </div>
          <div class="desc font">
            <span class="md-headline">Chanel pink sweater</span>
            <br>
            <span class="md-title">50€</span>
            <br>
            <md-button class="md-raised md-accent2 btn">Try it on</md-button>
          </div>
        </div>
        <div class="body">
          <span class="md-headline">Enter your dimensions for correct sizing:</span>
          <BodySize/>
        </div>
      </md-card-header>
		</div>
  </div>
</template>

<script>
import BodySize from './BodySize'

export default {
  name: 'ProductPage',
  components: {
		BodySize
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product{
  width: 95%;
  margin: 30px;
  background-color: rgb(230, 230, 230);
	border-radius: 10px;
	overflow: hidden;
}
.md-card {
    width: 300px;
    display: inline-block;
    vertical-align: top;
}
.img{
  margin: 30px;
}
.font{
  font-family: 'Poppins', sans-serif;
}
.btn{
  margin:30px;
  width: 300px;
}
.cloth{
  display: inline-block;
}
.body{
  margin-top: 0%;
  display: inline-block;
}
</style>
