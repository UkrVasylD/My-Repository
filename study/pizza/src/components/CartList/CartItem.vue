<template>
  <div class="CartItem-container">
    <div>
      <img :src="pizza.imgSrc" alt="" />
    </div>
    <div>
      {{ pizza.name }}
    </div>
    <div>
      {{ cartPizzaItem.count }}
    </div>
    <button @click="decrement(cartPizzaItem.id)">-</button>

    <div>
      {{ pizza.price }}
    </div>
    <button @click="increment(cartPizzaItem.id)">+</button>
    <button @click="del(cartPizzaItem.id)">X</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "CartItem",

  props: {
    cartPizzaItem: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters(["getPizzaById"]),
    pizza() {
      return this.getPizzaById(this.cartPizzaItem.pizzaId);
    },
  },
  methods: {
    ...mapActions(["decrement", "increment", "del"]),
  },
};
</script>

<style lang="css" scoped>
.CartItem-container {
  display: flex;
  margin: 20px;
  padding: 10px;
  border: 2px solid blue;
}
.CartItem-container img {
  width: 50px;
}
</style>
