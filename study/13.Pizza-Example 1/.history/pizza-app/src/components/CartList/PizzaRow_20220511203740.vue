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
      <button @click="onDecrement">-</button>
      <span>{{ cartItem.count }}</span>
      <button @click="onIncrement">+</button>
      <button @click="onDelete">x</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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

  methods: {
    ...mapActions(["cartAction"]),
    onDecrement() {
      this.cartAction({
        type: "decrement",
        value: this.cartItem.id,
      });
    },
    onIncrement() {
      this.cartAction({
        type: "increment",
        value: this.cartItem.id,
      });
    },
    onDelete() {
      this.cartAction({
        type: "delete",
        value: this.cartItem.id,
      });
    },
  },
};
</script>

<style lang="css" scoped>
.pizza-row-container {
  display: flex;
}
img {
  width: 30px;
}
</style>