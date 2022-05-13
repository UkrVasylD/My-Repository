<template>
  <div>
    HOME
    <div>
      <users-list />
    </div>
  </div>
</template>

<script>
import UsersList from "@/components/UsersList";

export default {
  name: "Home",

  components: {
    UsersList,
  },
};
</script>

<style lang="scss" scoped></style>
