<template>
  <div>
    <div>
      <label> My text <input type="text" v-model="inpText" /> </label>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Child1",

  data() {
    return {
      inpText: null,
    };
  },

  methods: {
    ...mapActions(["updateMyText"]),
    name() {},
  },
  watch: {
    inpText(newValue) {
      this.updateMyText(newValue);
    },
  },
};
</script>

<style lang="scss" scoped></style>
