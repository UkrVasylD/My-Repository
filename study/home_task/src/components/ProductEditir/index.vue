<template>
  <div>
    <div>
      <label> Prodect title <input v-model="title" type="text" /> </label>
    </div>
    <div>
      <label>
        Prodect price <input v-model.number="price" type="number" />
      </label>
    </div>
    <div>
      <button @click="onClick">{{ btnTitle }}</button>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "ProductEditir",

  components: {},

  data() {
    return {
      title: null,
      price: null,
    };
  },

  computed: {
    btnTitle() {
      console.log(this.$route.params.id);
      if (this.$route.params.id) {
        return "Save";
      } else {
        return "Add";
      }
    },
  },

  methods: {
    onClick() {
      if (this.$route.params.id) {
        store.updateProduct({
          id: this.$route.params.id,
          title: this.title,
          price: this.price,
        });
      } else {
        store.addProduct(this.title, this.price);
      }
      this.$router.push({ name: "Home" });
    },
  },

  mounted() {
    if (this.$route.params.id) {
      const product = store.getProductById(this.$route.params.id);
      this.title = product.title;
      this.price = product.price;
    }
  },
};
</script>

<style lang="scss" scoped></style>
