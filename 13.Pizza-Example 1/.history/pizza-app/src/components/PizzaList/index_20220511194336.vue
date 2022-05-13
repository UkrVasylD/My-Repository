<template>
  <div>
    <pizza-cart v-for="pizza in pizzaList" :key="pizza.id" :pizza="pizza" />
  </div>
</template>

<script>
import PizzaCart from "./PizzaCart.vue";
export default {
  name: "PizzaList",

  components: {
    PizzaCart,
  },
};
</script>

<style lang="scss" scoped>
</style>