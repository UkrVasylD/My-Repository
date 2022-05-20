<template>
  <div>
    <pizza-row v-for="item in cartList" :key="item.id" :cart-item="item" />
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
    ...mapGetters(["cartList"]),
  },
};
</script>

<style lang="css" scoped>
</style>