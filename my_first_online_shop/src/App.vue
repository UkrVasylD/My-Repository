<template>
  <div id="app">
    Hello vue
    <shop-wraper />
  </div>
</template>

<script>
import ShopWraper from "./components/ShopWraper.vue";

export default {
  name: "App",
  components: {
    ShopWraper,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
