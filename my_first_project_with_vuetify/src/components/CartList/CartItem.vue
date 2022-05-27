<template>
  <div class="CartItem-container">
    <div>
      <img :src="product.imgSrc" alt="" />
    </div>
    <div>
      {{ product.name }}
    </div>
    <div>
      {{ product.price }}
    </div>
    <button @click="decrement(cartItem.id)">-</button>

    <div>
      {{ cartItem.count }}
    </div>
    <button @click="increment(cartItem.id)">+</button>
    <button @click="del(cartItem.id)">X</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "CartItem",

  props: {
    cartItem: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters("productToRender", ["getProductById"]),
    product() {
      return this.getProductById(this.cartItem.productId);
    },
  },
  methods: {
    ...mapActions("cart", ["decrement", "increment", "del"]),
  },
};
</script>

<style lang="scss" scoped>
.CartItem-container {
  display: flex;
  margin: 20px;
  padding: 10px;
  border: 2px solid blue;
  justify-content: space-around;
  align-self: center;
  img {
    width: 50px;
  }
}
</style>
