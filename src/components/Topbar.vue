<template>
  <div class="topbar">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <md-toolbar class="md-primary">
      <router-link to='/'>
        <h3 class="md-title font">the point of no return</h3>
      </router-link>
      <div class="md-toolbar-section-start">
        <md-autocomplete
          v-model="selectedCategory"
          class="search font"
          md-layout="box"
          :md-options="categories"
          md-dense>
          <label>Search</label>
        </md-autocomplete>
      </div>
      <div class="md-toolbar-section-end">
        <div>
          <md-icon class="icon">perm_identity</md-icon>
          <md-icon class="icon">favorite_border</md-icon>
          <md-icon class="icon">shopping_cart</md-icon>
        </div>
      </div>
    </md-toolbar>
    <md-menu class="menu" md-size="small">
      <md-button md-menu-trigger>New in</md-button>
      <md-button md-menu-trigger>Clothing</md-button>
      <md-button md-menu-trigger>Shoes</md-button>
      <md-button md-menu-trigger>Accesories</md-button>
      <md-button md-menu-trigger>Activewear</md-button>
      <md-button md-menu-trigger>Face + Body</md-button>
      <md-button md-menu-trigger>Living + Gifts</md-button>
      <md-button md-menu-trigger>Brands</md-button>
    </md-menu>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
  data: () => ({
    selectedCategory: null,
    categories: [
      'T-Shirts',
      'Blouses',
      'Crop Tops',
      'Kimonos',
      'Sweaters',
      'Evening Tops'
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Poppins|Roboto&display=swap');
  .md-toolbar{
    width: 100%;
  }
  .icon{
    margin-left: 20px;
  }
  .search {
    max-width: 500px;
  }
  .md-toolbar-section-start{
    margin-left: 280px;
  }
  .menu{
    background-color: #ffb3b3;
    width: 100%;
    
    .md-button {
      color: white;
    }
  }
  .font{
  font-family: 'Poppins', sans-serif;
  }
</style>
