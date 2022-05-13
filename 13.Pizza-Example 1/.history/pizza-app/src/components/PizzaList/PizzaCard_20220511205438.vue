<template>
  <div class="pizza-container">
    <div>
      <img :src="pizza.imgSrc" alt="" />
    </div>
    <div>
      {{ pizza.title }}
    </div>
    <div>
      {{ pizza.price }}
      <button @click="onAdd">+</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "PizzaCart",

  props: {
    pizza: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    ...mapActions(["addPizza"]),
    onAdd() {
      this.addPizza(this.pizza.id);
    },
  },
};
</script>

<style lang="css" scoped>
.pizza-container {
  width: 150px;
  border: 2px solid green;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
}
.pizza-container img {
  width: 130px;
}
</style>