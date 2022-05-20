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
      <span>{{}}</span>
      <button>+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PizzaRow",
};
</script>

<style lang="scss" scoped>
</style>