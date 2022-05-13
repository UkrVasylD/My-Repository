<template>
  <div class="PizaaList-wraper">
    <pizaa-item
      v-for="pizza in getPizzaList"
      :key="pizza.id"
      :pizzaItem="pizza"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PizaaItem from "@/components/PizzaList/PizaaItem.vue";

export default {
  name: "PizaaList",
  components: {
    PizaaItem,
  },

  computed: {
    ...mapGetters(["getPizzaList"]),
    name() {
      return this.data;
    },
  },
};
</script>

<style lang="css" scoped>
.PizaaList-wraper {
  display: flex;
}
</style>
