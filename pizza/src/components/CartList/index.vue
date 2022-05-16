<template>
  <div class="PizaaList-wraper">
    <cart-item
      v-for="pizzaItem in getcartList"
      :key="pizzaItem.id"
      :cartPizzaItem="pizzaItem"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "@/components/CartList/CartItem.vue";

export default {
  name: "CartList",
  components: {
    CartItem,
  },

  computed: {
    ...mapGetters(["getcartList"]),
  },
};
</script>

<style lang="css" scoped>
.PizaaList-wraper {
  display: flex;
}
</style>
