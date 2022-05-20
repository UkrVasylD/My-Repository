<template>
  <div>
    <div>Total: {{ getTotalPrice }}</div>
    <div class="list-container">
      <pizza-card v-for="pizza in pizzaList" :key="pizza.id" :pizza="pizza" />
    </div>
  </div>
</template>

<script>
import PizzaCard from "./PizzaCard.vue";
import { mapGetters } from "vuex";
export default {
  name: "PizzaList",

  components: {
    PizzaCard,
  },

  computed: {
    ...mapGetters(["pizzaList", "getTotalPrice"]),
  },
};
</script>

<style lang="css" scoped>
.list-container {
  display: flex;
}
</style>