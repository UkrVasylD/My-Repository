<template>
  <div>
    About
    <div>
      <main-master-page>
        <template v-slot:header>
          My about Заголовок головної сторінки
          <button @click="goHome">Home</button>
        </template>
      </main-master-page>
    </div>
  </div>
</template>

<script>
import mainMasterPage from "@/masterpage/mainMasterPage.vue";

export default {
  name: "About",

  components: {
    mainMasterPage,
  },

  methods: {
    goHome() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
