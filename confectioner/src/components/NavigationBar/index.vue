<template>
  <div>
    <span class="navigation-bar-item">
      <router-link to="/mini-pie/:id?">МІНІ-ТОРТИ</router-link>
    </span>
    <span class="navigation-bar-item">
      <router-link to="/pie/:id?"> ТОРТИ</router-link>
    </span>
    <span class="navigation-bar-item">
      <router-link to="/cake/:id?"> ТІСТЕЧКА</router-link>
    </span>
    <span class="navigation-bar-item">
      <router-link to="/other-dessert/:id?"> ІНШІ ДЕСЕРТИ</router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style lang="css" scoped>
.navigation-bar-item {
  margin: 5%;
  color: brown;
}
</style>
