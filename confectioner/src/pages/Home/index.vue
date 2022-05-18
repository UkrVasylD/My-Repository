<template>
  <div>
    HOME
    <div>
      <main-master-page>
        <template v-slot:kontent>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB1BL98UtKwFCQbhDab-t6Jmb59b8Sxt6AZQ&usqp=CAU"
            alt="No img"
          />
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
