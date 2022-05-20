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
      <button>+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PizzaCart",

  props: {
    pizza: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="css" scoped>
.pizza-container {
  width: 150px;
  border: 2px solid green;
  border-radius: 8px;
}
.pizza-container img {
  width: 130px;
}
</style>