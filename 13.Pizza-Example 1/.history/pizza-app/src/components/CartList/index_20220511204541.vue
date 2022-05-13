<template>
  <div>
    <pizza-row v-for="item in cartList" :key="item.id" :cart-item="item" />
    <div>Total: {{ getTotalPrice }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PizzaRow from "./PizzaRow.vue";
export default {
  name: "CartList",

  components: {
    PizzaRow,
  },

  computed: {
    ...mapGetters(["cartList", "getTotalPrice"]),
  },
};
</script>

<style lang="css" scoped>
</style>