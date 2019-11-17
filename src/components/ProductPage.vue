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
          <md-divider />
          <div class="desc font">
            <span class="md-headline">Chanel pink sweater</span>
            <br>
            <span class="md-title">50€</span>
            <br>
            <md-button class="md-raised md-accent2 btn">Try it on</md-button>
          </div>
        </div>
        <div class="sweaterdemo font">
          <router-link to='/product'>
            <img src="../assets/sweater.jpeg" class="img">
          </router-link>
          <md-divider />
          <span class="md-title">This is a visual approximation of how the item will look on you.</span>
          <md-button class="md-raised md-accent2 btn">Add to cart</md-button>
        </div>
        <md-divider />
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
.product {
    padding-left: 50px;
    margin: 20px auto;
    max-width: 1440px;
		background-color: white;
		border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 36px 28px rgba(0,0,0,0.1);
}
.md-card {
    width: 300px;
    display: inline-block;
    vertical-align: top;
}
.img {
  margin: 30px;
}
.font {
  font-family: 'Poppins', sans-serif;
}
.btn.md-raised.md-accent2{
  margin-left: 0;
  background-color: #ffb3b3;
  color: white;
  margin:30px;
  width: 300px;
}
.cloth{
  display: inline-block;
}
.sweaterdemo{
  margin-left: 300px;
  width: 250px;
  display: inline-block;
}
.btn1{
  margin: 40px;
  width: 400px;
}
.btn2{
  margin-top: 20px;
  width: 250px;
}
.body{
  width: 1000px;
  margin-left: 100px;
}
</style>
