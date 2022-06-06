<template>
  <div class="CartItem-container">
    <div>
      <img :src="product.imgSrc" alt="" />
    </div>
    <div>
      {{ product.name }}
    </div>
    <div>{{ product.price }} грн.</div>
    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="primary"
      @click="decrement(cartItem.id)"
    >
      <v-icon dark> mdi-minus </v-icon>
    </v-btn>
    <!-- <button @click="decrement(cartItem.id)">-</button> -->

    <div>
      <input class="input_weight" v-model="cartItem.count" type="number" /> кг
    </div>
    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="primary"
      @click="increment(cartItem.id)"
    >
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
    <!-- <button @click="increment(cartItem.id)">+</button> -->
    <!-- <button @click="del(cartItem.id)">X</button> -->
    <v-btn class="mx-2" fab dark small color="purple" @click="del(cartItem.id)"
      >Del</v-btn
    >
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
  max-width: 75vw;
  display: grid;
  // grid-auto-flow: column;
  grid-template-columns: 2fr 5fr 2fr 2fr 3fr repeat(2, 2fr);
  justify-items: center;
  align-items: center;
  margin: 20px;
  padding: 10px;
  border: 2px solid blue;
  background-color: rgba(24, 181, 164, 0.75);
  .input_weight {
    width: 50px;
    background-color: rgba(21, 143, 131, 0.75);
    border-radius: 25%;
    padding-left: 5px;
    text-align: center;
  }
  img {
    width: 50px;
  }
}
</style>
