<template>
  <div>
    <div>HOME</div>
    <main-master-page>
      <template v-slot:header>
        <p>Заголовок головної сторінки</p>
        <router-link to="/about">About</router-link>
      </template></main-master-page
    >
  </div>
</template>

<script>
import mainMasterPage from "@/masterpage/mainMasterPage.vue";
export default {
  name: "Home",

  components: {
    mainMasterPage,
  },
};
</script>

<style lang="scss" scoped></style>
