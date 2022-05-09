<template>
  <div>
    <child1 />
    <hr />
    <child2 />
  </div>
</template>

<script>
import Child1 from "./Child1";
import Child2 from "./Child2";
export default {
  name: "Parent",
  components: {
    Child1,
    Child2,
  },
};
</script>

<style lang="scss" scoped>
</style>