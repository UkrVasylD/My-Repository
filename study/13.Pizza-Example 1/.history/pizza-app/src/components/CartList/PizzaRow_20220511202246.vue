<template>
  <div class="pizza-row-container">
    <div>
      <img :src="pizza.imgSrc" alt="" />
    </div>
    <div>
      {{ pizza.title }}
    </div>
    <div>
      {{ pizza.price }}
    </div>
    <div>
      <button>-</button>
      <span>{{ cartItem.count }}</span>
      <button>+</button>
      <button>x</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PizzaRow",

  props: {
    cartItem: {
      type: Object,
      default: null,
    },
  },

  computed: {
    ...mapGetters(["getPizzaById"]),
    pizza() {
      return this.getPizzaById(this.cartItem.pizzaId);
    },
  },
};
</script>

<style lang="scss" scoped>
.pizza-row-container {
  display: flex;
}
img {
  width: 30px;
}
</style>