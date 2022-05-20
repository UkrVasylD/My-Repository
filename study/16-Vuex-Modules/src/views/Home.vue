<template>
  <div class="home">
    <div v-for="prod in getProductList" :key="prod.id">
      {{ prod.title }} - {{ prod.price }}
      <button @click="onDelete(prod.id)">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",

  computed: {
    ...mapGetters("product", ["getProductList"]),
  },

  methods: {
    ...mapActions("product", ["deleteProduct"]),
    onDelete(prodId) {
      this.deleteProduct(prodId);
    },
  },
};
</script>
