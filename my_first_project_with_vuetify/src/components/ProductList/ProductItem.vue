<template>
  <div class="productItem-container">
    <div>
      <img :src="productItem.imgSrc" alt="" />
    </div>
    <div>
      {{ productItem.name }}
    </div>
    <div>{{ productItem.price }} грн.</div>

    <button @click="addToCart(productItem.id)">Add to cart</button>
    <button @click="edit(productItem.id)">Edit</button>
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
    ...mapActions("cart", ["addToCart"]),
    edit(id) {
      this.$router.push({ name: "editor", params: { id: id } });
    },
  },
};
</script>

<style lang="scss" scoped>
.productItem-container {
  margin: 2%;
  padding: 0.5%;
  border: 2px solid blue;
  border-radius: 5%;
  button {
    background-color: rgb(191, 241, 217);
    padding: 1% 5%;
    border-radius: 15px;
  }
}

.productItem-container {
  img {
    max-width: 250px;
  }
}
</style>
