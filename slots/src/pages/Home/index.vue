<template>
  <div>
    HOME
    <div>
      <main-master-page>
        <template v-slot:header>
          My header Заголовок головної сторінки
          <span><router-link to="/about">About</router-link></span>
        </template>
        <template #kontent1> My kontent1 </template>
        <template #kontent2>
          <ul>
            <li>sfdgsg</li>
          </ul>
        </template>
      </main-master-page>
    </div>
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
