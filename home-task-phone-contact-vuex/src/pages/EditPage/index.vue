<template>
  <div>
    EDIT
    <div>
      <edit-user-form />
    </div>
  </div>
</template>

<script>
import EditUserForm from "@/components/EditUserForm";

export default {
  name: "EditPage",

  components: {
    EditUserForm,
  },
};
</script>

<style lang="scss" scoped></style>
