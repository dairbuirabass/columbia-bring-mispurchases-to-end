<template>
  <div class="md-alignment-top-center products-grid">
		
		<md-card v-bind:key="item" v-for="item in items" class="product-card">
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="3:4">
          <router-link to='/product'>
            <img :src=item.imgSrc alt="Skyscraper">
          </router-link>
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">{{ item.price }}</span>
            <span class="md-subhead">Chanel pink sweater</span>
          </md-card-header>

          <md-card-actions>
            <md-button class="md-icon-button">
              <md-icon>favorite</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>visibility</md-icon>
            </md-button>
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>

  </div>
</template>

<style lang="css" scoped>

</style>

<script>
export default {
  name: 'Grid',
  data: function () {
    return {
      items: [
        {name: 'Chanel pink sweater', imgSrc: require('../assets/clothes/1.jpeg'), price: '50€'}, 
        {name: 'Gucci oversized hoodie', imgSrc: require('../assets/clothes/2.jpeg'), price: '40€'}, 
        {name: 'Skyler rose formal shirt', imgSrc: require('../assets/clothes/3.jpeg'), price: '30€'}, 
        {name: 'Fila oversized hoodie', imgSrc: require('../assets/clothes/4.jpeg'), price: '50€'}, 
        {name: 'Nike training set', imgSrc: require('../assets/clothes/5.jpeg'), price: '70€'},
        {name: 'Chanel blue hoodie', imgSrc: require('../assets/clothes/6.jpeg'), price: '40€'}, 
        {name: 'Adidas lilac T-shirt', imgSrc: require('../assets/clothes/7.jpeg'), price: '40€'}, 
        {name: 'Gucci bodysuit', imgSrc: require('../assets/clothes/8.jpg'), price: '30€'}, 
        {name: 'Chanel pink sweater', imgSrc: require('../assets/clothes/3.jpeg'), price: '20€'}
      ],
    }
  },
  methods: { 
    emitToParent (event) {
      this.$emit('childToParent', event)
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.products-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-card {
  margin: 16px;
}
</style>
