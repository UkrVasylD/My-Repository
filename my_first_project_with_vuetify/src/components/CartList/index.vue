<template>
  <div class="cart-wraper">
    <div class="cart-item">
      <cart-item
        v-for="cartItem in getCartList"
        :key="cartItem.id"
        :cartItem="cartItem"
      />
      <div class="total-price">Total price = {{ getTotalPrice }} грн.</div>
    </div>
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
    ...mapGetters("cart", ["getCartList", "getTotalPrice"]),
  },
};
</script>

<style lang="scss" scoped>
.cart-wraper {
  display: grid;
  grid-template-columns: 1fr minmax(auto, 75vh) 1fr;
  min-height: 100%;
  // background-color: rgba(99, 143, 139, 0.75);

  .cart-item {
    grid-column-start: 2;
    grid-column-end: 3;
    background-color: rgba(99, 143, 139, 0.75);

    .total-price {
      font-size: 200%;
      background-color: rgba(21, 143, 131, 0.75);
      border-radius: 5px;
      padding-left: 15px;
    }
  }
}
</style>
