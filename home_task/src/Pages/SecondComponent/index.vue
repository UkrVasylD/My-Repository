<template>
  <div>
    EDIT

    {{ $route.params.id }}
    <div>
      <label> Title <input type="text" v-model="title" /></label>
    </div>
    <div>
      <label> Price <input type="text" v-model.number="price" /></label>
    </div>
    <div>
      <button @click="onSave">{{ btnText }}</button>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "SecondComponent",
  data() {
    return {
      title: null,
      price: null,
    };
  },
  computed: {
    btnText() {
      if (this.$route.params.id) {
        return "Save";
      } else {
        return "Add";
      }
    },
  },

  methods: {
    onSave() {
      if (this.$route.params.id) {
        store.updateProduct({
          id: this.$route.params.id,
          title: this.title,
          price: this.price,
        });
      } else {
        store.addProduct(this.title, this.price);
      }
      this.router.push({ name: "First" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
