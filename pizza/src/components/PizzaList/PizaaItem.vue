<template>
  <div class="PizaaItem-container">
    <div>
      <img :src="pizzaItem.imgSrc" alt="" />
    </div>
    <div>
      {{ pizzaItem.name }}
    </div>
    <div>
      {{ pizzaItem.price }}
    </div>
    <button @click="addToCart(pizzaItem.id)">Add to cart</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "PizaaItem",

  props: {
    pizzaItem: {
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
.PizaaItem-container {
  margin: 20px;
  padding: 10px;
  border: 2px solid blue;
}
.PizaaItem-container img {
  width: 150px;
}
</style>
