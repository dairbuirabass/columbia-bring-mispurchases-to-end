<template>
  <div class="palette">
    <div>
      <div v-bind:key="item" v-for="item in items"
           v-bind:style="{ backgroundColor: item.color }" class="color-box">
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Palette',
  data: function () {
    return {
      items: [
        {color: '#FF84C5', name: 'Hot Pink'}, 
        {color: '#B9BABC', name: 'Wolf Gray'}, 
        {color: '#01AE79', name: 'Jade'}, 
        {color: '#A60092', name: 'Purple Swag'}, 
        {color: '#C9A0A6', name: 'Opal'}, 
      ],
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.palette {
  flex: 1;
  margin-left: 2%;
  width: 50%;
  min-width: 460px;

  > div {
    display: flex;
  }

  .color-box {
    height: 160px;
    width: 20%;
    text-align: center;

    > span {
      color: white;
      line-height: 160px;
    }
  }
}
</style>
