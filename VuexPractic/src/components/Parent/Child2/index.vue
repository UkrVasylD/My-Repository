<template>
  <div>
    {{ getInpText }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Child2",

  computed: {
    ...mapGetters(["getInpText"]),
    name() {
      return this.data;
    },
  },
};
</script>

<style lang="scss" scoped></style>
