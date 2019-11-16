<template>
  <div class="pdp">
		<div class="product">
      <md-card-header>
        <div class="sweater">
          <router-link to='/product'>
            <img src="../assets/clothes/1.jpeg" class="img">
          </router-link>
        </div>
        <div class="desc font">
          <span class="md-title">Chanel pink sweater</span>
          <br>
          <span class="md-title">50€</span>
        </div>
      </md-card-header>
		</div>
  </div>
</template>

<script>
export default {
  name: 'ProductPage',
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
    width: 400px;
    margin: 50px;
    display: inline-block;
    vertical-align: top;
}
.img{
  margin: 30px;
}
.font{
  font-family: 'Poppins', sans-serif;
}
</style>
