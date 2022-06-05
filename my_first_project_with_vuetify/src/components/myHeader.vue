<template>
  <div class="container">
    <div class="head-titel">Яна кондитер</div>
    <div class="navigation">
      <div class="navigation-list">
        <div class="navigation-item" @click="goToRoutName('home')">Home</div>
        <div class="navigation-item">МІНІ-ТОРТИ</div>
        <div class="navigation-item" @click="goToRoutName('pie')">ТОРТИ</div>
        <div class="navigation-item">ТІСТЕЧКА</div>
        <div class="navigation-item">ІНШІ ДЕСЕРТИ</div>
        <div class="navigation-item" @click="goToRoutName('editor')">
          Editor
        </div>

        <div class="navigation-item" @click="goToRoutName('cart')">
          Cart
          <!-- <img :src="require('../assets/cart-icon.png')" alt="" /> -->
        </div>
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
  background-color: rgb(172, 146, 185);
  color: azure;

  .head-titel {
    text-align: center;
    font-size: 200%;
    padding: 30px 0;
  }
  .navigation {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr minmax(auto, 1100px) 1fr;

    .navigation-list {
      display: grid;
      grid-auto-flow: column;
      justify-items: center;
      grid-template-rows: 1fr;
      grid-column-start: 2;
      // grid-auto-columns: ;
      .space-end {
        grid-column-end: end;
      }
      .navigation-item {
        &:hover {
          color: rgb(60, 82, 60);
          cursor: pointer;
        }
      }
    }
  }
}
</style>
