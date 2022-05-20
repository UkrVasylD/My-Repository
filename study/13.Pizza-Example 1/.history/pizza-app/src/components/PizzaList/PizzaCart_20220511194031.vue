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
.pizza-containe {
  width: ;
}
</style>