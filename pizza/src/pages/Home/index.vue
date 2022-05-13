<template>
  <div>
    HOME
    <div>
      <main-master-page>
        <template v-slot:kontent>
          <pizaa-list> gfhdhgd</pizaa-list>
        </template>
      </main-master-page>
    </div>
  </div>
</template>

<script>
import mainMasterPage from "@/masterpage/mainMasterPage.vue";
import PizaaList from "@/components/PizzaList";

export default {
  name: "Home",
  components: {
    mainMasterPage,
    PizaaList,
  },
};
</script>

<style lang="scss" scoped></style>
