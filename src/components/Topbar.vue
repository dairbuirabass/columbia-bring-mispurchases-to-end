<template>
  <div class="topbar">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <md-toolbar class="md-primary">
      <h3 class="md-title">the point of no return</h3>
      <div class="md-toolbar-section-start">
        <md-autocomplete
          class="search"
          md-layout="box"
          :md-options="employees"
          md-dense>
          <label>Search...</label>
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
    <md-menu md-size="small">
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
    selectedEmployee: null,
      employees: [
        'Jim Halpert',
        'Dwight Schrute',
        'Michael Scott',
        'Pam Beesly',
        'Angela Martin',
        'Kelly Kapoor',
        'Ryan Howard',
        'Kevin Malone',
        'Creed Bratton',
        'Oscar Nunez',
        'Toby Flenderson',
        'Stanley Hudson',
        'Meredith Palmer',
        'Phyllis Lapin-Vance'
      ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
</style>
