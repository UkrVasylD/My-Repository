<template>
  <div class="productItem-container">
    <div>
      <img :src="productItem.imgSrc" alt="" />
    </div>
    <div>
      {{ productItem.name }}
    </div>
    <div>
      {{ productItem.price }}
    </div>
    <button @click="addToCart(productItem.id)">Add to cart</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProductItem",

  props: {
    productItem: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    ...mapActions(["addToCart"]),
    // onAddToCart() {},
  },
};
</script>

<style lang="css" scoped>
.productItem-container {
  margin: 2%;
  padding: 0.5%;
  border: 2px solid blue;
}
.productItem-container img {
  max-width: 250px;
}
</style>
