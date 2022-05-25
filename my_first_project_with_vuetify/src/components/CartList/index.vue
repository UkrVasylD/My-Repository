<template>
  <div class="PizaaList-wraper">
    <cart-item
      v-for="cartItem in getCartList"
      :key="cartItem.id"
      :cartItem="cartItem"
    />
    <div>Total price = {{ getTotalPrice }}</div>
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
    ...mapGetters(["cart", "getCartList", "getTotalPrice"]),
  },
};
</script>

<style lang="css" scoped></style>
