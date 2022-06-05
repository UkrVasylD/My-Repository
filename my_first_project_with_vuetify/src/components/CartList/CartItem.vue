<template>
  <div class="CartItem-container">
    <div>
      <img :src="product.imgSrc" alt="" />
    </div>
    <div>
      {{ product.name }}
    </div>
    <div>{{ product.price }} грн.</div>
    <button @click="decrement(cartItem.id)">-</button>

    <div>
      <input class="input_weight" v-model="cartItem.count" type="number" /> кг
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
  max-width: 75vh;
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  margin: 20px;
  padding: 10px;
  border: 2px solid blue;
  .input_weight {
    width: 50px;
  }
  img {
    width: 50px;
  }
}
</style>
