<template>
  <div>
    <!-- Home -->
    <main-master-page>
      <template v-slot:kontent> <mySlider /></template>
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterPage/MainMasterPage.vue";
import mySlider from "@/components/mySlider.vue";

export default {
  name: "Home",

  components: {
    MainMasterPage,
    mySlider,
  },
};
</script>

<style lang="scss" scoped></style>
