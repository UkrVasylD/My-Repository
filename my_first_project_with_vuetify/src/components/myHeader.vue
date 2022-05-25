<template>
  <div class="container">
    <div class="head-titel">Яна кондитер</div>
    <div class="navigation">
      <div class="navigation-item" @click="goToRoutName('home')">Home</div>
      <div class="navigation-item">МІНІ-ТОРТИ</div>
      <div class="navigation-item" @click="goToRoutName('pie')">ТОРТИ</div>
      <div class="navigation-item">ТІСТЕЧКА</div>
      <div class="navigation-item">ІНШІ ДЕСЕРТИ</div>
      <div class="navigation-item" @click="goToRoutName('editor')">Editor</div>

      <div class="navigation-item" @click="goToRoutName('cart')">
        <!-- <img :src="require('../assets/cart-icon.png')" alt="" /> -->
        Cart
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myHeader",

  methods: {
    goToRoutName(routName) {
      this.$router.push({ name: routName });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 900px;
  background-color: rgb(172, 146, 185);
  color: azure;

  .head-titel {
    text-align: center;
    font-size: 200%;
  }
  .navigation {
    display: flex;
    justify-content: space-around;
    .navigation-item {
      &:hover {
        color: rgb(60, 82, 60);
        cursor: pointer;
      }
      img {
        max-width: 3%;
      }
    }
  }
}
</style>
