<template>
  <div class="list-container">
    <pizza-cart v-for="pizza in pizzaList" :key="pizza.id" :pizza="pizza" />
  </div>
</template>

<script>
import PizzaCart from "./PizzaCart.vue";
import { mapGetters } from "vuex";
export default {
  name: "PizzaList",

  components: {
    PizzaCart,
  },

  computed: {
    ...mapGetters(["pizzaList"]),
  },
};
</script>

<style lang="css" scoped>
.list-container {
  display: flex;
}
</style>